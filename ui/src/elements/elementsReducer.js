import * as R from 'ramda';

import {FETCH_ELEMENT_CHILDREN} from "./elementsActions";
import {enhanceDocumentProps, parseElements} from "./elementParser";
import {createTreeViewElemIds, getElementId} from "./treeViewParser";


const INIT_STATE = {
  elementsMap: {},
  treeView: [],
}

export default function elementsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_ELEMENT_CHILDREN: {
      const {children, treeViewParentId} = action.data;

      const enhancedElements = enhanceDocumentProps(children);
      const parsedElements = parseElements(enhancedElements);
      const newElementsMap = Object.assign({}, state.elementsMap, parsedElements);
      if (treeViewParentId) {
        newElementsMap[getElementId(treeViewParentId)]._previouslyExpanded = true;
      }

      const newTreeViewElemIds = createTreeViewElemIds(children, treeViewParentId);
      const parentIdIndex = state.treeView.indexOf(treeViewParentId);

      return {
        ...state,
        elementsMap: newElementsMap,
        treeView: R.insertAll(parentIdIndex + 1, newTreeViewElemIds, state.treeView),
      }
    }
    default:
      return state;
  }
}