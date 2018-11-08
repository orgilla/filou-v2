import * as React from 'react';
import { DragDropContext, DropResult, HookProvided } from 'react-beautiful-dnd';
import Menu from '../menu';
import Item from './item';
import List from './list';

interface IMenuDnD {
  children?: React.ReactNode;
  onDragEnd: (result: DropResult, provided: HookProvided) => void;
}

class MenuDnD extends React.Component<IMenuDnD> {
  static Item = Item;
  static List = List;

  render() {
    const { children, onDragEnd } = this.props;
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Menu>{children}</Menu>
      </DragDropContext>
    );
  }
}

export default MenuDnD;
