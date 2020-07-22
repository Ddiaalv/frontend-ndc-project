import { armorType, itemsEquipedProps, weaponType } from './types';

export const itemsEquippedDefault = {
  arma: {
    id: 5000,
    nombre: '',
    rama: '',
    rama_evo: 3,
    ruta: '',
    rareza: 2,
    evolucion: '',
    tipo: '',
    tipo_arma: '',
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
    id: 5001,
    nombre: '',
    ruta: '',
    tipo: '',
    rama: '',
    rango: '',
    nivel: 1,
    rareza: 1,
    defensa: 2,
    ranura01: '',
    ranura02: '',
    ranura03: '',
    fuego: 0,
    agua: 2,
    rayo: 0,
    hielo: 0,
    draco: 0,
    precio: 100,
    habilidad1: '',
    habilidad2: '',
  },
  pechera: {
    id: 5002,
    nombre: '',
    ruta: '',
    tipo: '',
    rama: '',
    rango: '',
    nivel: 1,
    rareza: 1,
    defensa: 2,
    ranura01: '',
    ranura02: '',
    ranura03: '',
    fuego: 0,
    agua: 2,
    rayo: 0,
    hielo: 0,
    draco: 0,
    precio: 100,
    habilidad1: '',
    habilidad2: '',
  },
  guantes: {
    id: 5003,
    nombre: '',
    ruta: '',
    tipo: '',
    rama: '',
    rango: '',
    nivel: 1,
    rareza: 1,
    defensa: 2,
    ranura01: '',
    ranura02: '',
    ranura03: '',
    fuego: 0,
    agua: 2,
    rayo: 0,
    hielo: 0,
    draco: 0,
    precio: 100,
    habilidad1: '',
    habilidad2: '',
  },
  pantalon: {
    id: 5004,
    nombre: '',
    ruta: '',
    tipo: '',
    rama: '',
    rango: '',
    nivel: 1,
    rareza: 1,
    defensa: 2,
    ranura01: '',
    ranura02: '',
    ranura03: '',
    fuego: 0,
    agua: 2,
    rayo: 0,
    hielo: 0,
    draco: 0,
    precio: 100,
    habilidad1: '',
    habilidad2: '',
  },
  botas: {
    id: 5005,
    nombre: '',
    ruta: '',
    tipo: '',
    rama: '',
    rango: '',
    nivel: 1,
    rareza: 1,
    defensa: 2,
    ranura01: '',
    ranura02: '',
    ranura03: '',
    fuego: 0,
    agua: 2,
    rayo: 0,
    hielo: 0,
    draco: 0,
    precio: 100,
    habilidad1: '',
    habilidad2: '',
  },
};
export const equipmentStatsDefault = {
  ataque: 0,
  defensa: 0,
  fuego: 0,
  agua: 0,
  rayo: 0,
  hielo: 0,
  draco: 0,
};
export const filterByItemName = (name: string) => (item: any) => {
  return item.nombre
    .toLowerCase()
    .trim()
    .includes(name.toLowerCase().trim());
};
export const filterByItemTypes = (typesPressed: string[]) => (items: any) => {
  for (const type of typesPressed) {
    if (items.tipo === 'arma') {
      if (items.tipo_arma.toLowerCase() === type.toLowerCase()) {
        return items;
      }
    }
    if (items.tipo.toLowerCase() === type.toLowerCase()) {
      return items;
    }
  }
};

export function calculateEquipmentStats(itemsEquipped: itemsEquipedProps) {
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
  return {
    ataque: attackSum,
    agua: waterSum,
    draco: dracoSum,
    fuego: fireSum,
    hielo: iceSum,
    rayo: thunderSum,
    defensa: defenseSum,
  };
}
export function removeItem(
  items: (armorType | weaponType)[],
  itemToRemove: armorType | weaponType,
) {
  return items.filter((item) => item.nombre !== itemToRemove.nombre);
}
export const getItemIndex = (
  items: (armorType | weaponType)[],
  draggableItemId: string,
) => {
  let indice = 0;
  items.forEach((item, indexItem) => {
    if (item.id.toString() === draggableItemId) {
      indice = indexItem;
    }
  });
  return indice;
};
