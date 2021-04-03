import { connect } from 'react-redux';


const ThumbnailsView = ({elements}) => {
  console.log(elements)

  return (
    <div>Thumbnails</div>
  );
}

const mapStateToProps = (state) => {
  return {
    elements: state.elements.elementsMap,
  }
}

export default connect(mapStateToProps, null)(ThumbnailsView);