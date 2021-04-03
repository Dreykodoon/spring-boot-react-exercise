import axios from "axios";
import {getElementId} from "./treeViewParser";


export const FETCH_ELEMENT_CHILDREN = 'FETCH_ELEMENT_CHILDREN';

export const fetchElementChildren = (treeViewElemId, expand) => {
  return (dispatch) => {
    const url = treeViewElemId === null
      ? '/api/document/root' : `/api/document/${getElementId(treeViewElemId)}`;

    return axios.get(url)
      .then((response) => {
        dispatch({
          type: FETCH_ELEMENT_CHILDREN,
          data: {
            children: response.data,
            treeViewParentId: treeViewElemId,
            expand,
          },
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}