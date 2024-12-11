// ЗАДАНИЕ 1
//  1) Реализуйте интерфейс Владелец (Owner) со следующими свойствами: Фамилия, Имя, Отчеств,Дата рождения, Тип 
// документа (использовать отдельный тип перечисления), Серия документа, Номер документа, Метод, выводящий в консоль 
// все выше перечисленные сведения о владельце
//  2)  Реализуйте интерфейс Транспортное средство (Vehicle) со следующими свойствами и определениями методов:, 
// Марка, Модель, Год выпуска, VIN-номер, Регистрационный номер, Сведения о владельце , Метод, выводящий в консоль 
// сведения о транспортном средстве без сведений о владельце
//  3) Создайте класс, реализующий интерфейс Транспортное средство.
//  4) Создайте класс, реализующий интерфейс Владелец.
var documentType;
(function (documentType) {
    documentType[documentType["Passport"] = 0] = "Passport";
})(documentType || (documentType = {}));
var Owner2 = /** @class */ (function () {
    function Owner2() {
    }
    Owner2.prototype.printInfo = function () {
        console.log(JSON.stringify(this));
    };
    Object.defineProperty(Owner2.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (surname) {
            this._surname = surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner2.prototype, "secondName", {
        get: function () {
            return this._secondName;
        },
        set: function (secondName) {
            this._secondName = secondName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner2.prototype, "bDay", {
        get: function () {
            return this._bDay;
        },
        set: function (bDay) {
            this._bDay = bDay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner2.prototype, "document", {
        get: function () {
            return this._document;
        },
        set: function (document) {
            this._document = document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner2.prototype, "docSeries", {
        get: function () {
            return this._docSeries;
        },
        set: function (docSeries) {
            this._docSeries = docSeries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner2.prototype, "docNumber", {
        get: function () {
            return this._docNumber;
        },
        set: function (docNumber) {
            this._docNumber = docNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Owner2;
}());
var Vehicle2 = /** @class */ (function () {
    function Vehicle2() {
    }
    Vehicle2.prototype.printInfo = function () {
        console.log(this.brand);
        console.log(this.model);
        console.log(this.yearOfIssue);
        console.log(this.vin);
        console.log(this.regNum);
    };
    Object.defineProperty(Vehicle2.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (brand) {
            this._brand = brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle2.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle2.prototype, "yearOfIssue", {
        get: function () {
            return this._yearOfIssue;
        },
        set: function (yearOfIssue) {
            this._yearOfIssue = yearOfIssue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle2.prototype, "vin", {
        get: function () {
            return this._vin;
        },
        set: function (vin) {
            this._vin = vin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle2.prototype, "regNum", {
        get: function () {
            return this._regNum;
        },
        set: function (regNum) {
            this._regNum = regNum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle2.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (owner) {
            this._owner = owner;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle2;
}());
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
var bodyTypes;
(function (bodyTypes) {
    bodyTypes["Sedan"] = "Sedan";
    bodyTypes["Coupe"] = "Coupe";
    bodyTypes["Hatchback"] = "Hatchback";
})(bodyTypes || (bodyTypes = {}));
;
var classes;
(function (classes) {
    classes["A"] = "A";
    classes["B"] = "B";
    classes["C"] = "C";
    classes["D"] = "D";
    classes["E"] = "E";
    classes["F"] = "F";
    classes["S"] = "S";
    classes["M"] = "M";
})(classes || (classes = {}));
;
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.printInfo = function () {
        console.log(this.class);
        console.log(this.body);
        console.log(this.brand);
        console.log(this.model);
        console.log(this.yearOfIssue);
        console.log(this.vin);
        console.log(this.regNum);
    };
    Object.defineProperty(Car2.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (brand) {
            this._brand = brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "yearOfIssue", {
        get: function () {
            return this._yearOfIssue;
        },
        set: function (yearOfIssue) {
            this._yearOfIssue = yearOfIssue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "vin", {
        get: function () {
            return this._vin;
        },
        set: function (vin) {
            this._vin = vin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "regNum", {
        get: function () {
            return this._regNum;
        },
        set: function (regNum) {
            this._regNum = regNum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (owner) {
            this._owner = owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "body", {
        get: function () {
            return this._body;
        },
        set: function (body) {
            this._body = body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (class1) {
            this._class = class1;
        },
        enumerable: false,
        configurable: true
    });
    return Car2;
}());
var Motorbike2 = /** @class */ (function () {
    function Motorbike2() {
    }
    Motorbike2.prototype.printInfo = function () {
        console.log(this.frameType);
        console.log(this.forSport);
        console.log(this.brand);
        console.log(this.model);
        console.log(this.yearOfIssue);
        console.log(this.vin);
        console.log(this.regNum);
    };
    Object.defineProperty(Motorbike2.prototype, "frameType", {
        get: function () {
            return this._frameType;
        },
        set: function (frameType) {
            this._frameType = frameType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike2.prototype, "forSport", {
        get: function () {
            return this._forSport;
        },
        set: function (forSport) {
            this._forSport = forSport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike2.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (brand) {
            this._brand = brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike2.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike2.prototype, "yearOfIssue", {
        get: function () {
            return this._yearOfIssue;
        },
        set: function (yearOfIssue) {
            this._yearOfIssue = yearOfIssue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike2.prototype, "vin", {
        get: function () {
            return this._vin;
        },
        set: function (vin) {
            this._vin = vin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike2.prototype, "regNum", {
        get: function () {
            return this._regNum;
        },
        set: function (regNum) {
            this._regNum = regNum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike2.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (owner) {
            this._owner = owner;
        },
        enumerable: false,
        configurable: true
    });
    return Motorbike2;
}());
var VehicleStorage = /** @class */ (function () {
    function VehicleStorage() {
    }
    VehicleStorage.prototype.take = function () {
        return this._transports;
    };
    ;
    return VehicleStorage;
}());
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
