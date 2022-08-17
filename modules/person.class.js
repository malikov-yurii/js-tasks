export class Person {
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

    get money() {
        return this.#money;
    }

    earnMoney(salary) {
        this.#money += salary;
    }

    payMoney(moneyAmount) {
        this.#money -= moneyAmount;
    }

}
