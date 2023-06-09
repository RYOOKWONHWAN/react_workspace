import axios from 'axios';
import { baseUrl } from '../../apiurl';
import { boardReducers } from '../reducers/board_reducer';
function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/list/${currentPage}`)
      .then((response) => response.data);
    console.log(data);
    dispatch(boardReducers.getBoardList({ data }));
  };
}

function getBoardDetail(num, config) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/view/${num}`, config)
      .then((response) => response.data);
    console.log(data);
    dispatch(boardReducers.getBoardDetail({ data }));
  };
}
function getBoardDownload(upload, config) {
  return async (dispatch) => {
    const data = await axios
      .get(
        `${baseUrl}/board/contentdownload/${upload}`,
        {
          responseType: 'blob',
        },
        config
      )
      .then((response) => response.data);
    // dispatch(boardActions.getBoardDownload(data));

    return data;
  };
}

function getBoardDelete(num, config) {
  return async (dispatch) => {
    await axios
      .delete(`${baseUrl}/board/delete/${num}`, config)
      .then((response) => response.data);
  };
}
function getBoardWrite(formdata, config) {
  return async () => {
    await axios
      .post(`${baseUrl}/board/write`, formdata, config)
      .then((response) => response.data);
  };
}
function getBoardUpdate(formdata, config) {
  return async () => {
    await axios
      .put(`${baseUrl}/board/update`, formdata, config)
      .then((response) => response.data);
  };
}
export const boardActions = {
  getBoardList,
  getBoardDetail,
  getBoardDownload,
  getBoardDelete,
  getBoardWrite,
  getBoardUpdate,
};
