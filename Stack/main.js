function Stack(){
	this._size = 0;
	this._storage = {};
}
Stack.prototype.push = function(data){
	var size = ++this._size;
	this._storage[size] = data;
};
Stack.prototype.pop = function(){
	var size = this._size, deletedData;
	deletedData = this._storage[size];
	delete this._storage[size];
	this._size --;
	return deletedData;
}
var stack = new Stack();
stack.push('a');
var test = stack.pop();

