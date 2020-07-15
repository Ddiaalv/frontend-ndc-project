import * as React from 'react';
import './DroppableItemFrame.scss';
import { Droppable } from 'react-beautiful-dnd';
import { Item } from '../Item';

type DroppableItemFrameProps = {
  itemEquiped: any;
  itemType: string;
};

export const DroppableItemFrame: React.FC<DroppableItemFrameProps> = ({
  itemEquiped,
  itemType,
}) => (
  <Droppable droppableId={itemType}>
    {(provided) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={{
          background: 'red',
          display: 'flex',
          height: '150px',
          width: '150px',
          alignItems: 'center',
        }}
      >
        {itemEquiped !== undefined ? (
          <Item
            draggableId={itemEquiped.id}
            key={itemEquiped.id}
            index={1}
            text={itemEquiped.nombre}
          />
        ) : (
          ''
        )}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

DroppableItemFrame.displayName = 'DroppableItemFrame';
