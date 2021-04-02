import {TREE_VIEW} from "./constants";
import {CHANGE_VIEW} from "./viewActions";

const INIT_STATE = {
  active: TREE_VIEW,
}

export default function viewsReducer(state = [], action) {
  switch (action.type) {
    case CHANGE_VIEW: {
      return {
        active: action.data,
      }
    }
    default:
      return INIT_STATE;
  }
}