// ЗАДАНИЕ 1
//  1) Реализуйте интерфейс Владелец (Owner) со следующими свойствами: Фамилия, Имя, Отчеств,Дата рождения, Тип 
// документа (использовать отдельный тип перечисления), Серия документа, Номер документа, Метод, выводящий в консоль 
// все выше перечисленные сведения о владельце
//  2)  Реализуйте интерфейс Транспортное средство (Vehicle) со следующими свойствами и определениями методов:, 
// Марка, Модель, Год выпуска, VIN-номер, Регистрационный номер, Сведения о владельце , Метод, выводящий в консоль 
// сведения о транспортном средстве без сведений о владельце
//  3) Создайте класс, реализующий интерфейс Транспортное средство.
//  4) Создайте класс, реализующий интерфейс Владелец.

enum documentType { Passport }

interface Owner {
  surname: string;
  name: string;
  secondName: string;
  bDay: number;
  document: documentType;
  docSeries: number;
  docNumber: number;
  printInfo(): void;
}

interface Vehicle {
  brand: string;
  model: string;
  yearOfIssue: number
  vin: number;
  regNum: number;
  owner: Owner;
  printInfo(): void;
}

class Owner2 implements Owner {
  private _surname: string;
  private _name: string;
  private _secondName: string;
  private _bDay: number;
  private _document: documentType;
  private _docSeries: number;
  private _docNumber: number;

  printInfo(): void {
    console.log(JSON.stringify(this));
  }

  get surname() {
    return this._surname;
  }
  set surname(surname: string) {
    this._surname = surname;
  }

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get secondName() {
    return this._secondName;
  }
  set secondName(secondName: string) {
    this._secondName = secondName;
  }

  get bDay() {
    return this._bDay;
  }
  set bDay(bDay: number) {
    this._bDay = bDay;
  }

  get document() {
    return this._document;
  }
  set document(document: documentType) {
    this._document = document;
  }

  get docSeries() {
    return this._docSeries;
  }
  set docSeries(docSeries: number) {
    this._docSeries = docSeries;
  }

  get docNumber() {
    return this._docNumber;
  }
  set docNumber(docNumber: number) {
    this._docNumber = docNumber;
  }
}

class Vehicle2 implements Vehicle {
  private _brand: string;
  private _model: string;
  private _yearOfIssue: number;
  private _vin: number;
  private _regNum: number;
  private _owner: Owner;

  printInfo(): void {
    console.log(this.brand);
    console.log(this.model);
    console.log(this.yearOfIssue);
    console.log(this.vin);
    console.log(this.regNum);
  }

  get brand() {
    return this._brand;
  }

  set brand(brand: string) {
    this._brand = brand;
  }

  get model() {
    return this._model;
  }

  set model(model: string) {
    this._model = model;
  }

  get yearOfIssue() {
    return this._yearOfIssue;
  }

  set yearOfIssue(yearOfIssue: number) {
    this._yearOfIssue = yearOfIssue;
  }

  get vin() {
    return this._vin;
  }

  set vin(vin: number) {
    this._vin = vin;
  }

  get regNum() {
    return this._regNum;
  }

  set regNum(regNum: number) {
    this._regNum = regNum;
  }

  get owner() {
    return this._owner;
  }

  set owner(owner: Owner) {
    this._owner = owner;
  }

}

// 2 ЗАДАНИЕ

// 1) Создайте интерфейс Автомобиль (Car), наследующий интерфейс Транспортное средство с 
// свойствами и определениями методов: Тип кузова (как перечисление), Класс автомобиля 
// (как перечисление)
// 2) Создайте класс, реализующий интерфейс Автомобиль. Метод, выводящий в консоль 
// сведения о транспортном средстве без сведений о владельце следует модифицировать 
// для вывода дополнительных полей класса Автомобиль.
// 3) Создайте интерфейс Мотоцикл (Motorbike), наследующий интерфейс Транспортное средство 
// с свойствами и определениями методов: Тип рамы (строка), Для спорта (булево значение)
// 4) Создайте класс, реализующий интерфейс Мотоцикл. Метод, выводящий в  консоль сведения 
// о транспортном средстве без сведений о владельце следует модифицировать для вывода 
// дополнительных полей класса Мотоцикл.

enum bodyTypes { Sedan = 'Sedan', Coupe = 'Coupe', Hatchback = 'Hatchback' };
enum classes { A = 'A', B = 'B', C = 'C', D = 'D', E = 'E', F = 'F', S = 'S', M = 'M' };

