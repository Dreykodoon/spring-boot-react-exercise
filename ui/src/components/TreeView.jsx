import { connect } from 'react-redux';


const TreeView = ({elements}) => {
  console.log(elements);

  return (
    <div>Tree</div>
  );
}

const mapStateToProps = (state) => {
  return {
    elements: state.elements,
  }
}

export default connect(mapStateToProps, null)(TreeView);