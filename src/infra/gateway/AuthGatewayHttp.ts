import { UserLoginDTO, UserRegisterDTO } from "../../domain/types/Auth";
import { User } from "../../domain/types/User";
import AxiosAdapter from "../http/AxiosAdapter";
import IHttpClient from "../http/IHttpClient";

export default class AuthGatewayHttp {
  httpClient: IHttpClient;
  url: string;

  constructor() {
    this.url = "http://localhost:3333/auth";
    this.httpClient = new AxiosAdapter();
  }

  async signIn(data: UserLoginDTO): Promise<any> {
    try {
      const response = await this.httpClient.post(`${this.url}/signin`, data);
      return response;
    } catch (error: any) {
      console.error(`Error in signIn: ${error}`);
      throw new Error(error.response.data.message);
    }
  }

  async signUp(data: UserRegisterDTO): Promise<any> {

    try {
      const response = await this.httpClient.post(`${this.url}/signup`, data);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
}