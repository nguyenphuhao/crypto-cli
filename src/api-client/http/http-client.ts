import axios, { AxiosInstance } from "axios";

export function createInstance(baseURL: string) {
  const instance = axios.create({
    baseURL,
  });
  instance.interceptors.response.use(
    function (response) {
      if (response.data.Response === 'Error') {
        throw new Error(response.data.Message)
      }
      return response.data;
    },
    function (error) {
      throw new Error(error)
    }
  );
  return instance;
}

class HttpClient {
  static instances: { [key: string]: AxiosInstance } = {};
  constructor() {
    throw new Error("new instance does not allow");
  }
  static getInstance(baseURL: string): AxiosInstance {
    if (HttpClient.instances[baseURL]) {
      return HttpClient.instances[baseURL];
    }
    HttpClient.instances[baseURL] = createInstance(baseURL);
    return HttpClient.instances[baseURL];
  }
}
export default HttpClient;
