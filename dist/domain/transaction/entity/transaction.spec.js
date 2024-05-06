"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("../../account/entity/account"));
const transaction_1 = __importDefault(require("./transaction"));
describe("Transaction unit tests", () => {
    it("should return transaction with debited and credited accounts", () => {
        const transaction = new transaction_1.default();
        const debitedAccount = new account_1.default();
        const creditedAccount = new account_1.default();
        const initialDebitedBalance = debitedAccount.getBalance();
        const initialCreditedBalance = creditedAccount.getBalance();
        const transferValue = 50;
        transaction.transfer(debitedAccount, creditedAccount, transferValue);
        // Checar se as contas corretas foram debitadas e creditadas
        expect(transaction.getDebitedAccount()).toEqual(debitedAccount);
        expect(transaction.getCreditedAccount()).toEqual(creditedAccount);
        // Checar se o saldo das contas está correto após a transferência
        expect(debitedAccount.getBalance()).toBe(initialDebitedBalance - transferValue);
        expect(creditedAccount.getBalance()).toBe(initialCreditedBalance + transferValue);
        // Checar se a data de criação está correta (aproximadamente)
        const now = new Date();
        expect(transaction.getCreatedAt()).toBeInstanceOf(Date);
        expect(Math.abs(transaction.getCreatedAt().getTime() - now.getTime())).toBeLessThan(1000); // Dentro de 1 segundo
    });
});
