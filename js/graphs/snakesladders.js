// Complete the quickestWayUp function below.
function quickestWayUp(ladders, snakes) {
  const laddersMap = new Map();
  for (const ladder of ladders) {
    laddersMap.set(ladder[0], ladder[1]);
  }
  const snakesMap = new Map();
  for (const snake of snakes) {
    snakesMap.set(snake[0], snake[1]);
  }

  const visited = new Map();
  visited.set(1, 0);
  const queue = [1];

  while (queue.length) {
    const current = queue.pop();
    if (current === 100) {
      return visited.get(100);
    }
    for (let i = 1; i <= 6; i++) {
      let position = current + i;
      position = snakesMap.get(position) || position;
      position = laddersMap.get(position) || position;

      if (!visited.get(position)) {
        queue.unshift(position);
        visited.set(position, visited.get(current) + 1);
      }
    }
  }

  return -1;
}

console.log(quickestWayUp([[32, 62], [42, 68], [12, 98]], [[95, 13], [97, 25], [93, 37], [79, 27], [75, 19], [49, 47], [67, 17]]));
console.log(quickestWayUp([[8, 52], [6, 80], [26, 42], [2, 72]], [[51, 19], [39, 11], [37, 29], [81, 3], [59, 5], [79, 23], [53, 7], [43, 33], [77, 21]]));

console.log([[23, 34], [12, 72]]);
console.log([[23, 34], [12, 72]].join(','));
