


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

    earnMoney(salary) {
        this.#money += salary;
    }

    payMoney(moneyAmount){
        this.#money -= moneyAmount;
    }

}

const nataliia = new Person("Nataliia", 27, 100)
const yurii = new Person( "Yurii", 34,450)
const denis = new Person("Denis", 29, 100)
const anastasiia = new Person( "Anastasiia", 25,100)


class Taxi {
    taxiName;
    fare;
    maxSits;
    freeSits;


    constructor(taxiName, fare, maxSits, freeSits,) {
        this.taxiName = taxiName;
        this.fare = 50;
        this.maxSits = maxSits;
        this.freeSits = [];
    }

    takePassenger(person) {
        person.payMoney(this.fare);
        this.freeSits.push(person);
        let isSuccess = false;
        if( this.freeSits.length <= this.maxSits ){
            isSuccess = true;
        }
        return isSuccess;
    }

}

const lux = new Taxi("Lux", 0, 3, 3)
lux.takePassenger(yurii);

console.log("yurii_money=" + yurii.money);




