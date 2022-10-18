export interface RestResponse<T> {
  success: boolean;
  errors: string[];
  warnings: string[];
  result: T;
}
