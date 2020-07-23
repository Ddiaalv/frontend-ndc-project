import { ArmorType, WeaponType } from './types';

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
  tipo_item: '',
  ataque: 0,
  danio_elemento: 0,
  elemento: '',
  afinidad: 0,
  sello_ancianos: '',
  tipo_vial: '',
  danio_vial: 0,
  elemento_vial: '',
  numero_disparos: 0,
  tipo_disparo: '',
  notas: {
    nota01: '',
    nota02: '',
    nota03: '',
  },
  modificaciones: 0,
  desvio: '',
  tiro_especial: '',
  bonus_kinsecto: '',
  viales: {
    vial01: '',
    vial02: '',
    vial03: '',
    vial04: '',
    vial05: '',
  },
  defensa: 0,
  fuego: 0,
  agua: 0,
  rayo: 0,
  hielo: 0,
  draco: 0,
  ranuras: {
    lvl1: 0,
    lvl2: 0,
    lvl3: 0,
  },
  precio: 0,
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

export function calculateEquipmentStats(itemsEquipped: any) {
  let defenseSum = 0;
  let fireSum = 0;
  let waterSum = 0;
  let thunderSum = 0;
  let iceSum = 0;
  let dracoSum = 0;
  let attackSum = 0;
  let elemAttackSum = 0;
  let affinitySum = 0;
  let priceSum = 0;
  const slotsCount = [];
  let lvl1Sum = 0;
  let lvl2Sum = 0;
  let lvl3Sum = 0;
  let note1 = '';
  let note2 = '';
  let note3 = '';
  let vial1 = '';
  let vial2 = '';
  let vial3 = '';
  let vial4 = '';
  let vial5 = '';
  let ancientSeal = '';
  let element = '';
  let vialType = '';
  let vialAttack = 0;
  let vialElement = '';
  let numberOfShots = 0;
  let shotType = '';
  let specialShot = '';
  let deviation = '';
  let kinsectBonus = '';
  let modifications = 0;
  let typeItem = '';

  for (const key in itemsEquipped) {
    if (itemsEquipped.hasOwnProperty(key)) {
      // FIXME: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'itemsEquipedProps'.
      // @ts-ignore
      const itemEquipped = itemsEquipped[key];
      if (itemEquipped.nombre !== '') {
        if (itemEquipped.tipo !== 'arma') {
          fireSum += itemEquipped.fuego;
          waterSum += itemEquipped.agua;
          thunderSum += itemEquipped.rayo;
          iceSum += itemEquipped.hielo;
          dracoSum += itemEquipped.draco;
          typeItem = itemEquipped.tipo;
        } else {
          attackSum += itemEquipped.ataque;
          elemAttackSum += itemEquipped.danio_elemento01;
          affinitySum += itemEquipped.afinidad;
          attackSum += itemEquipped.ataque;
          note1 = itemEquipped.nota01;
          note2 = itemEquipped.nota02;
          note3 = itemEquipped.nota03;
          vial1 = itemEquipped.vial01;
          vial2 = itemEquipped.vial02;
          vial3 = itemEquipped.vial03;
          vial4 = itemEquipped.vial04;
          vial5 = itemEquipped.vial05;
          element = itemEquipped.elemento_01;
          ancientSeal = itemEquipped.sello_ancianos;
          vialType = itemEquipped.tipo_vial;
          vialAttack = itemEquipped.danio_vial;
          vialElement = itemEquipped.elemento_vial;
          numberOfShots = itemEquipped.numero_disparos;
          shotType = itemEquipped.tipo_disparo;
          specialShot = itemEquipped.tiro_especial;
          deviation = itemEquipped.desvio;
          kinsectBonus = itemEquipped.bonus_kinsecto;
          modifications = itemEquipped.modificaciones;
          typeItem = itemEquipped.tipo_arma;
        }
        defenseSum += itemEquipped.defensa;
        priceSum += itemEquipped.precio;
        if (itemEquipped.ranura01 !== '') {
          slotsCount.push(itemEquipped.ranura01);
          if (itemEquipped.ranura02 !== '') {
            slotsCount.push(itemEquipped.ranura02);
            if (itemEquipped.ranura03 !== '') {
              slotsCount.push(itemEquipped.ranura03);
            }
          }
        }
        lvl1Sum = calculateNumberOfSlots(slotsCount, 'lvl1');
        lvl2Sum = calculateNumberOfSlots(slotsCount, 'lvl2');
        lvl3Sum = calculateNumberOfSlots(slotsCount, 'lvl3');
      }
    }
  }
  return {
    tipo_item: typeItem,
    ataque: attackSum,
    danio_elemento: elemAttackSum,
    afinidad: affinitySum,
    agua: waterSum,
    draco: dracoSum,
    fuego: fireSum,
    hielo: iceSum,
    rayo: thunderSum,
    ranuras: {
      lvl1: lvl1Sum,
      lvl2: lvl2Sum,
      lvl3: lvl3Sum,
    },
    elemento: element,
    sello_ancianos: ancientSeal,
    tipo_vial: vialType,
    danio_vial: vialAttack,
    elemento_vial: vialElement,
    numero_disparos: numberOfShots,
    tipo_disparo: shotType,
    notas: {
      nota01: note1,
      nota02: note2,
      nota03: note3,
    },
    modificaciones: modifications,
    desvio: deviation,
    tiro_especial: specialShot,
    bonus_kinsecto: kinsectBonus,
    viales: {
      vial01: vial1,
      vial02: vial2,
      vial03: vial3,
      vial04: vial4,
      vial05: vial5,
    },
    defensa: defenseSum,
    precio: priceSum,
  };
}
const calculateNumberOfSlots = (slotsTotal: string[], slotName: string) => {
  let slotCount = 0;
  slotsTotal.forEach((slot) => {
    if (slot === slotName) {
      slotCount++;
    }
  });
  return slotCount;
};

export function removeItem(
  items: (ArmorType | WeaponType)[],
  itemToRemove: ArmorType | WeaponType,
) {
  return items.filter((item) => item.nombre !== itemToRemove.nombre);
}
export const getItemIndex = (
  items: (ArmorType | WeaponType)[],
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
