"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entity_abstract_1 = __importDefault(require("../../@shared/entity/entity.abstract"));
class Transaction extends entity_abstract_1.default {
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
    transfer(debitedAccount, creditedAccount, value) {
        this.debitedAccount = debitedAccount;
        this.creditedAccount = creditedAccount;
        this.value = value;
        this.createdAt = new Date();
        this.validate();
        debitedAccount.decreaseBalance(value);
        creditedAccount.increaseBalance(value);
    }
}
exports.default = Transaction;
