"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entity_abstract_1 = __importDefault(require("../../@shared/entity/entity.abstract"));
const account_1 = __importDefault(require("../../account/entity/account"));
class User extends entity_abstract_1.default {
    constructor(id, username, password) {
        super();
        this.pattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
        this._id = id;
        this.username = username;
        this.password = password;
        this.account = new account_1.default();
        this.validate();
    }
    validate() {
        if (this.username.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
        if (this.password.length < 3) {
            throw new Error('Password must be at least 3 characters long');
        }
        if (!this.pattern.test(this.password)) {
            throw new Error('Password must contain at least 1 uppercase letter and 1 number');
        }
    }
    getAccount() {
        return this.account;
    }
}
exports.default = User;
