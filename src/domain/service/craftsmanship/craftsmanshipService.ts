import {
  ArmorType,
  itemsEquipedProps,
  WeaponsArmorsProps,
  WeaponType,
} from '../../../pages/Craftsmanship/types';
import { itemsEquippedDefault } from '../../../pages/Craftsmanship/itemsDefault';

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
export const calculateNumberOfSlots = (slotsTotal: string[], slotName: string) => {
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

export const equipItem = (
  droppableSectionName: string,
  draggableItem: any,
  itemsEquipped: itemsEquipedProps,
) => {
  let equipped: itemsEquipedProps = itemsEquippedDefault;
  switch (droppableSectionName) {
    case 'arma':
      equipped = { ...itemsEquipped, arma: draggableItem };
      break;
    case 'casco':
      equipped = { ...itemsEquipped, casco: draggableItem };
      break;
    case 'pechera':
      equipped = { ...itemsEquipped, pechera: draggableItem };
      break;
    case 'guantes':
      equipped = { ...itemsEquipped, guantes: draggableItem };
      break;
    case 'pantalon':
      equipped = { ...itemsEquipped, pantalon: draggableItem };
      break;
    case 'botas':
      equipped = { ...itemsEquipped, botas: draggableItem };
      break;
  }
  return equipped;
};

export function manageItemsOnLists(
  result: any,
  itemsFiltered: any,
  itemsEquipped: any,
  items: any,
) {
  const droppableSectionName = result.destination.droppableId;
  const indexItemFromSource = getItemIndex(itemsFiltered, result.draggableId);
  const draggableItem = itemsFiltered[indexItemFromSource];
  // @ts-ignore
  const oldItemEquipped = itemsEquipped[droppableSectionName];
  const itemsEquippedCopy = equipItem(droppableSectionName, draggableItem, itemsEquipped);
  const itemsFilteredCopy = removeItem(itemsFiltered, draggableItem);
  const itemsCopy = removeItem(items, draggableItem);
  if (oldItemEquipped.nombre !== '') {
    itemsFilteredCopy.push(oldItemEquipped);
    itemsCopy.push(oldItemEquipped);
  }
  return {
    itemsEquippedCopy,
    itemsFilteredCopy,
    itemsCopy,
  };
}

export const getItemIndex = (
  items: (ArmorType | WeaponType)[],
  draggableItemId: string,
) => {
  let index = 0;
  items.forEach((item, indexItem) => {
    if (item.id.toString() === draggableItemId) {
      index = indexItem;
    }
  });
  return index;
};

export const getAllItems = async (fetchWeapons: any, fetchArmors: any) => {
  const weaponsArmors: WeaponsArmorsProps = {
    items: [],
    typeItems: [],
    isLoaded: false,
    error: undefined,
  };
  await Promise.all([fetchWeapons, fetchArmors]).then((results) => {
    weaponsArmors.isLoaded = true;
    weaponsArmors.items = results[0].concat(results[1]);
    const armorsType: string[] = [];
    const weaponsType: string[] = [];
    weaponsArmors.items.forEach((item: any) => {
      if (!armorsType.includes(item.tipo) && item.tipo !== 'arma') {
        armorsType.push(item.tipo);
      }
      if (!weaponsType.includes(item.tipo_arma) && item.tipo_arma !== undefined) {
        weaponsType.push(item.tipo_arma);
      }
    });
    weaponsArmors.typeItems = armorsType.concat(weaponsType);
  });
  return weaponsArmors;
};
export const fetchItems = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};
