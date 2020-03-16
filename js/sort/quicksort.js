function quicksort(array, left = 0, right = array.length - 1) {
  if (right <= left) {
    return;
  }
  console.log(array);
  const index = partition(array, left, right);
  quicksort(array, left, index - 1);
  quicksort(array, index, right);
}

function partition(array, left, right) {

  const pivot = array[left];

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}

quicksort([5, 8, 1, 3, 7, 9, 2]);
// quicksort([0]);
// quicksort([0, 1, 2, 3, 4]);
