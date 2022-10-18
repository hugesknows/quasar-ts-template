import {api} from 'boot/axios';
import {AxiosResponse} from 'axios';
import {RestResponse} from 'src/service/api/types';
import {showErrorMessage} from 'src/util/alert-message';

// eslint-disable-next-line
export async function postRequest<T>(url: string, payload: any = {}) {
  return api.post(url, payload).then((response: AxiosResponse<RestResponse<T>>) => {
    if (response.data.success) {
      // @ts-ignore
      return response.data.body.result;
    } else {
      showErrorMessage(response.data.errors[0]);
      throw new Error(response.data.errors[0]);
    }
  }).catch((error) => {
    const message = (error.response && error.response.data && error.response.data.errors) !== undefined ? error.response.data.errors[0] : error.message;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    throw new Error(message);
  });
}

export async function getRequest<T>(url: string) {
  return api.get(url).then((response: AxiosResponse<RestResponse<T>>) => {
    if (response.data.success) {
      // @ts-ignore
      return response.data.body.result;
    } else {
      showErrorMessage(response.data.errors[0]);
      throw new Error(response.data.errors[0]);
    }
  }).catch((error) => {
    const message = (error.response && error.response.data && error.response.data.errors) !== undefined ? error.response.data.errors[0] : error.message;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    throw new Error(message);
  });
}
