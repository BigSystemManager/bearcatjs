var Car = function() {
	this.$id = "car";
}

Car.prototype.run = function() {
	console.log('run context car...');
	return 'car';
}

module.exports = Car;
// {
// 	id: "car",
// 	func: Car
// };