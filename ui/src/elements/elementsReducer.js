import {FETCH_ELEMENT_CHILDREN} from "./elementsActions";
import {enhanceDocumentProps, parseElements} from "./elementParser";

const INIT_STATE = {}

export default function elementsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ELEMENT_CHILDREN: {
      const enhancedElements = enhanceDocumentProps(action.data);
      const parsedElements = parseElements(enhancedElements);
      return Object.assign({}, state, parsedElements);
    }
    default:
      return INIT_STATE;
  }
}