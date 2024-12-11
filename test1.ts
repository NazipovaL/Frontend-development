// Задание 2
// Реализуйте стрелочную функцию, возвращающую произведение 2х чисел, передаваемых в качестве параметров.

const num3: number = 10;
const num4: number = 20;

const mulp = (n1: number, n2: number): number => {
  return n1 * n2;
}

console.log(mulp(num3, num4));

// Задание 3
// Выполните создание объектов – констант (const) и переменных (let) с указанием различных встроенных и специальных типов. Название 
// переменной может быть любым. Количество объектов не более 8.

let num1: number = 6;
const num2: number = 6;
let bin_num: number = 0b101110;
let word: string = `словечко ${num1}`;
let something: any;

enum ColorWool {RED, BLACK};

interface cats {
  name: string,
  color: ColorWool
}

let сat = {
  name: 'Барсик', 
  color: ColorWool.RED
}

// Задание 4
// Скопируйте и выполните преобразование объекта data к формату JSON в виде строки. 
// Результат преобразования следует вывести в консоль.

interface Entity {
  id: number;
}

interface ToJsonStringify extends Entity {
  e1?: number;
  e2?: string;
}

const data: ToJsonStringify = {
  id: 4,
  e1: 5,
  e2: 'строка',
}

let in_JSON_format:string = JSON.stringify(data);
console.log(in_JSON_format);