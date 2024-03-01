export default class Route {
  constructor(url, title, pathHml, pathJS ="") {
    this.url = url;
    this.title = title;
    this.pathHml = pathHml;
    this.pathJS = pathJS;
  }
}