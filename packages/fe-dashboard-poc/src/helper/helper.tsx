import shortid from "shortid"
import { ROW, COLUMN, COMPONENT } from "./constants";

export const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const remove = (arr: any[], index: number): any[] => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1)
];

export const insert = (arr: any[], index: number, newItem: any): any[] => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
];

export const reorderChildren = (
  children: any[],
  splitDropZonePath: string[],
  splitItemPath: string[]
): any[] => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    const itemIndex = Number(splitItemPath[0]);
    return reorder(children, itemIndex, dropZoneIndex);
  }

  const updatedChildren = [...children];

  const curIndex = Number(splitDropZonePath.slice(0, 1));

  const splitDropZoneChildrenPath = splitDropZonePath.slice(1);
  const splitItemChildrenPath = splitItemPath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: reorderChildren(
      nodeChildren.children,
      splitDropZoneChildrenPath,
      splitItemChildrenPath
    )
  };

  return updatedChildren;
};

export const removeChildFromChildren = (
  children: any[],
  splitItemPath: string[]
): any[] => {
  if (splitItemPath.length === 1) {
    const itemIndex = Number(splitItemPath[0]);
    return remove(children, itemIndex);
  }

  const updatedChildren = [...children];
  const curIndex = Number(splitItemPath.slice(0, 1));

  const splitItemChildrenPath = splitItemPath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: removeChildFromChildren(
      nodeChildren.children,
      splitItemChildrenPath
    )
  };

  return updatedChildren;
};

export const addChildToChildren = (
  children: any[],
  splitDropZonePath: string[],
  item: any
): any[] => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    return insert(children, dropZoneIndex, item);
  }

  const updatedChildren = [...children];

  const curIndex = Number(splitDropZonePath.slice(0, 1));

  const splitItemChildrenPath = splitDropZonePath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: addChildToChildren(
      nodeChildren.children,
      splitItemChildrenPath,
      item
    )
  };

  return updatedChildren;
};

export const handleMoveWithinParent = (
  layout: any[],
  splitDropZonePath: string[],
  splitItemPath: string[]
): any[] => {
  return reorderChildren(layout, splitDropZonePath, splitItemPath);
};

export const handleAddColumDataToRow = (layout: any[]): any[] => {
  const layoutCopy = [...layout];
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    children: []
  };

  return layoutCopy.map(row => {
    if (!row.children.length) {
      row.children = [COLUMN_STRUCTURE];
    }
    return row;
  });
};

export const handleMoveToDifferentParent = (
  layout: any[],
  splitDropZonePath: string[],
  splitItemPath: string[],
  item: any
): any[] => {
  let newLayoutStructure;
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    children: [item]
  };

  const ROW_STRUCTURE = {
    type: ROW,
    id: shortid.generate()
  };

  switch (splitDropZonePath.length) {
    case 1: {
      if (item.type === COLUMN) {
        newLayoutStructure = {
          ...ROW_STRUCTURE,
          children: [item]
        };
      } else {
        newLayoutStructure = {
          ...ROW_STRUCTURE,
          children: [COLUMN_STRUCTURE]
        };
      }
      break;
    }
    case 2: {
      if (item.type === COMPONENT) {
        newLayoutStructure = COLUMN_STRUCTURE;
      } else {
        newLayoutStructure = item;
      }

      break;
    }
    default: {
      newLayoutStructure = item;
    }
  }

  let updatedLayout = layout;
  updatedLayout = removeChildFromChildren(updatedLayout, splitItemPath);
  updatedLayout = handleAddColumDataToRow(updatedLayout);
  updatedLayout = addChildToChildren(
    updatedLayout,
    splitDropZonePath,
    newLayoutStructure
  );

  return updatedLayout;
};

export const handleMoveSidebarComponentIntoParent = (
  layout: any[],
  splitDropZonePath: string[],
  item: any
): any[] => {
  let newLayoutStructure;
  switch (splitDropZonePath.length) {
    case 1: {
      newLayoutStructure = {
        type: ROW,
        id: shortid.generate(),
        children: [{ type: COLUMN, id: shortid.generate(), children: [item] }]
      };
      break;
    }
    case 2: {
      newLayoutStructure = {
        type: COLUMN,
        id: shortid.generate(),
        children: [item]
      };
      break;
    }
    default: {
      newLayoutStructure = item;
    }
  }

  return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
};

export const handleRemoveItemFromLayout = (
  layout: any[],
  splitItemPath: string[]
): any[] => {
  return removeChildFromChildren(layout, splitItemPath);
};