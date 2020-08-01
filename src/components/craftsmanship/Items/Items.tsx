import * as React from 'react';
import './Items.scss';
import { Droppable } from 'react-beautiful-dnd';
import { Item } from '../Item';

type ItemsProps = {
  items: any;
};

export const Items: React.FC<ItemsProps> = ({ items }) => (
  <Droppable droppableId="items">
    {(provided) => (
      <div className="Items" {...provided.droppableProps} ref={provided.innerRef}>
        {items.map((item: any, index: number) => (
          <Item
            draggableId={item.id.toString()}
            key={item.id}
            index={index}
            text={item.nombre}
            imgRoute={item.ruta}
            itemInformation={item}
          />
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

Items.displayName = 'Items';
