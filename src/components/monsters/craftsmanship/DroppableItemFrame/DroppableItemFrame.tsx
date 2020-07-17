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
      <div className="DroppableItemFrame"
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {itemEquiped !== undefined ? (
          <Item
            draggableId={itemEquiped.id.toString()}
            key={itemEquiped.id}
            index={1}
            text={itemEquiped.nombre}
            imgRoute={itemEquiped.ruta}
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
