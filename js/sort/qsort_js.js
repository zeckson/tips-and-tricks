const qsort = (arr) => {
  console.log(arr);
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[(Math.trunc(arr.length / 2))];

  const left = qsort(arr.filter((it) => it < pivot));
  const right = qsort(arr.filter((it) => it > pivot));

  return [...left, pivot, ...right];
};

console.log(qsort([0, 9, 7, 3, 4, 5, 8]));
console.log(qsort([9, 1]));
