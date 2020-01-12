const generatePowerSet = function (set, numbers, index, combination) {
  if (index >= numbers.length) {
    if (combination.length > 0) {
      set.add(combination);
    }
    return;
  }

  const first = combination.slice();
  first.push(numbers[index]);
  generatePowerSet(set, numbers, index + 1, first);
  generatePowerSet(set, numbers, index + 1, combination.slice());
};

const isColorful = function (num) {
  const numbers = [];
  while (num >= 1) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    numbers.unshift(digit);
  }
  const powerSet = new Set();
  generatePowerSet(powerSet, numbers, 0, []);
  const multiplySet = new Set();
  for (const set of powerSet) {
    const mult = set.reduce((acc, it) => acc * it);
    if(multiplySet.has(mult)) {
      return false;
    }
    multiplySet.add(mult);
  }

  return true;
};

function parseHrtimeToSeconds(hrtime) {
  return (hrtime[0] + (hrtime[1] / 1e9)).toFixed(3);
}

const startTime = process.hrtime();

let colorfuls = 0;
for (let i = 0; i < 1000000; i++) {
  if (isColorful(i)) {
    colorfuls++;
  }
}
console.log(colorfuls);

console.log(`It takes ${parseHrtimeToSeconds(process.hrtime(startTime))} seconds`);

