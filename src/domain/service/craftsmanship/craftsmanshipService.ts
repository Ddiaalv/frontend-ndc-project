import {WeaponsArmorsProps,} from '../../../pages/Craftsmanship/types';

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
