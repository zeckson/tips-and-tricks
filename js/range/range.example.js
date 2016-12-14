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

const drawListMap = (elementsNumber) => {
  let counter = 0;
  const list = new Array(elementsNumber).map(() => counter++);

  return `
  <ul>
    ${list.map(it => `<li class="${it % 2 ? 'even' : 'odd'}">${it}</li>`).join('')} 
  </ul>`;
};

drawListMap(7);

const range = require('./range');
const drawListFunctional = (elementsNumber) => {
  return `
  <ul>
    ${range(0, elementsNumber)((it) => `<li class="${it % 2 ? 'even' : 'odd'}">${it}</li>`).join('')} 
  </ul>`;
};

drawListFunctional(7);
