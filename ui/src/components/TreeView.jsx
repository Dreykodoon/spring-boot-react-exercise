import { connect } from 'react-redux';


const TreeView = ({root}) => {
  console.log(root);

  return (
    <div>Tree</div>
  );
}

const mapStateToProps = (state) => {
  return {
    root: state.elements.root,
  }
}

export default connect(mapStateToProps, null)(TreeView);