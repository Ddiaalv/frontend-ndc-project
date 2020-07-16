import * as React from 'react';
import { useState } from 'react';
import './Craftsmanship.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { Items } from '../../components/monsters/craftsmanship/Items';
import { DroppableItemFrame } from '../../components/monsters/craftsmanship/DroppableItemFrame';

type itemsProps = {
  id: number;
  nombre: string;
  tipo: string;
};

type itemsEquipedProps = {
  casco: itemsProps;
  pechera: itemsProps;
};

export const Craftsmanship: React.FC<{}> = () => {
  const itemsMock = [
    { id: 1, nombre: 'Casco curvo', tipo: 'Casco' },
    { id: 2, nombre: 'Casco de cuero', tipo: 'Casco' },
    { id: 3, nombre: 'Pechera pesado', tipo: 'Pechera' },
    { id: 4, nombre: 'Casco papel', tipo: 'Casco' },
    { id: 5, nombre: 'Pechera de papel', tipo: 'Pechera' },
  ];

  const itemsEquipedDefault = {
    casco: { id: 5000, nombre: '', tipo: 'Casco' },
    pechera: { id: 5001, nombre: '', tipo: 'Pechera' },
  };

  const [items, setItems] = useState<itemsProps[]>(itemsMock);
  const [itemsEquipped, setItemsEquipped] = useState<itemsEquipedProps>(
    itemsEquipedDefault,
  );

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const droppableSectionName = result.destination.droppableId;
    const draggingItemType = items[result.source.index].tipo.toLowerCase();

    if (droppableSectionName === draggingItemType) {
      const indexItemFromSource = result.source.index;
      const draggableItem = items[indexItemFromSource];
      const deleteItemCount = 1;
      // @ts-ignore
      const oldItemEquipped = itemsEquipped[droppableSectionName];
      switch (droppableSectionName) {
        case 'casco':
          setItemsEquipped({ ...itemsEquipped, casco: draggableItem });
          break;
        case 'pechera':
          setItemsEquipped({ ...itemsEquipped, pechera: draggableItem });
          break;
      }
      items.splice(indexItemFromSource, deleteItemCount, oldItemEquipped);
    } else {
      console.log('debe de ser un casco');
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Items items={items} />
      <DroppableItemFrame itemEquiped={itemsEquipped.casco} itemType={'casco'} />
      <DroppableItemFrame itemEquiped={itemsEquipped.pechera} itemType={'pechera'} />
    </DragDropContext>
  );
};

Craftsmanship.displayName = 'Craftsmanship';
