
// tslint:disable-next-line: no-var-requires
const baseUrl = `${location.protocol}//${location.host}${location.pathname}`;
const configUrl = `${baseUrl}assets/appconfig.json`;
let config = {
  protocolAPIUrl: '',
  serverAPIBaseUrl: '',
};

function getConfig() {
  const xml = new XMLHttpRequest();
  console.log(configUrl);
  xml.open('GET', configUrl, false); // 同步请求

  xml.onreadystatechange = e => {
    if (xml.readyState === 4 && (xml.status === 200 || xml.status === 304 || xml.status === 201)) {
      config = JSON.parse(xml.responseText);
    }
  };
  xml.send(null);
}
getConfig();

export const AppConfig = config;
