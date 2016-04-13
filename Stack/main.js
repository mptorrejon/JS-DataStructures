/*
	Constructor 
*/
function Stack(){
	this._size = 0;
	this._storage = {};
}
 /*
	Adds new value
 */
Stack.prototype.push = function(val){
	var size = ++this._size;
	this._storage[size] = val;
}
/*
	Removes latest value added
*/
Stack.prototype.pop = function(){
	var deletedValue = '';
	deletedValue = this._storage[this._size]
	delete this._storage[this._size];
	--this._size;
	return deletedValue;
}
var stack = new Stack();
// stack.push('a');
// stack.push('b');
// stack.push('c');
// stack.push('d');
// var pop = stack.pop();
