import HttpClient from '../http/http-client';
const BASE_URL = "https://coinmarketcap.com/api";
const httpClient = HttpClient.getInstance(BASE_URL);

export async function todo(): Promise<string> {
  return "todo";
}
