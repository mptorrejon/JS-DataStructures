function Queue(){
	this._size = 0;
	this._oldestIndex = 1;
	this._storage = {};
}
Queue.prototype.push = function(val){
	var size = ++this._size;
	this._storage[size] = val;
}
Queue.prototype.pop = function(){
	var oldIndex = this._oldestIndex;
	var deleteData = this._storage[oldIndex];
	delete this._storage[oldIndex];
	++this._oldestIndex;
	--this._size;
	return deleteData;
}

var queue = new Queue();
queue.push('a');
queue.push('b');
queue.push('c');
queue.push('d');

var del = queue.pop();
console.log(del);

var del = queue.pop();
console.log(del);

console.log(queue._storage);
console.log(queue._size);
