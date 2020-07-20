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

const filterByItemName = (name: string) => (item: any) => {
  return item.nombre.toLowerCase().trim().includes(name.toLowerCase().trim());
};

function checkIfAItemIsEquipped(equipment: any) {
  let check = false;
  for (const itemsEquippedKey in equipment) {
    if (equipment.hasOwnProperty(itemsEquippedKey)) {
      // @ts-ignore
      const itemEquipped = equipment[itemsEquippedKey];
      if (itemEquipped.nombre !== '') {
        check = true;
      }
    }
  }
  return check;
}

function removeItemEquippedFromList(
  itemsEquipped: itemsEquipedProps,
  arrayProvisional: (armorType | weaponType)[],
) {
  for (const itemsEquippedKey in itemsEquipped) {
    if (itemsEquipped.hasOwnProperty(itemsEquippedKey)) {
      // @ts-ignore
      const itemEquipped = itemsEquipped[itemsEquippedKey];
      if (itemEquipped.nombre !== '') {
        const pos = arrayProvisional
          .map((x: any) => x.nombre)
          .indexOf(itemEquipped.nombre);
        arrayProvisional.splice(pos, 1);
      }
    }
  }
  return arrayProvisional;
}

export const Craftsmanship: React.FC<{}> = () => {
  const itemsMock = [
    {
      id: 20001,
      nombre: 'Cuchillo cazador',
      tipo: 'arma',
      rama: '',
      ramaEvo: 0,
      ruta: 'weapon/sas/cuchilloCazador',
      rareza: 0,
      evolucion: '',
      precio: 0,
      ataque: 0,
      danio_elemento01: 0,
      elemento_01: 'Fuego',
      elemento01: '',
      danio_elemento02: 0,
      elemento_02: '',
      elemento02: '',
      afilado: '',
      afinidad: 10,
      defensa: 3,
      sello_ancianos: '',
      ranura01: '',
      ranura02: '',
      ranura03: '',
      tipo_vial: '',
      danio_vial: 0,
      elemento_vial: '',
      numero_disparos: 0,
      tipo_disparo: '',
      nota01: '',
      nota02: '',
      nota03: '',
      modificaciones: 0,
      desvio: '',
      tiro_especial: '',
      bonus_kinsecto: '',
      vial01: '',
      vial02: '',
      vial03: '',
      vial04: '',
      vial05: '',
    },
    {
      id: 20002,
      nombre: 'Kys Hazak',
      tipo: 'arma',
      rama: '',
      ramaEvo: 0,
      ruta: 'weapon/gs/kysHazak',
      rareza: 0,
      evolucion: '',
      precio: 0,
      ataque: 0,
      danio_elemento01: 0,
      elemento_01: 'Agua',
      elemento01: '',
      danio_elemento02: 0,
      elemento_02: '',
      elemento02: '',
      afilado: '',
      afinidad: 10,
      defensa: 10,
      sello_ancianos: '',
      ranura01: '',
      ranura02: '',
      ranura03: '',
      tipo_vial: '',
      danio_vial: 0,
      elemento_vial: '',
      numero_disparos: 0,
      tipo_disparo: '',
      nota01: '',
      nota02: '',
      nota03: '',
      modificaciones: 0,
      desvio: '',
      tiro_especial: '',
      bonus_kinsecto: '',
      vial01: '',
      vial02: '',
      vial03: '',
      vial04: '',
      vial05: '',
    },
    {
      id: 20003,
      nombre: 'Filo Wyvern "Hoja"',
      tipo: 'arma',
      rama: '',
      ramaEvo: 0,
      ruta: 'weapon/ls/filoWyvernHoja',
      rareza: 0,
      evolucion: '',
      precio: 0,
      ataque: 0,
      danio_elemento01: 0,
      elemento_01: '',
      elemento01: '',
      danio_elemento02: 0,
      elemento_02: '',
      elemento02: '',
      afilado: '',
      afinidad: 10,
      defensa: 10,
      sello_ancianos: '',
      ranura01: '',
      ranura02: '',
      ranura03: '',
      tipo_vial: '',
      danio_vial: 0,
      elemento_vial: '',
      numero_disparos: 0,
      tipo_disparo: '',
      nota01: '',
      nota02: '',
      nota03: '',
      modificaciones: 0,
      desvio: '',
      tiro_especial: '',
      bonus_kinsecto: '',
      vial01: '',
      vial02: '',
      vial03: '',
      vial04: '',
      vial05: '',
    },
    {
      id: 1,
      nombre: 'Yelmo de Anja',
      tipo: 'casco',
      ruta: 'armor/yelmoAnja',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 10,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 5,
      agua: 2,
      rayo: 3,
      hielo: 5,
      draco: 1,
      precio: 100,
      habilidad1: 'hola',
      habilidad2: 'hola',
    },
    {
      id: 2,
      nombre: 'Yelmo de Rathian',
      ruta: 'armor/yelmoRathian',
      tipo: 'casco',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 2,
      agua: 4,
      rayo: 2,
      hielo: 2,
      draco: 2,
      precio: 100,
      habilidad1: 'hola',
      habilidad2: 'hola',
    },
    {
      id: 3,
      nombre: 'Cota de Anja',
      ruta: 'armor/cotaAnja',
      tipo: 'pechera',
      rama: 'Aleación',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 2,
      agua: 2,
      rayo: 4,
      hielo: 5,
      draco: 5,
      precio: 100,
      habilidad1: 'hola',
      habilidad2: 'hola',
    },
    {
      id: 4,
      nombre: 'Brazales de Anja',
      ruta: 'armor/brazalesAnja',
      tipo: 'guanteletes',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 5,
      agua: 5,
      rayo: 5,
      hielo: 5,
      draco: 5,
      precio: 100,
      habilidad1: 'hola',
      habilidad2: 'hola',
    },
    {
      id: 5,
      nombre: 'Faja de Anja',
      ruta: 'armor/fajaAnja',
      tipo: 'cintura',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 1,
      agua: 10,
      rayo: 1,
      hielo: 1,
      draco: 5,
      precio: 100,
      habilidad1: 'hola',
      habilidad2: 'hola',
    },
    {
      id: 6,
      nombre: 'Grebas de Anja',
      ruta: 'armor/grebasAnja',
      tipo: 'grebas',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 5,
      agua: 5,
      rayo: 5,
      hielo: 5,
      draco: 5,
      precio: 100,
      habilidad1: 'hola',
      habilidad2: 'hola',
    },
  ];
  const itemsEquippedDefault = {
    arma: {
      id: 20000,
      nombre: '',
      tipo: 'arma',
      rama: '',
      ramaEvo: 0,
      ruta: '',
      rareza: 0,
      evolucion: '',
      precio: 0,
      ataque: 0,
      danio_elemento01: 0,
      elemento_01: '',
      elemento01: '',
      danio_elemento02: 0,
      elemento_02: '',
      elemento02: '',
      afilado: '',
      afinidad: 0,
      defensa: 0,
      sello_ancianos: '',
      ranura01: '',
      ranura02: '',
      ranura03: '',
      tipo_vial: '',
      danio_vial: 0,
      elemento_vial: '',
      numero_disparos: 0,
      tipo_disparo: '',
      nota01: '',
      nota02: '',
      nota03: '',
      modificaciones: 0,
      desvio: '',
      tiro_especial: '',
      bonus_kinsecto: '',
      vial01: '',
      vial02: '',
      vial03: '',
      vial04: '',
      vial05: '',
    },
    casco: {
      id: 10000,
      nombre: '',
      ruta: '',
      tipo: '',
      rama: '',
      rango: '',
      nivel: 0,
      rareza: 0,
      defensa: 0,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 0,
      habilidad1: '',
      habilidad2: '',
    },
    pechera: {
      id: 10001,
      nombre: '',
      ruta: '',
      tipo: '',
      rama: '',
      rango: '',
      nivel: 0,
      rareza: 0,
      defensa: 0,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 0,
      habilidad1: '',
      habilidad2: '',
    },
    guanteletes: {
      id: 10002,
      nombre: '',
      ruta: '',
      tipo: '',
      rama: '',
      rango: '',
      nivel: 0,
      rareza: 0,
      defensa: 0,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 0,
      habilidad1: '',
      habilidad2: '',
    },
    cintura: {
      id: 10003,
      nombre: '',
      ruta: '',
      tipo: '',
      rama: '',
      rango: '',
      nivel: 0,
      rareza: 0,
      defensa: 0,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 0,
      habilidad1: '',
      habilidad2: '',
    },
    grebas: {
      id: 10004,
      nombre: '',
      ruta: '',
      tipo: '',
      rama: '',
      rango: '',
      nivel: 0,
      rareza: 0,
      defensa: 0,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 0,
      habilidad1: '',
      habilidad2: '',
    },
  };
  const equipmentStatsDefault = {
    ataque: 0,
    defensa: 0,
    fuego: 0,
    agua: 0,
    rayo: 0,
    hielo: 0,
    draco: 0,
  };

  const [items, setItems] = useState<(armorType | weaponType)[]>(itemsMock);
  const [itemName, setItemName] = useState<string>('');
  const [itemsFiltered, setItemsFiltered] = useState<(armorType | weaponType)[]>([]);
  const [itemsEquippedStats, setItemsEquippedStats] = useState<itemsEquippedStatsProps>(
    equipmentStatsDefault,
  );
  const [itemsEquipped, setItemsEquipped] = useState<itemsEquipedProps>(
    itemsEquippedDefault,
  );

  useEffect(() => {
    calculateEquipmentStats();
  }, [itemsEquipped]);

  useEffect(() => {
    checkFilters();
  }, [itemName]);

  function checkFilters() {
    const byName = filterByItemName(itemName);
    let arrayProvisional = items;
    if (checkIfAItemIsEquipped(itemsEquipped)) {
      if (itemName.length >= 0) {
        arrayProvisional = removeItemEquippedFromList(
          itemsEquipped,
          items.filter(byName),
        );
      } else {
        arrayProvisional = removeItemEquippedFromList(itemsEquipped, arrayProvisional);
      }
    } else {
      if (itemName.length >= 0) {
        arrayProvisional = items.filter(byName);
      } else {
        return items;
      }
    }
    setItemsFiltered(arrayProvisional);
  }
  function calculateEquipmentStats() {
    let defenseSum = 0;
    let fireSum = 0;
    let waterSum = 0;
    let thunderSum = 0;
    let iceSum = 0;
    let dracoSum = 0;
    let attackSum = 0;
    for (const key in itemsEquipped) {
      if (itemsEquipped.hasOwnProperty(key)) {
        // FIXME: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'itemsEquipedProps'.

        // @ts-ignore
        const itemEquipped = itemsEquipped[key];
        if (itemEquipped.nombre !== '') {
          if (itemEquipped.tipo !== 'arma') {
            defenseSum += itemEquipped.defensa;
            fireSum += itemEquipped.fuego;
            waterSum += itemEquipped.agua;
            thunderSum += itemEquipped.rayo;
            iceSum += itemEquipped.hielo;
            dracoSum += itemEquipped.draco;
          } else {
            defenseSum += itemEquipped.defensa;
            attackSum += itemEquipped.ataque;
          }
        }
      }
    }
    setItemsEquippedStats({
      ataque: attackSum,
      agua: waterSum,
      draco: dracoSum,
      fuego: fireSum,
      hielo: iceSum,
      rayo: thunderSum,
      defensa: defenseSum,
    });
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
      const deleteItemCount = 1;
      // @ts-ignore
      const oldItemEquipped = itemsEquipped[droppableSectionName];
      switch (droppableSectionName) {
        case 'arma':
          setItemsEquipped({ ...itemsEquipped, arma: draggableItem });
          break;
        case 'casco':
          setItemsEquipped({ ...itemsEquipped, casco: draggableItem });
          break;
        case 'pechera':
          setItemsEquipped({ ...itemsEquipped, pechera: draggableItem });
          break;
        case 'guanteletes':
          setItemsEquipped({ ...itemsEquipped, guanteletes: draggableItem });
          break;
        case 'cintura':
          setItemsEquipped({ ...itemsEquipped, cintura: draggableItem });
          break;
        case 'grebas':
          setItemsEquipped({ ...itemsEquipped, grebas: draggableItem });
          break;
      }
      itemsFiltered.splice(indexItemFromSource, deleteItemCount, oldItemEquipped);
    } else {
      // TODO: Show modal with error message
      console.log(`debe de ser un ${droppableSectionName}`);
    }
  };

  return (
    <div className="Craftsmanship">
      <div className="itemFilters">
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setItemName(e.target.value)
          }
        />
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
