import { Options, Vue } from 'vue-class-component';
import * as AppToolkit from 'uih-mcsf-apptoolkit';
import { SeriesViewModel } from 'uih-mcsf-apptoolkit';
import * as ServerAPI from 'uih-mcsf-serverapi';
import { Tag } from 'uih-mcsf-dataheader';
import { initConfig, setSource, log, LogType, upload } from 'uih-mcsf-log';
import axios from 'axios';
import { Moment } from 'moment';
import { AppConfigService } from 'uih-mcsf-vue-apptoolkit';
import * as Utility from 'uih-mcsf-utility';
import * as $PBRoot from 'uih-mcsf-protocol';
import { NeuroSeriesViewModel } from '@/framework/defines';
import { NeuroAppConfigService } from '../framework/models/appConfig-service';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;

@Options({
  directives: {},
  components: {},
})
export default class Home extends Vue {
  dataRange: Moment[] = null;
  columns = [
    {
      title: 'PatientName',
      key: 'patientName',
      dataIndex: 'patientName',
    },
    {
      title: 'PatientAge',
      key: 'patientAge',
      dataIndex: 'patientAge',
    },
    {
      title: 'Operation',
      key: 'operation',
      slots: { customRender: 'operation' },
    },
  ];

  studies = [];
  seriesList = [];
  appList: AppToolkit.AppItem[] = [];
  appConfig = new NeuroAppConfigService();
  currentStudyUid: string;
  private dbDataMap: Map<number, string> = undefined;
  seriesThumbnail: string;
  checkedSeriesList = []; // 选中的序列UID列表

  /** DBItemDto结果转换Map结构，提高查询性能 */
  public get DbDataMap(): Map<number, string> {
    return this.dbDataMap;
  }

  startInMicro = false;

  beforeCreate() {
    // 初始化LOG
    setSource('Home');
    initConfig('assets/log.json');
    this.appConfig.getAppConfig().then(config => {
      console.log(config);
    });
  }

  beforeMount(): void {
    this.update();
    this.getAppList();
  }

  reload(): void {
    log(LogType.DEV_INFO, 'reload');
    this.update();
  }

  report(): void {
    if (!this.dataRange || this.dataRange.length !== 2) {
      return;
    }
    const fromDay = this.dataRange[0].toDate();
    const toDay = this.dataRange[1].toDate();
    upload(fromDay, toDay);
  }

  checkSeries(list: string[]) {
    this.checkedSeriesList = list;
    sessionStorage.setItem('checkSeries', this.checkedSeriesList.join(',')); // 将选择的seriesUID存在sessionStorage中
  }

  startApp(appName: string) {
    let childRoute = '';
    let curUrl = '';
    if (appName === 'BoldAgreementEdit' || appName === 'DtiAgreementEdit') {
      childRoute = appName;
    } else {
      childRoute = `${appName}/${AppToolkit.RouteParaEnum.RoutePara_HostType_WebHost}`;
    }

    if (process.env.NODE_ENV === 'production' && window.location.pathname.includes('neuro')) {
      curUrl = appName.includes('AgreementEdit')
        ? `/neuro/#/app/${childRoute}`
        : `${window.location.origin}/neuro/#/app/${childRoute}`;
    } else {
      curUrl = appName.includes('AgreementEdit')
        ? `/#/app/${childRoute}`
        : `${window.location.origin}/#/app/${childRoute}`;
    }
    window.open(curUrl, '_blank');
  }

  getAppList() {
    this.appConfig.getAppItems().then(item => {
      this.appList = item;
    });
  }

