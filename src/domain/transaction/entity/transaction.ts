import Entity from "../../@shared/entity/entity.abstract";
import Account from "../../account/entity/account";

export default class Transaction extends Entity {
    private debitedAccount: Account;
    private creditedAccount: Account;
    private value: number;
    private createdAt: Date;

    constructor() {
        super();
    }

    getDebitedAccount() {
        return this.debitedAccount;
    }

    getCreditedAccount() {
        return this.creditedAccount;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    validate() {
        if (this.debitedAccount.id === this.creditedAccount.id) {
            throw new Error('Debited and credited accounts must be different');
        }
        if (this.value <= 0) {
            throw new Error('Value must be greater than 0');
        }
        const currentBalance = this.debitedAccount.getBalance();
        if (currentBalance < this.value) {
            throw new Error('Insufficient balance in debited account');
        }
    }

    transfer(debitedAccount: Account, creditedAccount: Account, value: number) {
        this.debitedAccount = debitedAccount;
        this.creditedAccount = creditedAccount;
        this.value = value;
        this.createdAt = new Date();

        this.validate();

        debitedAccount.decreaseBalance(value);
        creditedAccount.increaseBalance(value);
    }
}
