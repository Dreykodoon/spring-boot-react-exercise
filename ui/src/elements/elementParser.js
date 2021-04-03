import {FOLDER} from "./constants";

export const parseElements = (elementsArray) => {
  const parsedElements = {};
  elementsArray.forEach((child) => {
    parsedElements[child.id] = child;
  });

  return parsedElements;
}

export const enhanceDocumentProps = (elementsArray) => {
  return elementsArray.map((element) => {
    if (element.type === FOLDER) {
      element._previouslyExpanded = false;
    }
    return element;
  })
}