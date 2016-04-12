function Node(data){
	this.data = data;
	this.next = null;
	this.prev = null
}

function SinglyList(){
	this._length = 0;
	this.head = null;
	this.tail = null;
}
SinglyList.prototype.add = function(value){
	var node = new Node(value),
		currentNode = this.head;
	//list is empty
	if(!currentNode){
		this.head = node;
		this.tail = node;
		return node;
	}
	//list is not empty
	while(currentNode.next){
		currentNode = currentNode.next;
		this.tail = node;
		// currentNode.prev = currentNode;
		node.prev = currentNode;
		//console.log("--"+currentNode.data+"-"+this.head.data+"-"+this.tail.data);
	}
	currentNode.next = node;

	this._length++;
	
	return node;
};
SinglyList.prototype.goTo = function(pos){
	var node = new Node();
	var currentNode = this.head;
	var position = 0;
	
	if( pos > this._length){
		return 0;
	}
	while(position < pos){
		currentNode = currentNode.next;
		position++;
	}
	return currentNode;
}
SinglyList.prototype.delete = function(pos){
	var currentNode = this.head;
	if(pos == 0){ //trying to delete HEAD
		this.head = this.head.next;
	}else{ //trying to delete something else but HEAD
		currentNode = this.goTo(pos-1);
		currentNode.next = currentNode.next.next;
	}

}
SinglyList.prototype.printAll = function(){
	var currentNode = this.head;
	var printout = "";
	while(currentNode){
		//console.log(currentNode.data);
		//printout += currentNode.data+"->";
		printout += (currentNode!=null)?currentNode.data+"->":'null';
		currentNode = currentNode.next;
	}
	return printout;
}
var list = new SinglyList();
list.add('A');
list.add('B');
list.add('C');
list.add('D');
list.add('E');
list.add('F');
console.log( list.printAll() );