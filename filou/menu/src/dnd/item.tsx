import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Item from '../item';
import { Portal } from 'react-portal';

export interface IMenuDnDItem {
  children?: React.ReactNode;
  id: string;
  index: number;
}

const MenuDnDItem = ({ children, id, index = 0, ...rest }: IMenuDnDItem) => (
  <Draggable draggableId={id} index={index}>
    {(provided, snapshot) => {
      const node = (
        <Item
          _ref={provided.innerRef}
          {...rest}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </Item>
      );

      if (!snapshot.isDragging) {
        return node;
      }
      return <Portal>{node}</Portal>;
    }}
  </Draggable>
);

export default MenuDnDItem;
