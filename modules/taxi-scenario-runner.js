import {Person} from './person.class.js';
import {Taxi} from './class.js';

const yurii = new Person("Yurii", 34, 500)
const nataliia = new Person("Nataliia", 27, 400)
const denis = new Person("Denis", 29, 0)
const anastasiia = new Person("Anastasiia", 25, 300)


const lux = new Taxi("Lux", 0, 3)

console.log(lux.takePassenger(yurii));
console.log(lux.takePassenger(nataliia));
console.log(lux.takePassenger(denis));
console.log(lux.takePassenger(anastasiia));

// console.log("yurii_money=" + yurii.money);
// console.log("nataliia_money=" + nataliia.money);
// console.log("denis_money=" + denis.money);
// console.log("anastasiia_money=" + anastasiia.money);








/*
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


class Taxi {
    taxiName;
    fare;
    maxSits;
    sits;

    constructor(taxiName, fare, maxSits, sits,) {
        this.taxiName = taxiName;
        this.fare = 50;
        this.maxSits = 3;
        this.sits = [];
    }

    takePassenger(person) {
        let isSuccess = false;
        if (person.money < this.fare) {
            return isSuccess;
        }
        for (let i = 0; i <= this.sits.length; i += 1) {
            if (i < this.maxSits) {
                this.sits.push(person);
                this.maxSits -= 1;
                person.payMoney(this.fare);

                isSuccess = true;
                return isSuccess;
            }
        }
        return isSuccess;
    }

}
*/

