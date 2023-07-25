import * as AppToolkit from 'uih-mcsf-apptoolkit';
// tslint:disable-next-line: no-var-requires
const baseUrl = `${location.protocol}//${location.host}${location.pathname}`;
export class NeuroAppConfigService implements AppToolkit.IAppConfigService {
  private configUrl = `${baseUrl}assets/appconfig.json`;

  private _config: Promise<AppToolkit.AppConfig> | undefined = undefined;

  getAppItems(): Promise<AppToolkit.AppItem[]> {
    return this.getAppConfig().then(value => Promise.resolve(value.appItems));
  }

  getAppConfig(): Promise<AppToolkit.AppConfig> {
    if (!this._config) {
      this._config = AppToolkit.AppConfigHelper.parseAppConfig(this.configUrl);
    }
    return this._config;
  }
}
