"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entity_abstract_1 = __importDefault(require("../../@shared/entity/entity.abstract"));
class Account extends entity_abstract_1.default {
    constructor() {
        super();
        this._id = this._id;
        this.balance = 100;
    }
    getBalance() {
        return this.balance;
    }
    decreaseBalance(value) {
        this.balance -= value;
    }
    increaseBalance(value) {
        this.balance += value;
    }
}
exports.default = Account;
