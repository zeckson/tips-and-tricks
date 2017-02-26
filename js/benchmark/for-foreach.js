const TOTAL = 50000000;
const arr = new Array(TOTAL);
const arr2 = [];

console.time('warmup');
for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
  arr2[i] = i;
}
console.timeEnd('warmup');

console.time('for');
for (let i = 0; i < arr.length; i++) {
  arr2[i] = arr[i];
}
console.timeEnd('for');

console.time('reversed for classic');
for (let i = arr.length - 1; i >= 0; i--) {
  arr2[i] = arr[i];
}
console.timeEnd('reversed for classic');

console.time('reversed for');
for (let i = arr.length - 1; i--;) {
  arr2[i] = arr[i];
}
console.timeEnd('reversed for');

console.time('foreach');
arr.forEach((it, i) => {
  arr2[i] = it;
});
console.timeEnd('foreach');
