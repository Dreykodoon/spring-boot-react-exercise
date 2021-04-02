import { connect } from 'react-redux';

import {THUMBNAIL_VIEW, TREE_VIEW} from "./constants";
import {changeView} from "./viewActions";

const ViewSelector = ({activeView, onChangeView}) => {
  const onChangeHandler = (e) => {
    onChangeView(e.target.value)
  }

  return (
    <select name="view_mode" id="view_mode" value={activeView} onChange={onChangeHandler}>
      <option value={THUMBNAIL_VIEW}>Thumbnails</option>
      <option value={TREE_VIEW}>Tree</option>
    </select>
  );
}

const mapStateToProps = (state) => {
  return {
    activeView: state.views.active,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeView: (viewName) => {
      dispatch(changeView(viewName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSelector);