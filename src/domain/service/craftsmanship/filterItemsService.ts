import { ArmorProps, WeaponProps } from '../../../pages/Craftsmanship/types';

export const byName = (name: string) => (item: any) => {
  return item.nombre
      .toLowerCase()
      .trim()
      .includes(name.toLowerCase().trim());
};

export const byType = (typesPressed: string[]) => (items: any) => {
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

export const filter = {
  items(
      items: (ArmorProps | WeaponProps)[],
      typesPressed: string[],
      namePressed: string,
  ) {
    let arrayProvisional = items;
    const byTypes = byType(typesPressed);
    const byNames = byName(namePressed);
    if (namePressed.length > 0) {
      if (typesPressed.length > 0) {
        arrayProvisional = items.filter(byNames).filter(byTypes);
      } else {
        arrayProvisional = items.filter(byNames);
      }
    } else {
      if (typesPressed.length > 0) {
        arrayProvisional = items.filter(byTypes);
      }
    }
    return arrayProvisional;
  }
};