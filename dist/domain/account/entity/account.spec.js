"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("./account"));
describe("Account unit tests", () => {
    it("should return account with a balance of 100", () => {
        const account = new account_1.default();
        expect(account.getBalance()).toEqual(100);
    });
    it("should return account with decreaseBalance", () => {
        const account = new account_1.default();
        account.decreaseBalance(50);
        expect(account.getBalance()).toEqual(50);
    });
    it("should return account with increaseBalance", () => {
        const account = new account_1.default();
        account.increaseBalance(50);
        expect(account.getBalance()).toEqual(150);
    });
});