  async DBItemDtoToMsgSeries(data: ServerAPI.DBItemDto, dicomClient: ServerAPI.DicomClient): Promise<$PB.IMsgStudy> {
    this.dbDataMap = new Map<number, string>();
    const msgSeries = $PB.MsgSeries.create();
    data.columnItems.forEach(item => this.dbDataMap.set(item.tag, item.value));
    let tagAttr = this.dbDataMap.get(Tag.kTagDcm_SeriesTable_SeriesDescription);
    if (tagAttr) {
      msgSeries.seriesDescription = tagAttr;
    }
    tagAttr = this.dbDataMap.get(Tag.kTagDcm_SeriesTable_SeriesNumber);
    if (tagAttr) {
      msgSeries.seriesNumber = Number(tagAttr);
    }
    tagAttr = this.dbDataMap.get(Tag.kTagDcm_SeriesTable_SeriesInstanceUID);
    if (tagAttr) {
      msgSeries.seriesInstanceUID = tagAttr;
    }
    tagAttr = this.dbDataMap.get(Tag.kTagDcm_SeriesTable_SeriesThumbnailFilePath);
    if (tagAttr) {
      try {
        const response = await dicomClient.getThumbnail(tagAttr);
        this.seriesThumbnail = Utility.BlobConvert.toImgURL(response.data);
      } catch (e) {
        console.error(e);
      }
    }
    return msgSeries;
  }

  onStudyRowClick(studyUid: string) {
    this.currentStudyUid = studyUid;
    this.seriesList = [];
    const seriesTableTags = [
      Tag.kTagDcm_SeriesTable_SeriesDescription,
      Tag.kTagDcm_SeriesTable_SeriesNumber,
      Tag.kTagDcm_SeriesTable_SeriesInstanceUID,
      Tag.kTagDcm_SeriesTable_SeriesThumbnailFilePath,
    ];
    this.appConfig.getAppConfig().then(appconfig => {
      const dicomClient = new ServerAPI.DicomClient(appconfig.serverUrl);
      dicomClient.getSeriesList(studyUid, seriesTableTags).then(async result => {
        if (result && result.length) {
          for (const seriesDto of result) {
            this.DBItemDtoToMsgSeries(seriesDto, dicomClient).then(msgSeries => {
              const series = new SeriesViewModel(msgSeries);
              const seriesThumbnailUrl = this.seriesThumbnail;
              const s: NeuroSeriesViewModel = {
                thumbnail: seriesThumbnailUrl,
                seriesUid: series.seriesInstanceUID,
                descritpion: series.seriesDescription,
                isSelected: false,
              };
              this.seriesList.push(s);
            });
          }
        }
      });
    });
  }

  update(): void {
    this.appConfig.getAppConfig().then(appconfig => {
      const dicomClient = new ServerAPI.DicomClient(appconfig.serverUrl);
      console.log('get studylist start');
      this.studies.splice(0);
      const studyTableTags = [
        Tag.kTagDcm_StudyTable_StudyInstanceUID,
        Tag.kTagDcm_StudyTable_PatientAge,
        Tag.kTagDcm_StudyTable_PatientUIDFk,
      ];
      dicomClient
        .getStudyList(null, studyTableTags)
        .then(async result => {
          if (result && result.length) {
            for (const study of result) {
              let columnDTO = study.columnItems.find(item => item.tag === Tag.kTagDcm_StudyTable_PatientUIDFk);
              if (columnDTO === undefined) {
                continue;
              }
              const patient = await dicomClient.getPatient(columnDTO.value, [Tag.kTagDcm_PatientTable_PatientName]);
              columnDTO = patient.columnItems.find(item => item.tag === Tag.kTagDcm_PatientTable_PatientName);
              const patientName = columnDTO ? columnDTO.value : '';
              columnDTO = study.columnItems.find(item => item.tag === Tag.kTagDcm_StudyTable_PatientAge);
              const patientAge = columnDTO ? columnDTO.value : '';
              columnDTO = study.columnItems.find(item => item.tag === Tag.kTagDcm_StudyTable_StudyInstanceUID);
              const studyInstanceUID = columnDTO ? columnDTO.value : '';

              this.studies.push({
                studyInstanceUID,
                patientName,
                patientAge,
              });
            }
          }
          console.log('get studylist end');
        })
        .catch(error => console.error(error));
    });
  }
}
