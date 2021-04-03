import { connect } from 'react-redux';
import {DOCUMENT} from "../elements/constants";


const TreeView = ({treeView, elementsMap}) => {
  return (
    <div>
      Tree
      {treeView.map((treeViewElemId) => {
        // TODO this will need to be reviewed
        const element = elementsMap[treeViewElemId.substring(1)]
        const elemLabel = element.type === DOCUMENT
          ? element.title
          : `${element.title}.${element.mimetype}`;

        return (
          <div key={treeViewElemId}>
            {elemLabel}
          </div>
        )
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    treeView: state.elements.treeView,
    elementsMap: state.elements.elementsMap,
  }
}

export default connect(mapStateToProps, null)(TreeView);