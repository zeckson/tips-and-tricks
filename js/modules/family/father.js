// Файл father.js
/*
 Набор импортированных значений
 */
import sonName from './son.js';
import daughterName from './daughter';

/*
 Список констант
 */
const name = `Николай`;

/*
 Тело модуля
 */
console.log(`Отец: ${name}: сын — ${sonName}, дочь — ${daughterName}`);

/*
 Набор экспортированных значений
 */
export default name;

