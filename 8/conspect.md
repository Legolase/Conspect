# JavaScript. Разное

## Функция возвращающая определение
Функция может вернуть значение, которое будет определением некоторого объекта.

Например:
```
let f = (function() {
        function Point() {...}
        Point.prototype.<поле>
        ...
        return {Point: Point} // эквивалентно return {Point}
    }
)()

let p = new points.Point(10, 20);
```

В результате мы получили новую область видимости, которая позволяет создавать различные объекты не мешая их внутренней самоорганизации. 

Мы также можем сократить написание вызова функции-констрктора:
```
let Point = points.Point; // присваиваем объект функции
```
## Закрытая область видимости
Вполне можно так сделать:
```
let points = (function() {
        let name = "hello";
        ...
        Point.prototype.getName = function() {return name }
        Point.prototype.setName = function(value) { name = value }
    }
)();

new points.Point(10, 20).getName()
```

## Вспомогательные функции для объектов

Также можно определять функции, которые будут работать с нашими объектами, определённые внутри функции возвращающей определения:
```
points = (function() {
  function Point(x, y) {...}
  ...
  Point.prototype.setName = function(value) { name = value }
  
  function ShiftedPoint(x, y, dx, dy) {...}
  
  function abs(point) {
    return Math.sqrt(point.getX() * point.getX() + point.getY() * point.getY())
  }

  return {Point, ShiftedPoint, abs} // Будет ли abs работать для SP
})();

let ShiftedPoint = points.ShiftedPoint; // добавим для удобства

let p = new ShiftedPoint(1, 5, 10, 20);
console.log(abs(p));
```
Вывод: `27.313000567495326`

## Итог
Мы получили аналог пакетов, которые дают доступ только к тем полям, к которым мы указали доступ через `return {<поля/определения>}`

___
# Обработка ошибок (или "Во все тяжкие")

Начнём с простого. если мы вызовем функцию единицу `1()`, то естественно мы получим ошибку/исключение `TypeError`. Попробуем обработать его
```
try { // хотя бы try тут есть
    1() // источник исключения TypeError
} catch (e) {
    ...
}
```

У ошибок `e` есть очень полезные шутчки:
1. `e.name`
2. `e.message`
3. `e instanceof Error`