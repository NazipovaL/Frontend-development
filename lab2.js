// Задание 1
// 1) Реализовать метод, возвращающий медианное значение, получаемое из массива целых чисел
// 2) Реализовать метод, возвращающий количество ненулевых значений в матрице целых чисел в 
// заданном отрезке
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var list = [10, 20, 30];
function FindMedian(someList) {
    if (someList.length % 2)
        return someList[Math.floor(someList.length / 2)];
    else
        return (0.5) * (someList[someList.length / 2] + someList[someList.length / 2 - 1]);
}
var matrix = [
    [0, 20, 30],
    [10, 0, 30],
    [10, 20, 0]
];
function FindNonzerosCount(someList) {
    var c = 0;
    for (var _i = 0, someList_1 = someList; _i < someList_1.length; _i++) {
        var row = someList_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var element = row_1[_a];
            if (element)
                c++;
        }
    }
    return c;
}
console.log(FindNonzerosCount(matrix));
// Задание 2
// 1) Создайте кортеж, который может содержать только 2 числовых и 1 строковое значения 
// (порядок следования: число, строка, число). 
// 2) Реализуйте метод, возвращающий произведение числовых значений
var nsn;
function mulpNN(nsn) {
    return nsn[0] * nsn[2];
}
mulpNN([5, '7', 5]);
// Задание 3
// 1) Создайте тип перечисление для типов витаминов (A, B3, B6, B12, E и т.д.). 
// 2) Выведите какой-либо тип витамина в консоль.
var Vitamins;
(function (Vitamins) {
    Vitamins["A"] = "A";
    Vitamins["\u04121"] = "B1";
    Vitamins["\u04122"] = "B2";
    Vitamins["\u04126"] = "B6";
    Vitamins["\u041212"] = "B13";
    Vitamins["C"] = "C";
    Vitamins["E"] = "E";
    Vitamins["D"] = "D";
    Vitamins["K"] = "K";
})(Vitamins || (Vitamins = {}));
;
console.log(Vitamins.В12);
// Задание 4
// 1) Вставьте следующий код в ваш проект:
// 2) Реализуйте метод, который будет выводить информацию в консоль о создаваемом 
// объекте типа Cat или Dog, применяя обобщенный тип, ограниченный типом Pet.
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return 'No speak. I am fish!';
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'AngryHunter';
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return 'Yaw-Gaw!';
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return 'Miyau!';
    };
    return Cat;
}(Pet));
function WhoIsIt(somePet) {
    return somePet;
}
var Sharik = new Dog();
console.log(WhoIsIt(Sharik).speak());
// Задание 5
// 1) Создайте тип с применением перечисления из 3го задания (для использования его в 
// качестве типа поля, для некоторых случаев возможно его использование при реализации 
// массива). 
// 2) Добавьте собственные поля стандартных типов, корректно характеризующие ту или 
// иную предметную область, совпадающую с вашим типом перечисления. 
// 3) Создайте объект на основе вашего типа и выведите его в консоль в формате JSON
var fruit = /** @class */ (function () {
    function fruit() {
    }
    return fruit;
}());
var durian = {
    name: 'дуриан',
    taste: 'фу',
    vitamins: [Vitamins.A, Vitamins.В1, Vitamins.В2, Vitamins.В12]
};
console.log(JSON.stringify(durian));
