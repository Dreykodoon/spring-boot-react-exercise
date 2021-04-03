import { connect } from 'react-redux';


const TreeView = ({treeView, elementsMap}) => {
  return (
    <div>
      Tree
      {treeView.map((treeViewElemId) => (
        <div key={treeViewElemId}>
          {elementsMap[treeViewElemId.substring(1)].name}
        </div>
      ))}
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