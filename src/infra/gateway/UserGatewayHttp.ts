import { Profile } from "../../domain/types/Profile";
import { User } from "../../domain/types/User";
import AxiosAdapter from "../http/AxiosAdapter";
import IHttpClient from "../http/IHttpClient";

export default class UserGatewayHttp {
  httpClient: IHttpClient;
  url: string;

  constructor() {
    this.url = "http://localhost:3333/user";
    this.httpClient = new AxiosAdapter();
  }

  async getUsers(): Promise<User[]> {
    const response = await this.httpClient.get(`${this.url}/user/`);
    return response.data;
  }

  async getProfileByUserId(id: string): Promise<Profile> {
    const response = await this.httpClient.get(`${this.url}/profile/${id}`);
    return response.data;
  }

  async signUp(userData: any): Promise<any> {
    const response = await this.httpClient.post(`${this.url}/user/`, userData);
    return response.data;
  }

  async signIn(userData: any): Promise<any> {
    const response = await this.httpClient.post(
      `${this.url}/user/signin`,
      userData
    );
    return response.data;
  }

  async updateUser(userData: any): Promise<any> {
    const response = await this.httpClient.put(`${this.url}/user/`, userData);
    return response.data;
  }
}