import {getRequest} from 'src/service/api/api-service';

export function getRequestNormal(): Promise<string> {
  return getRequest('/template/get-normal');
}
