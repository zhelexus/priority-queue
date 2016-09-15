const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.currentSize = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
		this.currentSize++;
	}

	pop() {

	}

	detachRoot() {
		let root = this.root;
		if (this.size() == 1){
			this.root = null;
		} else if (this.size() == 2){
			this.parentNodes.shift();
		}
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.currentSize;
	}

	isEmpty() {
		return this.curSize === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.currentSize = 0;	
	}

	insertNode(node) {
		if(this.root == null){
			this.root = node;
		}else{
			this.parentNodes[0].appendChild(node);
		}
		this.parentNodes.push(node);
		if(this.parentNodes[0].left != null && this.parentNodes[0].right != null){
			this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
