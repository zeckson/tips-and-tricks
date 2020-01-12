function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[0];
  const parts = partition(array, 1, array.length - 1, pivot);
  console.log(parts);
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

  while (left <= right) {
    while (array[left] < pivot) {
      leftArray.push(array[left]);
      left++;
    }
    while (array[right] > pivot) {
      rightArray.push(array[right]);
      right--;
    }
    if (left <= right) {
      leftArray.push(array[right]);
      rightArray.push(array[left]);
      left++;
      right--;
    }
  }
  return [leftArray, rightArray];
}

quicksort([5, 8, 1, 3, 7, 9, 2]);
// quicksort([0]);
// quicksort([0, 1, 2, 3, 4]);
