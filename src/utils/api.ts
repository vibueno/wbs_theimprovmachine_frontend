import axios from 'axios';
import { BackendError, ApiError } from '../utils/error';
import { msgBackendError, msgAPIError } from '../vars/messages';

import { fillInStrTemplate } from '../utils/strtemplate';

const apiRequest = async (url: string) => {
  let response;
  try {
    response = await axios.get(url);
    return response.data;
  } catch (e) {
    if (e.response) {
      throw new ApiError(
        fillInStrTemplate(msgAPIError, [
          { param: 'errorCode', value: e.response.data.status },
          { param: 'errorMsg', value: e.response.data.message }
        ])
      );
    } else {
      throw new BackendError(
        fillInStrTemplate(msgBackendError, [
          { param: 'errorMsg', value: e.message }
        ])
      );
    }
  }
};

export default apiRequest;
