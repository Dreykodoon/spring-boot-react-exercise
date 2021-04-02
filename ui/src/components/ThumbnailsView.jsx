import { connect } from 'react-redux';


const ThumbnailsView = ({root}) => {
  console.log(root)

  return (
    <div>Thumbnails</div>
  );
}

const mapStateToProps = (state) => {
  return {
    root: state.elements.root,
  }
}

export default connect(mapStateToProps, null)(ThumbnailsView);