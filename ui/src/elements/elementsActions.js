import axios from "axios";


export const FETCH_ELEMENT_CHILDREN = 'FETCH_ELEMENT_CHILDREN';

export const fetchElementChildren = (elementId) => {
  return (dispatch) => {
    return axios.get(`/api/document/${elementId}`)
      .then((response) => {
        dispatch({
          type: FETCH_ELEMENT_CHILDREN,
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}