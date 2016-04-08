import 'bootstrap';
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('tungptvn/aurelia-paginator');

  aurelia.start().then(a => a.setRoot('src/app'));
}
