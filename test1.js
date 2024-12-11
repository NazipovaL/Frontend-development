// Задание 2
// Реализуйте стрелочную функцию, возвращающую произведение 2х чисел, передаваемых в качестве параметров.
var num3 = 10;
var num4 = 20;
var mulp = function (n1, n2) {
    return n1 * n2;
};
console.log(mulp(num3, num4));
// Задание 3
// Выполните создание объектов – констант (const) и переменных (let) с указанием различных встроенных и специальных типов. Название 
// переменной может быть любым. Количество объектов не более 8.
var num1 = 6;
var num2 = 6;
var bin_num = 46;
var word = "\u0441\u043B\u043E\u0432\u0435\u0447\u043A\u043E ".concat(num1);
var something;
var Color_wool;
(function (Color_wool) {
    Color_wool[Color_wool["RED"] = 0] = "RED";
    Color_wool[Color_wool["BLACK"] = 1] = "BLACK";
})(Color_wool || (Color_wool = {}));
;
var сat = {
    name: "Барсик",
    color: Color_wool.RED
};
var data = {
    id: 4,
    e1: null,
    e2: null,
};
var in_JSON_format = JSON.stringify(data);
console.log(in_JSON_format);
