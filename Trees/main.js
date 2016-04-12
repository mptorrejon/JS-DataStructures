function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}
function Tree(){
	this.head = null;
}

Tree.prototype.add = function(data){
	var node = new Node(data);
	walker = this.head;
	var currentNode = this.head;
	if(!currentNode){
		this.head = node;
		return node;
	}
	traverse(walker, node);
	// console.log(walker)
}
function traverse(pointer, node){
	// console.log(pointer)
	console.log(node)
	if(pointer.data.charCodeAt(0) < node.data.charCodeAt(0) ){
		console.log("=====")
		if(pointer.right == null){
			pointer.right = node;
		}else{
			console.log(pointer)
			console.log(pointer.right)
			traverse(pointer.right, walker)
		}
	}else{
		if(pointer.left == null)
			pointer.left = node;
	}
	//console.log(walker)
}
// console.log( 'A'.charCodeAt(0) )
// console.log( 'B'.charCodeAt(0) )
var tree = new Tree();

tree.add('C');
tree.add('D');
tree.add('A');
tree.add('E');

console.log(tree);