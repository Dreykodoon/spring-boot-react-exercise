import {getElementLevel} from "../elements/treeViewParser";

const Asset = ({title, mimetype, treeViewElemId}) => {
  const level = getElementLevel(treeViewElemId);

  return (
    <div style={{paddingLeft: `${25 * level}px`}}>
      {`${title}.${mimetype}`}
    </div>
  );
}

export default Asset;