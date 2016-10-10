
var Car = function (color, convertible) {
  this.color = color
  this.speed = 0
  this.convertible = convertible
}

Car.prototype.accelerate = function () {
  this.speed += num
};

Car.prototype.setColor = function () {
  this.color += newColor
};

Car.prototype.decelerate = function (num) {
  this.speed -= num
}

module.exports = Car
