# C++ 2 Лекция

## Методы
А зачем? Функция внутри структуры.
```
struct My {
    int x;
} a, b;

int myabs(My z) {
    return abs(z.x);
}
```
Неэфективно. Структура передается по значению. Может занять много памяти

Попробуем переписать на лад **C++** с помощью ссылок:
```
int myabs(const My& z) {
    return abs(z.x);
}
```
Однако можно заметить, что функция сильно связана со структурой. Тогда сделаем **метод**:
```
struct My {
    int x;

    int myabs() {
        return abs(x);
    }
} a, b;
```

Обращение к методу через точку `my_object.pole`.

Основная фича метода, это то, что он имеет доступ ко всем полям структуры, в которой он описан.
Но как тогда методу понять с каким объектом структуры он работает? **Неявный аргумент-указатель на объект**:

```
struct My {
    int x;

    int myabs(My *this) {
        return abs(x);
    }
} a, b;
```
> Есть маленькое соглашение называть поля структуры через префикс "`m_`".

Ещё важно отметить, что **неявный аргумент-указатель на объект** не является константным. Поэтому мы не можем вызвать метод от `const My a`. Поэтому придумали вот такое решение:
```
struct My {
    int x;

    int myabs() const {
        return abs(x);
    }
} a, b;
```
Равносильно:
```
struct My {
    int x;

    int myabs(const My* this) {
        return abs(x);
    }
} a, b;
```
> Указатель на константу совместим с указателем на не константу. Поэтому можно вызывать методы `<type> name() const {}` для неконстантых объектов.

Внутри структуры можно также сделать **перегруженные методы**:
```
struct My {
    int x;
    int myabs(); // prototype
    int myabs(int z) const; // prototype
} a, b;
```
И не очень хорошо писать реализацию методов в `.h` файлах (*На самом деле у меня просто не собирается код из-за этого в VS C++*). Поэтому создают одноименные `.cpp` файлы в которых мы прописываем реализацию:
```
// .h

struct My {
    int x;
    int myabs(int z) const ; // prototype
} a, b;
```
```
// .cpp

int My::myabs() const {
    return abs(x);
}
```
> Почитайте про `inline` в **C** и **C++**, так как все методы неявно идут с ним. Не хочется писать про это, так как мы просто случайно её затронули, а Скаков поплыл)

## Static
`static `означает, что поле или метод ведут себя как глобальные объекты, но видно их внутри структуры.
```
#include <iostream>

struct My {
    int x;

    int myabs(int z) const; // prototype

    static int y;
};
```
```
int My::myabs(int z) const {
    return abs(x + z);
}

int My::y = 0;
```

## Перегрузка операторов
(ноут разряжается писать не могу)