import { connect } from 'react-redux';


const ThumbnailsView = () => {
  return (
    <div>Thumbnails view. Work in progress</div>
  );
}

const mapStateToProps = (state) => {
  return {
    elements: state.elements.elementsMap,
  }
}

export default connect(mapStateToProps, null)(ThumbnailsView);