let points = (function() {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.getX = function() {return this.x }
  Point.prototype.getY = function() {return this.y }
  Point.prototype.setX = function(value) { this.x = value }
  Point.prototype.setY = function(value) { this.y = value }
  
  function ShiftedPoint(x, y, dx, dy) {
    Point.call(this, x, y)
    this.dx = dx;
    this.dy = dy;
  }
  ShiftedPoint.prototype = Object.create(Point.prototype);
  ShiftedPoint.prototype.constructor = ShiftedPoint;
  ShiftedPoint.prototype.getX = function() { return this.x + this.dx }
  ShiftedPoint.prototype.getY = function() { return this.y + this.dy }
  
  return {Point: Point, ShiftedPoint}
})();

let p = new points.Point(10, 20);

dump(p);

new points.ShiftedPoint(10, 20, 1, 2)

let Point = points.Point; // присваиваем объект функции

points = (function() {
  let name = "hello";
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.getX = function() {return this.x }
  Point.prototype.setX = function(value) { this.x = value }
  Point.prototype.getY = function() {return this.y }
  Point.prototype.setY = function(value) { this.y = value }
  Point.prototype.getName = function() {return name }
  Point.prototype.setName = function(value) { name = value }
  
  function ShiftedPoint(x, y, dx, dy) {
    Point.call(this, x, y)
    this.dx = dx;
    this.dy = dy;
  }
  ShiftedPoint.prototype = Object.create(Point.prototype);
  ShiftedPoint.prototype.constructor = ShiftedPoint;
  ShiftedPoint.prototype.getX = function() { return this.x + this.dx }
  ShiftedPoint.prototype.getY = function() { return this.y + this.dy }
  
  return {Point: Point, ShiftedPoint}
})();

m = new points.Point(1, 3);

points = (function() {
  let name = "hello";
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.getX = function() {return this.x }
  Point.prototype.setX = function(value) { this.x = value }
  Point.prototype.getY = function() {return this.y }
  Point.prototype.setY = function(value) { this.y = value }
  Point.prototype.getName = function() {return name }
  Point.prototype.setName = function(value) { name = value }
  
  function ShiftedPoint(x, y, dx, dy) {
    Point.call(this, x, y)
    this.dx = dx;
    this.dy = dy;
  }
  ShiftedPoint.prototype = Object.create(Point.prototype);
  ShiftedPoint.prototype.constructor = ShiftedPoint;
  ShiftedPoint.prototype.getX = function() { return this.x + this.dx }
  ShiftedPoint.prototype.getY = function() { return this.y + this.dy }
  
  function abs(point) {
    return Math.sqrt(point.getX() * point.getX() + point.getY() * point.getY())
  }

  return {Point, ShiftedPoint, abs} // Будет ли abs работать для SP
})();

let ShiftedPoint = points.ShiftedPoint; // добавим для удобства

console.log(new ShiftedPoint(2, 3, 1, 1));

//=== Обработка ошибок ===

try { 
  1();
} catch (e) {
  console.log(e); // эквивалентно e.toString()
  console.log(e.name);
  console.log(e instanceof Error)
  console.log(e instanceof TypeError)
}
console.log("Проверим, что зашёл сюда")