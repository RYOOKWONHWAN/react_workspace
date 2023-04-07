import axios from 'axios';
import { baseUrl } from '../../apiurl';

function getMemberUpdate(formdata, config) {
  return async () => {
    await axios
      .put(`${baseUrl}/member/update`, formdata, config)
      .then((response) => response.data);
  };
}
export const memberActions = {
  getMemberUpdate,
};
