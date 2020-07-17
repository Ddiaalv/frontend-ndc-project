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

export const Craftsmanship: React.FC<{}> = () => {
  const itemsMock = [
    {
      id: 20001,
      nombre: 'Maza',
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
      nombre: 'Cuchillo',
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
      nombre: 'Lentes de cuero',
      tipo: 'casco',
      ruta: 'armor/lentesCuero',
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
      nombre: 'Yelmo de Jagras',
      ruta: 'armor/yelmoJagras',
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
      nombre: 'Cota de aleación',
      ruta: 'armor/cotaAleacion',
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
      nombre: 'Brazales de cazador',
      ruta: 'armor/brazalesCazador',
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
      nombre: 'Faja de Barroth',
      ruta: 'armor/fajaBarroth',
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
      nombre: 'Grebas de Barroth',
      ruta: 'armor/fajaBarroth',
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
  const itemsEquipedDefault = {
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
  const [itemsEquippedStats, setItemsEquippedStats] = useState<itemsEquippedStatsProps>(
    equipmentStatsDefault,
  );
  const [itemsEquipped, setItemsEquipped] = useState<itemsEquipedProps>(
    itemsEquipedDefault,
  );

  useEffect(() => {
    calculateEquipmentStats();
  }, [itemsEquipped]);

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
        const itemEquiped = itemsEquipped[key];
        if (itemEquiped.nombre !== '') {
          if (itemEquiped.tipo !== 'arma') {
            defenseSum += itemEquiped.defensa;
            fireSum += itemEquiped.fuego;
            waterSum += itemEquiped.agua;
            thunderSum += itemEquiped.rayo;
            iceSum += itemEquiped.hielo;
            dracoSum += itemEquiped.draco;
          } else {
            defenseSum += itemEquiped.defensa;
            attackSum += itemEquiped.ataque;
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
    const draggingItemType = items[result.source.index].tipo.toLowerCase();
    if (droppableSectionName === draggingItemType) {
      const indexItemFromSource = result.source.index;
      const draggableItem = items[indexItemFromSource];
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
      items.splice(indexItemFromSource, deleteItemCount, oldItemEquipped);
    } else {
      // TODO: Show modal with error message
      console.log(`debe de ser un ${droppableSectionName}`);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Items items={items} />
      <div className="armorSet" style={{ display: 'flex' }}>
        <DroppableItemFrame itemEquiped={itemsEquipped.arma} itemType={'arma'} />
        <DroppableItemFrame itemEquiped={itemsEquipped.casco} itemType={'casco'} />
        <DroppableItemFrame itemEquiped={itemsEquipped.pechera} itemType={'pechera'} />
        <DroppableItemFrame
          itemEquiped={itemsEquipped.guanteletes}
          itemType={'guanteletes'}
        />
        <DroppableItemFrame itemEquiped={itemsEquipped.cintura} itemType={'cintura'} />
        <DroppableItemFrame itemEquiped={itemsEquipped.grebas} itemType={'grebas'} />
      </div>
      <div className="equipmentStats">
        <p>Defensa: {itemsEquippedStats.defensa}</p>
        <p>Fuego: {itemsEquippedStats.fuego}</p>
        <p>Agua: {itemsEquippedStats.agua}</p>
        <p>Rayo: {itemsEquippedStats.rayo}</p>
        <p>Hielo: {itemsEquippedStats.hielo}</p>
        <p>Draco: {itemsEquippedStats.draco}</p>
      </div>
    </DragDropContext>
  );
};

Craftsmanship.displayName = 'Craftsmanship';
