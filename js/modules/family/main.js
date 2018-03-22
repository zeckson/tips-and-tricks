(function () {
'use strict';

// Файл daughter.js
const name$3 = `Анна`;

console.log(`Дочь: ${name$3}, брат: ${name$2}`); // name$2 is not defined

// Файл son.js
const name$2 = `Кирилл`;

console.log(`Сын: ${name$2}, сестра: ${name$3}`);

// Файл father.js
const name = `Николай`;

console.log(`Отец: ${name}: сын — ${name$2}, дочь — ${name$3}`);
}());
//# sourceMappingURL=main.js.map
