import { MonstersProps } from '../../../components/monsters/MonsterInformation/types';

const byMonsterName = (name: string) => (monster: any) => {
  return monster.nombre
    .toLowerCase()
    .trim()
    .includes(name.toLowerCase().trim());
};
const byElements = (elements: string[]) => (monster: any) => {
  for (const element of elements) {
    const isWeak = monster[element] >= 2;
    if (isWeak) {
      return monster;
    }
  }
};

export const checkSearchFilters = (
  monsterList: MonstersProps[],
  monsterName: string,
  pressedElements: string[],
) => {
  const byMonsterNameCopy = byMonsterName(monsterName);
  const byElementsCopy = byElements(pressedElements);
  if (monsterName.length > 0) {
    if (pressedElements.length > 0) {
      return monsterList.filter(byMonsterNameCopy).filter(byElementsCopy);
    } else {
      return monsterList.filter(byMonsterNameCopy);
    }
  } else {
    return monsterList.filter(byElementsCopy);
  }
};
