import {FETCH_ELEMENT_CHILDREN} from "./elementsActions";

const INIT_STATE = {
  root: [],
}

export default function elementsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ELEMENT_CHILDREN: {
      return {
        root: action.data,
      }
    }
    default:
      return INIT_STATE;
  }
}