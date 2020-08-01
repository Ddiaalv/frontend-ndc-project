import * as React from 'react';
import './Item.scss';
import { Draggable } from 'react-beautiful-dnd';
import { ItemInformation } from '../ItemInformation';

interface ItemProps {
  text: string;
  imgRoute: string;
  key: any;
  draggableId: string;
  index: number;
  itemInformation?: any;
}

export const Item: React.FC<ItemProps> = ({
  text,
  key,
  draggableId,
  index,
  imgRoute,
  itemInformation,
}) => {
  return (
    <Draggable key={key} draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          className="Item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img src={`http://localhost:3010/img/items/${imgRoute}.png`} alt="" />
          <span>{text}</span>
          {itemInformation !== undefined ? (
            <ItemInformation itemInfo={itemInformation} />
          ) : (
            ''
          )}
        </div>
      )}
    </Draggable>
  );
};

Item.displayName = 'Item';
