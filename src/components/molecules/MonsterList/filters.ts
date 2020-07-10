const filterByMonsterName = (name: string) => (monster: any) => {
  return monster.nombre
    .toLowerCase()
    .trim()
    .includes(name.toLowerCase().trim());
};

const filterByElements = (elements: string[]) => (monster: any) => {
  for (const element of elements) {
    const isWeak = monster[element] >= 2;
    if (isWeak) {
      return monster;
    }
  }
};

export { filterByElements, filterByMonsterName };
