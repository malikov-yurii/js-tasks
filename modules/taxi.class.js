export class Taxi {
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


