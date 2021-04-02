export const CHANGE_VIEW = 'CHANGE_VIEW';

export const changeView = (viewName) => ({
  type: CHANGE_VIEW,
  data: viewName,
})