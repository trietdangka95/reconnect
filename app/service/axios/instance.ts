import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { IDataResponse } from './entities';
import { IServiceError } from './error';

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  protected readonly token?: string;

  constructor({
    baseURL,
    token,
  }: {
    baseURL?: string;
    token?: string;
    accountId?: string;
    serviceRole?: '' | 'Ops' | 'Sales' | 'Finances' | string;
  }) {
    this.instance = axios.create({
      baseURL: `${baseURL}`,
      headers: {
        'content-type': 'application/json',
      }
 
    });
    this.token = token || '';
    this.requestInterceptor();
    this.responseInterceptor();
  }

  private requestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      const session =
        sessionStorage.getItem(process.env.VITE_APP_DOMAIN_API_SERVER as string) ||
        this.token;
      (config.headers as any).Authorization = `Bearer ${session}`;
      (config.headers as any)['Accept-Language'] = `${localStorage.getItem(
        'i18nextLng'
      )}`;
      

      return config;
    });
  };

  private responseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this.handleError
    );
  };
  private _handleResponse = ({ data, config }: AxiosResponse): any => {
    const res = data as IDataResponse;
    const resHeaders = config.url;
    if (res.Code !== 'Success' && res.Code !== '200') {
      const error = {
        headers: resHeaders,
        message: res.Message,
        isError: true,
        data: res.Data,
        code: res.Code
      } as IServiceError;

      return Promise.reject(error);
    }

    return { data: res.Data };
  };

  protected handleError = (error: AxiosError): void => {
   

    throw error;
  };
}
