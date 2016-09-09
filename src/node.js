class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left !== null && this.right !== null) {
      			return;
		} else if(this.left == null){
      			this.left = node;
    		} else {
      			this.right = node;
    		}
   		node.parent = this;
	}


	removeChild(node) {
    		if (node == this.left) {
      			this.left = null;
    		} else	if (node == this.right) {
      			this.right = null;
	    	} else {
	      		throw new Error("passed node is not a child of this node");
	    	}
	    	node.parent = null;
	}

	remove() {

		if (this.parent == null) {
			return;
		}
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if(this.parent == null) {return;}

		let grandParent = this.parent.parent;
		let parent = this.parent;
		let brother;
		let leftChild = this.left;
		let rightChild = this.right;

		if (parent.left === this) {
		  brother = parent.right;
		} else {
		  brother = parent.left;
		}

		parent.remove();

		if (grandParent !== null) {
			grandParent.appendChild(this);
		}

		if (brother !== null) {
			if (parent.left === this) {
				this.right = brother;
				this.left = null;
			} else {
				this.left = brother;
				this.right = null;
			}
			brother.parent = this;
		}

		this.appendChild(parent);

		if (leftChild !== null) {
		  parent.left = leftChild;
		  leftChild.parent = parent;
		} else {
		  parent.left = null;
		}
		if (rightChild !== null) {
		  parent.right = rightChild;
		  rightChild.parent = parent;
		} else {
		  parent.right = null;
		}
	}

	}

module.exports = Node;
