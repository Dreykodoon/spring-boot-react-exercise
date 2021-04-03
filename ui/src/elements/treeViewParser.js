export const createTreeViewElemIds = (children, parentId) => {
  return children.map((child) => {
    return `${parentId ? parentId : ''}/${child.id}`;
  });
}

export const getElementId = (treeViewElemId) => {
  const ids = treeViewElemId.split('/');
  return ids[ids.length - 1];
}

export const getElementLevel = (treeViewElemId) => {
  const ids = treeViewElemId.split('/');
  return ids.length - 1;
}