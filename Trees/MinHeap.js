class MinHeap {
  #size;
  #arr;
  constructor() {
    this.#arr = new Array();
    this.#size = 0;
  }

  //helper functions - start

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  //___________________________//

  getParentValue(childIndex) {
    return this.#arr[this.getParentIndex(childIndex)];
  }

  getLeftChildValue(parentIndex) {
    return this.#arr[this.getLeftChildIndex(parentIndex)];
  }

  getRightChildValue(parentIndex) {
    return this.#arr[this.getRightChildIndex(parentIndex)];
  }

  //____________________________//

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.#size;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.#size;
  }

  print() {
    let str = [];
    for (let i = 0; i < this.#size; i++) {
      str.push(this.#arr[i]);
    }

    console.log(str.join(","));
  }

  // _____________________ //
  swap(i, j) {
    let temp = this.#arr[i];
    this.#arr[i] = this.#arr[j];
    this.#arr[j] = temp;
  }

  //helper functions - end

  peek() {
    if (this.#size === 0) {
      throw new Error("Array overflow.");
    } else {
      return this.#arr[0];
    }
  }

  insert(num) {
    this.#arr[this.#size] = num;
    this.#size++;
    this.#heapifyUp();
  }

  #heapifyUp() {
    let index = this.#size - 1;

    while (this.hasParent(index) && index > 0) {
      if (this.getParentValue(index) > this.#arr[index]) {
        this.swap(this.getParentIndex(index), index);
      }
      index = this.getParentIndex(index);
    }
  }

  extractMin() {
    if (this.#size === 0) {
      throw new Error("Array does not have any value.");
    }
    let root = this.#arr[0];
    this.#arr[0] = this.#arr[this.#size - 1];
    this.#size--;
    this.#heapifyDown();
    return root;
  }

  #heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index) && index < this.#size) {
      let childIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.getRightChildValue(index) < this.getLeftChildValue(index)
      ) {
        childIndex = this.getRightChildIndex(index);
      }

      if (this.#arr[index] > this.#arr[childIndex]) {
        this.swap(index, childIndex);
      }

      index = childIndex;
    }
  }
}

function main() {
  try {
    const tree = new MinHeap();

    // console.log(tree.peek());

    tree.insert(6);
    tree.insert(2);
    tree.insert(4);
    tree.insert(3);
    tree.insert(5);
    tree.insert(1);

    tree.print();
    console.log("extract: " + tree.extractMin());
    tree.print();
  } catch (error) {
    console.log(error.message);
  }
}

main();
