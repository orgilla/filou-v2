import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import List from '../list';

interface IMenuDnDList {
  group?: string;
}

class MenuDnDList extends React.Component<IMenuDnDList> {
  render() {
    const { children, group = 'dnd', ...rest } = this.props;
    return (
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
  }
}

export default MenuDnDList;
