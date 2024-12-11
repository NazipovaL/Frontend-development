// Задание 1
// 1) Реализовать метод, возвращающий медианное значение, получаемое из массива целых чисел
// 2) Реализовать метод, возвращающий количество ненулевых значений в матрице целых чисел в 
// заданном отрезке

let list: number[] = [10, 20, 30];

function FindMedian(someList: number[]): number {
  if (someList.length % 2)
    return someList[Math.floor(someList.length / 2)];
  else
    return (0.5) * (someList[someList.length / 2] + someList[someList.length / 2 - 1]);
}

let matrix: number[][] = [
  [0, 20, 30],
  [10, 0, 30],
  [10, 20, 0]
];

function FindNonzerosCount(someList: number[][]): number {
  let c: number = 0;

  for (const row of someList) 
    for (const element of row) 
      if (element) 
        c++

  return c;
}

console.log(FindNonzerosCount(matrix));


// Задание 2
// 1) Создайте кортеж, который может содержать только 2 числовых и 1 строковое значения 
// (порядок следования: число, строка, число). 
// 2) Реализуйте метод, возвращающий произведение числовых значений

let nsn: [number, string, number];

function mulpNN(nsn: [number, string, number]) {
  return nsn[0] * nsn[2];
}

mulpNN([5, '7', 5]);

// Задание 3
// 1) Создайте тип перечисление для типов витаминов (A, B3, B6, B12, E и т.д.). 
// 2) Выведите какой-либо тип витамина в консоль.

enum Vitamins { A = 'A', В1 = 'B1', В2 = 'B2', В6 = 'B6', В12 = 'B13', C = 'C', E = 'E', D = 'D', K = 'K' };

console.log(Vitamins.В12);

// Задание 4
// 1) Вставьте следующий код в ваш проект:
// 2) Реализуйте метод, который будет выводить информацию в консоль о создаваемом 
// объекте типа Cat или Dog, применяя обобщенный тип, ограниченный типом Pet.

class Pet {
  name: string = 'Some pet'
  age: number = -1
  speak() {
    return 'No speak. I am fish!';
  }
}

class Dog extends Pet {
  label = 'AngryHunter';
  age = 8;
  speak() {
    return 'Yaw-Gaw!';
  }
}

class Cat extends Pet {
  name = 'Barsik';
  age = 2;
  speak() {
    return 'Miyau!';
  }
}

function WhoIsIt<T extends Pet>(somePet: T): T {
  return somePet;
}

let Sharik = new Dog();
console.log(WhoIsIt(Sharik).speak());


// Задание 5
// 1) Создайте тип с применением перечисления из 3го задания (для использования его в 
// качестве типа поля, для некоторых случаев возможно его использование при реализации 
// массива). 
// 2) Добавьте собственные поля стандартных типов, корректно характеризующие ту или 
// иную предметную область, совпадающую с вашим типом перечисления. 
// 3) Создайте объект на основе вашего типа и выведите его в консоль в формате JSON

class fruit {
  name: string;
  taste: string;
  vitamins: Vitamins[];
}

let durian: fruit = {
  name: 'дуриан',
  taste: 'фу',
  vitamins: [Vitamins.A, Vitamins.В1, Vitamins.В2, Vitamins.В12]
}

console.log(JSON.stringify(durian))