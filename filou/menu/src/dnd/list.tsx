import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import List from '../list';

export interface IMenuDnDList {
  children?: React.ReactNode;
  group?: string;
}

const MenuDnDList = ({ children, group = 'dnd', ...rest }: IMenuDnDList) => (
  <Droppable ref="" droppableId={group}>
    {(provided, snapshot) => (
      <List
        _ref={provided.innerRef}
        // style={getListStyle(snapshot.isDraggingOver)}
        {...rest}
        {...provided.droppableProps}
      >
        {children}
        {provided.placeholder}
      </List>
    )}
  </Droppable>
);

export default MenuDnDList;
