import {useState} from "react";

const Document = ({title, treeViewElemId, onClick}) => {
  const [expanded, setExpanded] = useState(false);

  const onClickHandler = () => {
    setExpanded(!expanded);
    onClick(treeViewElemId, !expanded);
  }

  const chevron = expanded ? 'v' : '>'

  return (
    <div style={{cursor: 'pointer'}} onClick={onClickHandler}>
      <span style={{fontWeight: 'bold'}}>{chevron}</span> {title}
    </div>
  );
}

export default Document;