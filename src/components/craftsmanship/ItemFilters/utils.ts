export function getTypeImage(type: string) {
  let img = '';
  console.log(type);
  switch (type.toLowerCase()) {
    case 'arco':
      img = 'weapon/icon/bR1';
      break;
    case 'espadas dobles':
      img = 'weapon/icon/ddR1';
      break;
    case 'gran espada':
      img = 'weapon/icon/gsR1';
      break;
    case 'glaive insecto':
      img = 'weapon/icon/giR1';
      break;
    case 'lanza pistola':
      img = 'weapon/icon/glR1';
      break;
    case 'ballesta pesada':
      img = 'weapon/icon/hbR1';
      break;
    case 'cornamusa':
      img = 'weapon/icon/hhR1';
      break;
    case 'ballesta ligera':
      img = 'weapon/icon/lbR1';
      break;
    case 'lanza':
      img = 'weapon/icon/lR1';
      break;
    case 'espada larga':
      img = 'weapon/icon/lsR1';
      break;
    case 'espada y escudo':
      img = 'weapon/icon/ssR1';
      break;
    case 'hacha espada':
      img = 'weapon/icon/saR1';
      break;
    case 'martillo':
      img = 'weapon/icon/hR1';
      break;
    case 'hacha cargada':
      img = 'weapon/icon/cbR1';
      break;
    case 'casco':
      img = 'armor/icon/heR1';
      break;
    case 'pechera':
      img = 'armor/icon/maR1';
      break;
    case 'guantes':
      img = 'armor/icon/vaR1';
      break;
    case 'pantalon':
      img = 'armor/icon/coR1';
      break;
    case 'botas':
      img = 'armor/icon/grR1';
      break;
  }
  return img;
}
