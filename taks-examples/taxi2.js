const utils = require("../utils");

class Person {
    #name;
    #age;
    #money;
    #salary;

    static createdPersonCount = 0;

    constructor(name, age, money, salary) {
        this.#name = name;
        this.#age = age;
        this.#money = money;
        this.#salary = salary;

        Person.createdPersonCount++;

    }

    set salary(salaryToGet) {
        this.#salary = salaryToGet;
    }

    get salary() {
        return this.#salary;
    }

    get money(){
        return this.#money;
    }

    earnMoney(bonusSalary) {
        this.#money += bonusSalary;
    }

    receiveSalary(){
        this.#money += this.#salary;
    }

}

const nataliia = new Person("Nataliia", 27, 0)
const yurii = new Person( "Yurii", 34,0)

yurii.earnMoney(100);
yurii.earnMoney(50);

// Manager set for Yurii 10 000 as monthlySalary
yurii.salary = 10000;
yurii.receiveSalary()
yurii.salary = 50;
yurii.receiveSalary()

console.log("yurii_money=" + yurii.money);
console.log("yurii_salary=" + yurii.salary);
console.log("persons=" + Person.createdPersonCount);
















