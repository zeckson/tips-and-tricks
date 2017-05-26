const name = `Салат`;
console.log(`${name}-бар создан`);

import getTomato from '../food/tomato';
import getCucumber from '../food/cucumber';

export default (portions) => {
  console.log(`Готовлю ${name.toLowerCase()} на ${portions} персон`);
  getTomato(portions);
  getCucumber(portions);
  console.log(`${name} готов`);
};