function addConnection(map, start, end) {
  const connection = map.get(start) || new Set();
  map.set(start, connection);
  connection.add(end);
}

// Complete the bfs function below.
function bfs(nodes, edgesNum, edges, start) {
  const conMap = new Map();

  for(let i = 1; i <= nodes; i++) {
    for(const edge of edges) {
      addConnection(conMap, edge[0], edge[1]);
      addConnection(conMap, edge[1], edge[0]);
    }
  }

  const queue = [];
  const visited = new Map();
  visited.set(start, 0);
  queue.unshift(start);

  let current;
  while ((current = queue.pop())) {
    const connections = conMap.get(current);
    for (const connected of connections) {
      if(!visited.get(connected)) {
        queue.unshift(connected);
        visited.set(connected,visited.get(current) + 1);
      }
    }
  }

  const result = [];
  for (let i = 1; i <= nodes; i++) {
    if(i!==start) {
      const conns = visited.get(i);
      if(conns) {
        result.push(conns*6);
      }else{
        result.push(-1);
      }
    }
  }

  //console.log(n, m , edges, s)
  return result;
}

console.log(bfs(4, 2, [[1, 2], [1, 3]], 1));
console.log(bfs(3, 1, [[2, 3]], 2));
