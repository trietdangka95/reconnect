import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import queryString from "query-string";
import { IDataResponse } from "./entities";
import { IServiceError } from "./error";
import { HTTP_STATUS_CODE } from "@/app/components/constants";
import { ENV } from "@/app/components/constants/Env";

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  protected readonly token?: string;

  constructor({
    baseURL,
    token,
    accountId = "",
  }: {
    baseURL?: string;
    token?: string;
    accountId?: string;
  }) {
    this.instance = axios.create({
      baseURL: `${baseURL}/api`,
      headers: {
        "content-type": "application/json",
        "Accept-Account": accountId,
      },
      paramsSerializer: (params) =>
        queryString.stringify(params, {
          skipNull: true,
        }),
    });
    this.token = token || "";
    this.requestInterceptor();
    this.responseInterceptor();
  }

  private requestInterceptor = () => {
    this.instance.interceptors.request.use((config: any) => {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const session =
        sessionStorage.getItem(ENV.VITE_APP_TOKEN_COOKIE_NAME) || this.token;
      (config.headers as any).Authorization = `Bearer ${session}`;
      (config.headers as any)["Accept-Language"] = `${localStorage.getItem(
        "i18nextLng"
      )}`;
      (config.headers as any)[
        ENV.VITE_APP_ACTIVE_ROLE
      ] = `${sessionStorage.getItem(ENV.VITE_APP_ACTIVE_ROLE)}`;
      (config.headers as any)["Accept-Timezone"] = tz;

      return config;
    });
  };

  /*
   * When response code is 401, try to refresh the token.
   * Eject the interceptor so it doesn't loop in case
   * token refresh causes the 401 response
   */
  // axios.interceptors.response.eject(interceptor);
  private responseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this.handleError
    );
  };
  private _handleResponse = ({ data, config }: AxiosResponse): any => {
    const res = data as IDataResponse;
    const resHeaders = config.url;
    if (!res.success && res.code !== 200) {
      const error = {
        headers: resHeaders,
        message: res.message,
        isError: true,
        data: res.data,
        code: res.code,
      } as IServiceError;

      return Promise.reject(error);
    }

    return { data: res.data };
  };

  protected handleError = (error: AxiosError): void => {
    const parsedHash = location.hash.split("?");
    const isForbidden = location.hash.split("/");

    if (
      error &&
      error.response?.status === HTTP_STATUS_CODE.FORBIDDEN &&
      parsedHash.length > 0 &&
      isForbidden[isForbidden.length - 1] !== `${HTTP_STATUS_CODE.FORBIDDEN}`
    ) {
      location.replace(`${parsedHash}/${HTTP_STATUS_CODE.FORBIDDEN}`);
    }

    throw error;
  };
}
