import axios from 'axios';

import { baseUrl } from '../apiurl';

const getAction = async (dispatch) => {
  await axios
    .get(`${baseUrl}/todo/all`)
    .then((Response) => {
      console.log(Response);
      console.log('1111');
      dispatch({ type: 'LIST', todos: Response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};
const insertAction = async (input) => {
  await axios.post(baseUrl + '/todo/', { todoname: input }).then((Response) => {
    window.location.replace('/');
  });
};
const deleteAction = async (id) => {
  await axios
    .delete(baseUrl + '/todo/' + id)
    .then((Response) => {
      console.log(Response.data);
      window.location.replace('/');
    })
    .catch((error) => {
      console.log(error);
    });
};
const updateAction = async (id, completed) => {
  await axios
    .put(baseUrl + '/todo/' + id + '/' + completed)
    .then((Response) => {
      window.location.replace('/');
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAction, insertAction, deleteAction, updateAction };
