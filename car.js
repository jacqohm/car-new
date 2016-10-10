
var Car = function (color, convertible) {
  this.color = color
  this.speed = 0
  this.convertible = convertible
}
// this.acelerate = acelerate
// this.decelerate = decelerate

Car.prototype.decelerate = function (num) {
  this.speed -= num
}

module.exports = Car
