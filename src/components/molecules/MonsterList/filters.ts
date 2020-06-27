const filterByMonsterName = (name: string) => (monster: any) => {
  return monster.nombre
    .toLowerCase()
    .trim()
    .includes(name.toLowerCase().trim());
};

const filterByElements = (elements: string[]) => (monster: any) => {
  let comprobar = false;
  elements.forEach((element: string) => {
    if (monster[element] >= 2) {
      comprobar = true;
    }
  });
  if (comprobar) {
    return monster;
  }
};

export { filterByElements, filterByMonsterName };
