"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const uuid_1 = require("uuid");
describe("User unit tests", () => {
    it("should throw error when username least 3 characters long", () => {
        expect(() => {
            let user = new user_1.default((0, uuid_1.v4)(), "gu", "12345Joge@");
        }).toThrowError("Username must be at least 3 characters long");
    });
    it("should throw error when password least 3 characters long", () => {
        expect(() => {
            let user = new user_1.default((0, uuid_1.v4)(), "joge", "32");
        }).toThrowError("Password must be at least 3 characters long");
    });
    it("should throw error when password least 1 uppercase letter and 1 number", () => {
        expect(() => {
            let user = new user_1.default((0, uuid_1.v4)(), "joge", "323333333");
        }).toThrowError("Password must contain at least 1 uppercase letter and 1 number");
    });
    it("should return account with a balance of 100", () => {
        const user = new user_1.default((0, uuid_1.v4)(), "joge", "12345Joge@");
        const account = user.getAccount();
        expect(account.getBalance()).toEqual(100);
    });
});
