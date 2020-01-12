class ArrayHeap {
  constructor() {
    this.items = [];
  }

  add(value) {
    const index = this.items.length;
    this.items[index] = value;
    this._heapifyUp();
  }

  remove(value) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === value) {
        this.swap(i, this.items.length - 1);
        this.items.pop();
        this._heapifyDown();
        break;
      }
    }
  }

  minimum() {
    return this.items[0];
  }

  _heapifyUp() {
    let index = this.items.length - 1;
    while (this.items[this.parentIndex(index)] > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  _heapifyDown() {
    let index = 0;
    while (this.leftIndex(index) < this.items.length) {
      let smallestIdx = this.leftIndex(index);
      if (this.items[this.rightIndex(index)] < this.items[smallestIdx]) {
        smallestIdx = this.rightIndex(index);
      }
      if (this.items[index] < this.items[smallestIdx]) {
        break;
      } else {
        this.swap(index, smallestIdx);
      }
      index = smallestIdx;
    }

  }

  swap(first, second) {
    [this.items[first], this.items[second]] = [this.items[second], this.items[first]]
  }

  parentIndex(index) {
    return ((index - 1) / 2) | 0;
  }
  print() {
    console.log(this.items);
  }

  rightIndex(index) {
    return 2 * index + 2;
  }

  leftIndex(index) {
    return 2 * index + 1;
  }

}

const heap = new ArrayHeap();
heap.add(10);
heap.add(9);
console.log(heap.minimum());
// heap.print();
heap.add(3);
console.log(heap.minimum());
// heap.print();
heap.remove(9);
console.log(heap.minimum());
// heap.print();
heap.remove(3);
console.log(heap.minimum());
// heap.print();
heap.add(5);
heap.add(2);
console.log(heap.minimum());
// heap.print();


