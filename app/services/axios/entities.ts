import { ErrorResponse } from "./error";

export interface IResponse {
  data?: any;
  error?: ErrorResponse;
}

export type IDataResponse = {
  code: number;
  data: any;
  message: string;
  responseData: any;
  routeToURL: string | null;
  success: boolean;
};
