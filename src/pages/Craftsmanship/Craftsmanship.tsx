import * as React from 'react';
import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Items } from '../../components/monsters/craftsmanship/Items';
import { DroppableItemFrame } from '../../components/monsters/craftsmanship/DroppableItemFrame';
import { Pagination } from '../../components/monsters/craftsmanship/Pagination';
import './Craftsmanship.scss';
import {
  armorType,
  itemsEquipedProps,
  itemsEquippedStatsProps,
  weaponType,
} from './types';
import {
  calculateEquipmentStats,
  equipmentStatsDefault,
  filterByItemName,
  filterByItemTypes,
  getItemIndex,
  itemsEquippedDefault,
  removeItem,
} from './utils';

export const Craftsmanship: React.FC<{}> = () => {
  const [items, setItems] = useState<(armorType | weaponType)[]>([]);
  const [itemsFiltered, setItemsFiltered] = useState<(armorType | weaponType)[]>([]);
  const [namePressed, setNamePresed] = useState<string>('');
  const [typesPressed, setTypesPressed] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState();
  const [itemsEquippedStats, setItemsEquippedStats] = useState<itemsEquippedStatsProps>(
    equipmentStatsDefault,
  );
  const [itemsEquipped, setItemsEquipped] = useState<itemsEquipedProps>(
    itemsEquippedDefault,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems = itemsFiltered.slice(indexOfFirstPost, indexOfLastPost);

  const [armorsType] = useState<string[]>([]);
  const [weaponsType] = useState<string[]>([]);

  useEffect(() => {
    const URLWEAPONS = 'http://localhost:3010/weapons';
    const URLARMORS = 'http://localhost:3010/armors';

    Promise.all([
      fetch(URLWEAPONS).then((weapon) => weapon.json()),
      fetch(URLARMORS).then((armor) => armor.json()),
    ])
      .then((weaponsAndArmors) => {
        const allItems = weaponsAndArmors[0].concat(weaponsAndArmors[1]);
        setItems(allItems);
        setItemsFiltered(allItems);
        allItems.map((item: any) => {
          if (!armorsType.includes(item.tipo) && item.tipo !== 'arma') {
            armorsType.push(item.tipo);
          }
          if (!weaponsType.includes(item.tipo_arma)) {
            weaponsType.push(item.tipo_arma);
          }
        });
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    setItemsEquippedStats(calculateEquipmentStats(itemsEquipped));
  }, [itemsEquipped]);

  useEffect(() => {
    checkFilters();
  }, [namePressed, typesPressed]);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  function checkFilters() {
    let arrayProvisional = items;
    const byTypes = filterByItemTypes(typesPressed);
    const byName = filterByItemName(namePressed);
    if (namePressed.length > 0) {
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
    setItemsFiltered(arrayProvisional);
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const droppableSectionName = result.destination.droppableId;
    const draggingItemType = itemsFiltered[result.source.index].tipo.toLowerCase();
    if (droppableSectionName === draggingItemType) {
      const indexItemFromSource = getItemIndex(itemsFiltered, result.draggableId);
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
        case 'guantes':
          setItemsEquipped({
            ...itemsEquipped,
            guantes: draggableItem,
          });
          break;
        case 'pantalon':
          setItemsEquipped({
            ...itemsEquipped,
            pantalon: draggableItem,
          });
          break;
        case 'botas':
          setItemsEquipped({
            ...itemsEquipped,
            botas: draggableItem,
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
            setNamePresed(e.target.value)
          }
        />
        <div className="itemTypes">
          {armorsType.concat(weaponsType).map((itemType, index) => (
            <label htmlFor={`name${itemType}`} key={index}>
              <input
                type="checkbox"
                onChange={getTypeValue}
                value={itemType}
                id={`name${itemType}`}
              />
              {itemType}
            </label>
          ))}
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* NOTE: pass the isLoaded state like params to Items for render the content?*/}
        {isLoaded ? (
          itemsFiltered.length > 0 ? (
            <Items items={currentItems} />
          ) : itemsFiltered.length === 0 ? (
            'No se encuentra '
          ) : (
            <Items items={items} />
          )
        ) : (
          'Cargando datos...'
        )}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={itemsFiltered.length}
          paginate={paginate}
        />
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
                itemEquiped={itemsEquipped.pantalon}
                itemType={'pantalon'}
              />
              <DroppableItemFrame itemEquiped={itemsEquipped.botas} itemType={'botas'} />
            </div>
            <div className="ArmorSectionRight">
              <DroppableItemFrame
                itemEquiped={itemsEquipped.guantes}
                itemType={'guantes'}
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
