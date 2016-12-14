#Проблема

Сталкивались ли вы когда-нибудь в вашей программе с выводом какого-то
списка однотипных элементов. Например вывод черезполосицы из `javascript`:
```
<ul>
    <li class="even">0</li>
    <li class="odd">1</li>
    <li class="even">2</li>
    <li class="odd">3</li>
    <li class="even">4</li>
    <li class="odd">5</li>
    <li class="even">6</li>
</ul>
```

Как это можно решить в лоб. Создать массив:
```
const drawListNaive = (elementsNumber) => {
  const list = [];

  for (let i = 0; i < elementsNumber; i++) {
    list.push(i);
  }

  return `
  <ul>
    ${list.map(it => `<li class="${it % 2 ? 'even' : 'odd'}">${it}</li>`).join('')} 
  </ul>`;
};

drawListNaive(7);
```

Либо так:
```
const drawListMap = (elementsNumber) => {
  let counter = 0;
  const list = new Array(elementsNumber).map(() => counter++);

  return `
  <ul>
    ${list.map(it => `<li class="${it % 2 ? 'even' : 'odd'}">${it}</li>`).join('')} 
  </ul>`;
};

drawListMap(7);
```

Но массив лишь побочный продукт наших действий и по большому счету он нам не нужен.
Все что мы хотели сделать — это пробежать по всем элементам интервала `[0, 7)`.
Тогда можно ввести функциональное выражение, которое будет бежать по нашему интервалу и преобразовывать
каждый элемент по заданному правилу и возвращать массив из полученных элементов (см код и тесты (range.js)[/range.js]):
```
const range = require('./range');

const drawListFunctional = (elementsNumber) => {
  return `
  <ul>
    ${range(0, elementsNumber)((it) => `<li class="${it % 2 ? 'even' : 'odd'}">${it}</li>`).join('')} 
  </ul>`;
};

drawListFunctional(7);
```

#Что изменилось?

Код стал более компактным и читаемым:
 - нарисовать список `<ul>`
 - создать интервал `[0, 7)`
 - каждый элемент интервала превратить в `<li>`
 - соединить все элементы в список

#Где это можно применить?

Во всех подобных случаях, где требуется выводить несколько однотипных элементов.
Например, кол-во жизней игрока:

Lives: &#9829;&#9829;&#9829;&#9829;&#9829;

```
const html = `Lives: ${range(0, 5)(it => &#9829;).join()}
```