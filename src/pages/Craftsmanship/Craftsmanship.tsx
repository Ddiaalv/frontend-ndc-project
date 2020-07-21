import * as React from 'react';
import { useEffect, useState } from 'react';
import './Craftsmanship.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { Items } from '../../components/monsters/craftsmanship/Items';
import { DroppableItemFrame } from '../../components/monsters/craftsmanship/DroppableItemFrame';
import {
  armorType,
  itemsEquipedProps,
  itemsEquippedStatsProps,
  weaponType,
} from './types';
import {
  calculateEquipmentStats,
  checkIfAItemIsEquipped,
  equipmentStatsDefault,
  filterByItemName,
  filterByItemTypes,
  itemsEquippedDefault,
  itemsMock,
  removeItem,
} from './utils';

export const Craftsmanship: React.FC<{}> = () => {
  const [items, setItems] = useState<(armorType | weaponType)[]>(itemsMock);
  const [itemName, setItemName] = useState<string>('');
  const [typesPressed, setTypesPressed] = useState<string[]>([]);
  const [itemsFiltered, setItemsFiltered] = useState<(armorType | weaponType)[]>([]);
  const [itemsEquippedStats, setItemsEquippedStats] = useState<itemsEquippedStatsProps>(
    equipmentStatsDefault,
  );
  const [itemsEquipped, setItemsEquipped] = useState<itemsEquipedProps>(
    itemsEquippedDefault,
  );

  useEffect(() => {
    setItemsEquippedStats(calculateEquipmentStats(itemsEquipped));
  }, [itemsEquipped]);

  useEffect(() => {
    checkFilters();
  }, [itemName, typesPressed]);

  function checkFilters() {
    let arrayProvisional = items;
    const byName = filterByItemName(itemName);
    const byTypes = filterByItemTypes(typesPressed);

    if (checkIfAItemIsEquipped(itemsEquipped)) {
      if (itemName.length > 0) {
        if (typesPressed.length > 0) {
          arrayProvisional = items.filter(byName).filter(byTypes);
        } else {
          arrayProvisional = items.filter(byName);
        }
      } else {
        if (typesPressed.length > 0) {
          arrayProvisional = items.filter(byTypes);
        }
      }
    } else {
      if (itemName.length > 0) {
        if (typesPressed.length > 0) {
          arrayProvisional = items.filter(byName).filter(byTypes);
        } else {
          arrayProvisional = items.filter(byName);
        }
      } else {
        if (typesPressed.length > 0) {
          arrayProvisional = items.filter(byTypes);
        }
      }
    }
    setItemsFiltered(arrayProvisional);
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const droppableSectionName = result.destination.droppableId;
    const draggingItemType = itemsFiltered[result.source.index].tipo.toLowerCase();
    if (droppableSectionName === draggingItemType) {
      const indexItemFromSource = result.source.index;
      const draggableItem = itemsFiltered[indexItemFromSource];
      // @ts-ignore
      const oldItemEquipped = itemsEquipped[droppableSectionName];
      switch (droppableSectionName) {
        case 'arma':
          setItemsEquipped({
            ...itemsEquipped,
            arma: draggableItem,
          });
          break;
        case 'casco':
          setItemsEquipped({
            ...itemsEquipped,
            casco: draggableItem,
          });
          break;
        case 'pechera':
          setItemsEquipped({
            ...itemsEquipped,
            pechera: draggableItem,
          });
          break;
        case 'guanteletes':
          setItemsEquipped({
            ...itemsEquipped,
            guanteletes: draggableItem,
          });
          break;
        case 'cintura':
          setItemsEquipped({
            ...itemsEquipped,
            cintura: draggableItem,
          });
          break;
        case 'grebas':
          setItemsEquipped({
            ...itemsEquipped,
            grebas: draggableItem,
          });
          break;
      }
      const itemsFilteredCopy = removeItem(itemsFiltered, draggableItem);
      const itemsCopy = removeItem(items, draggableItem);
      if (oldItemEquipped.nombre !== '') {
        itemsFilteredCopy.push(oldItemEquipped);
        itemsCopy.push(oldItemEquipped);
      }
      setItemsFiltered(itemsFilteredCopy);
      setItems(itemsCopy);
    } else {
      // TODO: Show modal with error message and change border color of droppable frame
      console.log(`debe de ser un ${droppableSectionName}`);
    }
  };

  function getTypeValue(event: React.ChangeEvent<HTMLInputElement>) {
    const itemType = event.target.value;
    if (!typesPressed.includes(itemType)) {
      setTypesPressed(typesPressed.concat(itemType));
    } else {
      setTypesPressed(typesPressed.filter((type) => type !== itemType));
    }
  }

  return (
    <div className="Craftsmanship">
      <div className="itemFilters">
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setItemName(e.target.value)
          }
        />
        <div className="itemTypes">
          <label htmlFor="">
            Pechera
            <input type="checkbox" onChange={getTypeValue} value={'Pechera'} />
          </label>
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        {itemsFiltered.length > 0 ? (
          <Items items={itemsFiltered} />
        ) : itemsFiltered.length === 0 ? (
          'No se encuentra '
        ) : (
          <Items items={items} />
        )}
        <div id="Forge">
          <div className="ArmorSet" style={{ display: 'flex' }}>
            <div className="weaponSection">
              <DroppableItemFrame itemEquiped={itemsEquipped.arma} itemType={'arma'} />
            </div>
            <div className="ArmorSectionCenter">
              <DroppableItemFrame itemEquiped={itemsEquipped.casco} itemType={'casco'} />
              <DroppableItemFrame
                itemEquiped={itemsEquipped.pechera}
                itemType={'pechera'}
              />
              <DroppableItemFrame
                itemEquiped={itemsEquipped.cintura}
                itemType={'cintura'}
              />
              <DroppableItemFrame
                itemEquiped={itemsEquipped.grebas}
                itemType={'grebas'}
              />
            </div>
            <div className="ArmorSectionRight">
              <DroppableItemFrame
                itemEquiped={itemsEquipped.guanteletes}
                itemType={'guanteletes'}
              />
            </div>
          </div>
          <div className="EquipmentStats">
            <p>Defensa: {itemsEquippedStats.defensa}</p>
            <p>Fuego: {itemsEquippedStats.fuego}</p>
            <p>Agua: {itemsEquippedStats.agua}</p>
            <p>Rayo: {itemsEquippedStats.rayo}</p>
            <p>Hielo: {itemsEquippedStats.hielo}</p>
            <p>Draco: {itemsEquippedStats.draco}</p>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

Craftsmanship.displayName = 'Craftsmanship';
