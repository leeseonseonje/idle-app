const items = {
  normalSword: require('../resource/images/weapons/sword-normal.png'),
  rareSword: require('../resource/images/weapons/sword-rare.png'),
  epicSword: require('../resource/images/weapons/sword-epic.png'),
  uniqueSword: require('../resource/images/weapons/sword-unique.png'),
  legendarySword: require('../resource/images/weapons/sword-legendary.png'),
  endSword: require('../resource/images/weapons/sword-end.png'),
  normalAxe: require('../resource/images/weapons/axe-normal.png'),
  rareAxe: require('../resource/images/weapons/axe-rare.png'),
  epicAxe: require('../resource/images/weapons/axe-epic.png'),
  uniqueAxe: require('../resource/images/weapons/axe-unique.png'),
  legendaryAxe: require('../resource/images/weapons/axe-legendary.png'),
  endAxe: require('../resource/images/weapons/axe-end.png'),
  normalSpear: require('../resource/images/weapons/spear-normal.png'),
  rareSpear: require('../resource/images/weapons/spear-rare.png'),
  epicSpear: require('../resource/images/weapons/spear-epic.png'),
  uniqueSpear: require('../resource/images/weapons/spear-unique.png'),
  legendarySpear: require('../resource/images/weapons/spear-legendary.png'),
  endSpear: require('../resource/images/weapons/spear-end.png'),
};

export const itemImages = (name: string, grade: string) => {
  if (name === 'SWORD') {
    if (grade === 'NORMAL') {
      return items.normalSword;
    } else if (grade === 'RARE') {
      return items.rareSword;
    } else if (grade === 'EPIC') {
      return items.epicSword;
    } else if (grade === 'UNIQUE') {
      return items.uniqueSword;
    } else if (grade === 'LEGENDARY') {
      return items.legendarySword;
    } else if (grade === 'END') {
      return items.endSword;
    }
  } else if (name === 'AXE') {
    if (grade === 'NORMAL') {
      return items.normalAxe;
    } else if (grade === 'RARE') {
      return items.rareAxe;
    } else if (grade === 'EPIC') {
      return items.epicAxe;
    } else if (grade === 'UNIQUE') {
      return items.uniqueAxe;
    } else if (grade === 'LEGENDARY') {
      return items.legendaryAxe;
    } else if (grade === 'END') {
      return items.endAxe;
    }
  } else if (name === 'SPEAR') {
    if (grade === 'NORMAL') {
      return items.normalSpear;
    } else if (grade === 'RARE') {
      return items.rareSpear;
    } else if (grade === 'EPIC') {
      return items.endSpear;
    } else if (grade === 'UNIQUE') {
      return items.uniqueSpear;
    } else if (grade === 'LEGENDARY') {
      return items.legendarySpear;
    } else if (grade === 'END') {
      return items.endSpear;
    }
  }
  return '';
};
