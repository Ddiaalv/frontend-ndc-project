import * as React from 'react';
import './Item.scss';
import { Draggable } from 'react-beautiful-dnd';

type ItemProps = {
  text: string;
  key: any;
  draggableId: string;
  index: number;
};

export const Item: React.FC<ItemProps> = ({ text, key, draggableId, index }) => {
  return (
    <Draggable key={key} draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          className="item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </div>
      )}
    </Draggable>
  );
};

Item.displayName = 'Item';