interface Car extends Vehicle {
  body: bodyTypes;
  class: classes;
}

class Car2 implements Car {
  private _brand: string;
  private _model: string;
  private _yearOfIssue: number;
  private _vin: number;
  private _regNum: number;
  private _owner: Owner;
  private _body: bodyTypes;
  private _class: classes;
  
  printInfo(): void {
    console.log(this.class);
    console.log(this.body);
    console.log(this.brand);
    console.log(this.model);
    console.log(this.yearOfIssue);
    console.log(this.vin);
    console.log(this.regNum);
  }

  get brand() {
    return this._brand;
  }
  set brand(brand: string) {
    this._brand = brand;
  }

  get model() {
    return this._model;
  }
  set model(model: string) {
    this._model = model;
  }

  get yearOfIssue() {
    return this._yearOfIssue;
  }
  set yearOfIssue(yearOfIssue: number) {
    this._yearOfIssue = yearOfIssue;
  }

  get vin() {
    return this._vin;
  }
  set vin(vin: number) {
    this._vin = vin;
  }

  get regNum() {
    return this._regNum;
  }
  set regNum(regNum: number) {
    this._regNum = regNum;
  }

  get owner() {
    return this._owner;
  }
  set owner(owner: Owner) {
    this._owner = owner;
  }

  
  get body() {
    return this._body;
  }
  set body(body: bodyTypes) {
    this._body = body;
  }

  get class() {
    return this._class;
  }
  set class(class1: classes) {
    this._class = class1;
  }
}

interface Motorbike extends Vehicle {
  frameType: string;
  forSport: boolean;
}

class Motorbike2 implements Motorbike {
  private _frameType: string;
  private _forSport: boolean;
  private _brand: string;
  private _model: string;
  private _yearOfIssue: number;
  private _vin: number;
  private _regNum: number;
  private _owner: Owner;

  printInfo(): void {
    console.log(this.frameType);
    console.log(this.forSport);
    console.log(this.brand);
    console.log(this.model);
    console.log(this.yearOfIssue);
    console.log(this.vin);
    console.log(this.regNum);
  }

  get frameType() {
    return this._frameType;
  }
  set frameType(frameType: string) {
    this._frameType = frameType;
  }

  get forSport() {
    return this._forSport;
  }
  set forSport(forSport: boolean) {
    this._forSport = forSport;
  }

  get brand() {
    return this._brand;
  }
  set brand(brand: string) {
    this._brand = brand;
  }

  get model() {
    return this._model;
  }
  set model(model: string) {
    this._model = model;
  }

  get yearOfIssue() {
    return this._yearOfIssue;
  }
  set yearOfIssue(yearOfIssue: number) {
    this._yearOfIssue = yearOfIssue;
  }

  get vin() {
    return this._vin;
  }
  set vin(vin: number) {
    this._vin = vin;
  }

  get regNum() {
    return this._regNum;
  }
  set regNum(regNum: number) {
    this._regNum = regNum;
  }

  get owner() {
    return this._owner;
  }
  set owner(owner: Owner) {
    this._owner = owner;
  }
}


// 3 задание
// 1) Реализуйте интерфейс Хранилище (VehicleStorage) с обобщением типа T, ограниченное типом Транспортное средство. 
// Хранилище содержит следующие свойства и определения методов: Дата создания хранилища, Массив T хранящий 
// сведения о тех или иных типах Транспортных средств, Метод возвращающий все элементы массива типа Т.
// 2) Создайте класс, реализующий интерфейс Хранилище с аналогичным обобщением, как в интерфейсе.

interface VehicleStorage<T extends Vehicle> {
  creationDate: string;
  transports: T[];
  take(): T[];
}

class VehicleStorage<T> implements VehicleStorage<T> {
  private _creationDate: string;
  private _transports: T[];

  take(): T[] {
    return this._transports;
  };
}



// let vroomvroom: Motorbike2 = {
//   'frameType' : 'ku',
//   'forSport': false,
//   'brand': 'kuku',
//   'model': 'kukuku',
//   'yearOfIssue': 0,
//   'vin': 0,
//   'regNum': 0,
//   'owner': null,
//   printInfo(): void {
//     for (const key in this) {
//       console.log(this[key]);
//     }
//   }
// }