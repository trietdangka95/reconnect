import { IResponse } from "./axios/entities";
import { catchAxiosError } from "./axios/error";
import HttpClient from "./axios/instance";

const Auth = "admin/auth";
export class AuthAPI extends HttpClient {
  constructor(token?: string) {
    super({ baseURL: process.env.VITE_APP_DOMAIN_API_SERVER, token });
  }

  public login = async (data: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .post(`${Auth}/login`, data)
      .catch(catchAxiosError);

    return response;
  };
}
