export const parseTreeView = (children, parentId) => {
  return children.map((child) => {
    return `${parentId ? parentId : ''}/${child.id}`;
  });
}