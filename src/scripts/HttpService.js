export default class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  fetchData(apiUrl, config) {
    return this.httpClient(apiUrl, config);
  }
}
