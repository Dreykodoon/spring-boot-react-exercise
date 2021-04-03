import {connect} from 'react-redux';
import {DOCUMENT} from "../elements/constants";
import Document from "./Document";
import Asset from "./Asset";
import {fetchElementChildren} from "../elements/elementsActions";
import {getElementId} from "../elements/treeViewParser";


const TreeView = ({treeView, elementsMap, expandCollapseDocumentHandler}) => {
  return (
    <div>
      Tree
      {treeView.map((treeViewElemId) => {
        const element = elementsMap[getElementId(treeViewElemId)]

        return element.type === DOCUMENT
          ? <Document
            key={treeViewElemId}
            treeViewElemId={treeViewElemId}
            title={element.title}
            onClick={expandCollapseDocumentHandler}
          />
          : <Asset
            key={treeViewElemId}
            title={element.title}
            mimetype={element.mimetype}
          />;
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    expandCollapseDocumentHandler: (treeViewElemId, expand) => {
      dispatch(fetchElementChildren(treeViewElemId, expand));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    treeView: state.elements.treeView,
    elementsMap: state.elements.elementsMap,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeView);