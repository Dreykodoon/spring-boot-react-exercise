import { connect } from 'react-redux';

import {THUMBNAIL_VIEW, TREE_VIEW} from "./constants";
import ThumbnailsView from "../components/ThumbnailsView";
import TreeView from "../components/TreeView";


const View = ({activeView}) => {
  switch (activeView) {
    case THUMBNAIL_VIEW: {
      return <ThumbnailsView/>
    }
    case TREE_VIEW: {
      return <TreeView/>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.views.active,
  }
}

export default connect(mapStateToProps, null)(View);