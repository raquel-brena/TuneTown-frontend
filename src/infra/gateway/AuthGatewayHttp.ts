import { UserLogin, UserRegister } from "../../domain/types/Auth";
import AxiosAdapter from "../http/AxiosAdapter";
import IHttpClient from "../http/IHttpClient";

export default class AuthGatewayHttp {
  httpClient: IHttpClient;
  url: string;

  constructor() {
    this.url = "http://localhost:3333/auth";
    this.httpClient = new AxiosAdapter();
  }

  async signIn(data: UserLogin): Promise<any> {
    try {
      const response = await this.httpClient.post(`${this.url}/signin`, data);
      console.log(response);
      return response;
    } catch (error: any) {
      console.error(`Error in signIn: ${error}`);
      throw new Error(error.response.data.message);
    }
  }

  async signUp(data: UserRegister): Promise<any> {
    try {
      const response = await this.httpClient.post(`${this.url}/signup`, data);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }

  async storeTokenSpotify(data: any): Promise<any> {
    try {
      const response = await this.httpClient.post(`${this.url}/spotifyTokens`, data);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
}