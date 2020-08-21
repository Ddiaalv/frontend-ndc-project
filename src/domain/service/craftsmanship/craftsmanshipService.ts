import { WeaponsArmorsProps } from '../../../pages/Craftsmanship/types';

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
    weaponsArmors.typeItems = getItemsTypesList(weaponsArmors.items);
  });
  return weaponsArmors;
};
export const fetchItems = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};
const getItemsTypesList = (items: any) => {
  return items.reduce((total: string[], item: any) => {
    if (!total.includes(item.tipo) && item.tipo !== 'arma') {
      total.push(item.tipo);
    }
    if (!total.includes(item.tipo_arma) && item.tipo_arma !== undefined) {
      total.push(item.tipo_arma);
    }
    return total;
  }, [] as string[]);
};
