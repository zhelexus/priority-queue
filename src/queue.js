const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
			this.maxSize = maxSize || 30;
			this.heap = new MaxHeap();
	}

	push(data, priority) {
		if(this.heap.size() >= this.maxSize){
			throw new Error("queue has max size");
		}
		this.heap.push(data, priority);
	}

	shift() {
		this.heap.pop();
	}

	size() {

	}

	isEmpty() {

	}
}

module.exports = PriorityQueue;
