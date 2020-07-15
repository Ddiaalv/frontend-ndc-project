import * as React from 'react';
import {useState} from 'react';
import './Craftsmanship.scss';
import {DragDropContext} from 'react-beautiful-dnd';
import {Items} from '../../components/monsters/craftsmanship/Items';
import {DroppableItemFrame} from '../../components/monsters/craftsmanship/DroppableItemFrame';

type itemsProps = {
  id: string;
  nombre: string;
  tipo: string;
};

export const Craftsmanship: React.FC<{}> = () => {
  const items: itemsProps[] = [
    {id: '5', nombre: 'Casco curvo', tipo: 'Casco'},
    {id: '2', nombre: 'Casco de cuero', tipo: 'Casco'},
    {id: '3', nombre: 'Pechera pesado', tipo: 'Pechera'},
    {id: '4', nombre: 'Casco papel', tipo: 'Casco'},
  ];
  const [helmetEquiped, setHelmetEquiped] = useState<itemsProps>();
  // const [chestEquiped, setChestEquiped] = useState<itemsProps>();

  const onDragEnd = (result: any) => {
    const droppableSectionName = result.destination.droppableId;
    const draggingItemType = items[result.source.index].tipo.toLowerCase();
    if (droppableSectionName === 'casco' && draggingItemType === 'casco') {
      const indexItemFromSource = result.source.index;
      const draggableItem = items[indexItemFromSource];
      const deleteItemCount = 1;
      if (helmetEquiped !== undefined) {
        const oldHelmet = helmetEquiped;
        setHelmetEquiped(draggableItem);
        items.splice(indexItemFromSource, deleteItemCount, oldHelmet);
      } else {
        setHelmetEquiped(draggableItem);
        items.splice(indexItemFromSource, deleteItemCount);
      }
    } else {
      console.log('debe de ser un casco');
    }

    if (!result.destination) {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Items items={items} />
      <DroppableItemFrame itemEquiped={helmetEquiped} itemType={'casco'} />
      {/*<DroppableItemFrame itemEquiped={chestEquiped} itemType={'pechera'} /> */}
    </DragDropContext>
  );
};

Craftsmanship.displayName = 'Craftsmanship';
