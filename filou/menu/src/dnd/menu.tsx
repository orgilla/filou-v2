import * as React from 'react';
import { DragDropContext, DropResult, HookProvided } from 'react-beautiful-dnd';
import Menu from '../menu';
import Item from './item';
import List from './list';

export interface IMenuDnD {
  children?: React.ReactNode;
  onDragEnd: (result: DropResult, provided: HookProvided) => void;
}

const MenuDnD = ({ children, onDragEnd }: IMenuDnD) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Menu>{children}</Menu>
  </DragDropContext>
);

MenuDnD.Item = Item;
MenuDnD.List = List;

export default MenuDnD;
