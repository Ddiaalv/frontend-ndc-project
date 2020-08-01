import { ArmorType, WeaponType } from '../../../pages/Craftsmanship/types';

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

export function filterItems(
  items: (ArmorType | WeaponType)[],
  typesPressed: string[],
  namePressed: string,
) {
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
  return arrayProvisional;
}
