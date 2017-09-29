const name = `Суп`;
console.log(`${name}-бар создан`);

import getTomato from '../food/tomato';
import getPotato from '../food/potato';
import getCucumber from '../food/cucumber';
import getMeat from '../food/meat';

export default (portions) => {
  console.log(`Готовлю ${name.toLowerCase()} на ${portions} персон`);
  getTomato(portions);
  getPotato(portions);
  getMeat(portions);
  getCucumber(portions);
  console.log(`${name} готов`);
};