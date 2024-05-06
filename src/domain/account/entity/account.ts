import Entity from "../../@shared/entity/entity.abstract";

export default class Account extends Entity{
    private balance: number;

    constructor() {
        super();
        this._id = this._id;
        this.balance = 100;
    }

    getBalance(): number {
        return this.balance;
    }

    decreaseBalance(value: number) {
        this.balance -= value;
    }

    increaseBalance(value: number) {
        this.balance += value;
    }
}
