import * as React from 'react';
import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Items } from '../../components/craftsmanship/Items';
import { DroppableItemFrame } from '../../components/craftsmanship/DroppableItemFrame';
import { Pagination } from '../../components/craftsmanship/Pagination';
import './Craftsmanship.scss';
import {
  ArmorType,
  itemsEquipedProps,
  ItemsEquippedStatsProps,
  WeaponType,
} from './types';
import {
  calculateEquipmentStats,
  fetchItems,
  getAllItems,
  getItemIndex,
  manageItemsOnLists,
} from '../../domain/service/craftsmanship/craftsmanshipService';
import { EquipmentStats } from '../../components/craftsmanship/EquipmentStats';
import { ItemFilters } from '../../components/craftsmanship/ItemFilters';
import { equipmentStatsDefault, itemsEquippedDefault } from './itemsDefault';
import { filterItems } from '../../domain/service/craftsmanship/filterItemsService';

export const Craftsmanship: React.FC<{}> = () => {
  const [items, setItems] = useState<(ArmorType | WeaponType)[]>([]);
  const [itemsFiltered, setItemsFiltered] = useState<(ArmorType | WeaponType)[]>([]);
  const [namePressed, setNamePressed] = useState<string>('');
  const [typesPressed, setTypesPressed] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState();
  const [itemsEquippedStats, setItemsEquippedStats] = useState<ItemsEquippedStatsProps>(
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
  const [itemsType, setItemsType] = useState<string[]>([]);

  useEffect(() => {
    const URLWEAPONS = 'http://localhost:3010/weapons';
    const URLARMORS = 'http://localhost:3010/armors';
    getAllItems(fetchItems(URLWEAPONS), fetchItems(URLARMORS)).then((results) => {
      setItems(results.items);
      setItemsFiltered(results.items);
      setIsLoaded(results.isLoaded);
      setError(results.error);
      setItemsType(results.typeItems);
    });
  }, []);

  useEffect(() => {
    setItemsEquippedStats(calculateEquipmentStats(itemsEquipped));
  }, [itemsEquipped]);

  useEffect(() => {
    setCurrentPage(1);
    setItemsFiltered(filterItems(items, typesPressed, namePressed));
  }, [namePressed, typesPressed]);

  const paginate = (pageNumber: number) => {
    const totalPages = Math.ceil(itemsFiltered.length / postsPerPage);
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    if (totalPages === 0) {
      pageNumber = 0;
    }
    if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }
    setCurrentPage(pageNumber);
  };

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    const droppableSectionName = result.destination.droppableId;
    const indexItemFromSource = getItemIndex(itemsFiltered, result.draggableId);
    const draggingItemType = itemsFiltered[indexItemFromSource].tipo.toLowerCase();
    const typeOfDroppableAndDraggingMatch = droppableSectionName === draggingItemType;
    if (typeOfDroppableAndDraggingMatch) {
      const itemsLists = manageItemsOnLists(result, itemsFiltered, itemsEquipped, items);
      if (itemsLists !== undefined) {
        setItemsFiltered(itemsLists.itemsFilteredCopy);
        setItems(itemsLists.itemsCopy);
        setItemsEquipped(itemsLists.itemsEquippedCopy);
      }
    }
  }

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
      <ItemFilters
        itemTypes={itemsType}
        getItemName={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNamePressed(e.target.value)
        }
        getItemType={getTypeValue}
      />
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
          currentPage={currentPage}
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
          <EquipmentStats itemsEquippedStats={itemsEquippedStats} />
        </div>
      </DragDropContext>
    </div>
  );
};

Craftsmanship.displayName = 'Craftsmanship';
