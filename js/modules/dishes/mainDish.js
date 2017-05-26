const name = `Основное блюдо`;
console.log(`${name}-бар создан`);

import getPotato from '../food/potato';
import getMeat from '../food/meat';

export default (portions) => {
  console.log(`Готовлю ${name.toLowerCase()} на ${portions} персон`);
  getPotato(portions);
  getMeat(portions);
  console.log(`${name} готов`);
};