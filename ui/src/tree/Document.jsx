import {useState} from "react";
import {getElementLevel} from "../elements/treeViewParser";

const Document = ({title, treeViewElemId, onClick}) => {
  const [expanded, setExpanded] = useState(false);

  const onClickHandler = () => {
    setExpanded(!expanded);
    onClick(treeViewElemId, !expanded);
  }

  const chevron = expanded ? 'v' : '>';
  const level = getElementLevel(treeViewElemId);

  return (
    <div style={{cursor: 'pointer', paddingLeft: `${25 * level}px`}} onClick={onClickHandler}>
      <span style={{fontWeight: 'bold'}}>{chevron}</span> {title}
    </div>
  );
}

export default Document;