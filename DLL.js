function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype = {

	// display: function()


	push: function(value) {
		var node = {
			val: value,
			next: null,
			prev: this._tail
		};
		if(!this.head) {
			this.head = node;
		} else {
			var current = this.head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
			this.tail = node;
		};
	}
};

var list1 = new DoublyLinkedList();
list1.push(5);
list1.push(7);
list1.push(9);
list1.push(11);
console.log(list1);
