function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[0];
  const parts = partition(array, 1, array.length - 1, pivot);

  const left = quicksort(parts[0]);
  const right = quicksort(parts[1]);

  left.push(pivot);
  array = left.concat(right);

  console.log(array);
  return array;
}

function partition(array, left, right, pivot) {
  const leftArray = [];
  const rightArray = [];

  for (const it of array) {
    if (it < pivot) {
      leftArray.push(it);
    }
    if(it > pivot) {
      rightArray.push(it);
    }
  }
  return [leftArray, rightArray];
}

quicksort([5, 8, 1, 3, 7, 9, 2]);
// quicksort([0]);
// quicksort([0, 1, 2, 3, 4]);
