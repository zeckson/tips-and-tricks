function sortright(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
    }
    console.log(array);
  }
}

function sortleft(array) {
  for (let i = array.length - 2; i >= 0; i--) {
    for (let j = i; j < array.length && array[j] > array[j + 1]; j++) {
      [array[j + 1], array[j]] = [array[j], array[j + 1]];
    }
    console.log(array);
  }
}

sortright([1, 4, 3, 5, 6, 2]);
console.log();
sortleft([1, 4, 3, 5, 6, 2]);
