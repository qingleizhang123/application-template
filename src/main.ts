import { createApp } from 'vue';
import { ProgressBar, AppContextMenu, MedViewerControlComponent } from 'uih-mcsf-vue-apptoolkit';
import {
  Button,
  Table,
  Row,
  Col,
  Checkbox,
  Divider,
  Modal,
  Form,
  Spin,
  Progress,
  Carousel,
  Input,
  Slider,
  Popover,
  InputNumber,
  Select,
  Radio,
  Switch,
  Tooltip,
  Pagination,
  Collapse,
  Tabs,
  ConfigProvider,
  Alert,
  Breadcrumb,
} from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import './styles/index.less';
// import 'element-plus/dist/index.css'
import store from './store/index';

const app = createApp(App);
app.use(router);
app.use(store);
Button.install(app);
Table.install(app);
Row.install(app);
Col.install(app);
Checkbox.install(app);
Divider.install(app);
Modal.install(app);
Form.install(app);
Spin.install(app);
Progress.install(app);
Carousel.install(app);
Switch.install(app);
Input.install(app);
Slider.install(app);
Popover.install(app);
InputNumber.install(app);
Select.install(app);
Radio.install(app);
ProgressBar.install(app);
Tooltip.install(app);
Pagination.install(app);
Collapse.install(app);
Tabs.install(app);
Alert.install(app);
Breadcrumb.install(app);
ConfigProvider.install(app);
AppContextMenu.install(app);
MedViewerControlComponent.install(app);
app.mount('#app');
