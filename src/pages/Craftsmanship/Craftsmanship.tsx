import * as React from 'react';
import { useEffect, useState } from 'react';
import './Craftsmanship.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { Items } from '../../components/monsters/craftsmanship/Items';
import { DroppableItemFrame } from '../../components/monsters/craftsmanship/DroppableItemFrame';

type armorType = {
  id: number;
  nombre: string;
  ruta: string;
  tipo: string;
  rama: string;
  rango: string;
  nivel: number;
  rareza: number;
  defensa?: number;
  ranura01?: string;
  ranura02?: string;
  ranura03?: string;
  fuego: number;
  agua: number;
  rayo: number;
  hielo: number;
  draco: number;
  precio: number;
  habilidad1?: string;
  habilidad2?: string;
};
type weaponType = {
  id: number;
  nombre: string;
  tipo: string;
  rama: string;
  ramaEvo: number;
  ruta: string;
  rareza: number;
  evolucion: string;
  precio: number;
  ataque: number;
  danio_elemento01: number;
  elemento_01: string;
  elemento01: string;
  danio_elemento02: number;
  elemento_02: string;
  elemento02: string;
  afilado: string;
  afinidad: number;
  defensa: number;
  sello_ancianos: string;
  ranura01: string;
  ranura02: string;
  ranura03: string;
  tipo_vial: string;
  danio_vial: number;
  elemento_vial: string;
  numero_disparos: number;
  tipo_disparo: string;
  nota01: string;
  nota02: string;
  nota03: string;
  modificaciones: number;
  desvio: string;
  tiro_especial: string;
  bonus_kinsecto: string;
  vial01: string;
  vial02: string;
  vial03: string;
  vial04: string;
  vial05: string;
};

type itemsEquipedProps = {
  arma: weaponType | armorType;
  casco: armorType | weaponType;
  pechera: armorType | weaponType;
  cintura: armorType | weaponType;
  guanteletes: armorType | weaponType;
  grebas: armorType | weaponType;
};

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
      defensa: 20,
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
      defensa: 20,
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
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
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
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
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
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
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
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
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
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
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
      fuego: 0,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
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
      afinidad: 10,
      defensa: 20,
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

  const [items, setItems] = useState<(armorType | weaponType)[]>(itemsMock);
  const [itemsEquipped, setItemsEquipped] = useState<itemsEquipedProps>(
    itemsEquipedDefault,
  );

  useEffect(() => {
    calculateEquipmentStats();
  }, [itemsEquipped]);

  function calculateEquipmentStats() {
    console.log('WIP');
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
      console.log(`debe de ser un ${droppableSectionName}`);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Items items={items} />
      <div className="armorSet">
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
      <div className="equipmentStats">{itemsEquipped.casco.defensa}</div>
    </DragDropContext>
  );
};

Craftsmanship.displayName = 'Craftsmanship';
