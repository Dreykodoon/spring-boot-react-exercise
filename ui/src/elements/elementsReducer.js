import {FETCH_ELEMENT_CHILDREN} from "./elementsActions";
import {enhanceDocumentProps, parseElements} from "./elementParser";
import {parseTreeView} from "./treeViewParser";

const INIT_STATE = {
  elementsMap: {},
  treeView: [],
}

export default function elementsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_ELEMENT_CHILDREN: {
      const {children, parentId} = action.data;

      const enhancedElements = enhanceDocumentProps(children);
      const parsedElements = parseElements(enhancedElements);

      const newTreeView = parseTreeView(children, parentId)
      return {
        ...state,
        elementsMap: Object.assign({}, state.elementsMap, parsedElements),
        treeView: newTreeView,
      }
    }
    default:
      return state;
  }
}