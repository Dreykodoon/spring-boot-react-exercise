import axios from "axios";


export const FETCH_ELEMENT_CHILDREN = 'FETCH_ELEMENT_CHILDREN';

export const fetchElementChildren = (elementId) => {
  return (dispatch) => {
    // TODO url for non-root element needs work
    const url = elementId === null ? '/api/document/root' : `/api/document/${elementId}`;

    return axios.get(url)
      .then((response) => {
        dispatch({
          type: FETCH_ELEMENT_CHILDREN,
          data: {
            children: response.data,
            parentId: elementId,
          },
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}