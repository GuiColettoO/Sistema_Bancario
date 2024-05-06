import Entity from "../../@shared/entity/entity.abstract";
import Account from "../../account/entity/account";

export default class User extends Entity{
    private username: string;
    private password: string;
    private account: Account;

    pattern: RegExp = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    constructor(id: string, username: string, password: string) {
        super();
        this._id = id;
        this.username = username;
        this.password = password;
        this.account = new Account();
        this.validate();
    }

    validate() {
        if (this.username.length === 0){
            throw new Error('Username is required');
        }
        if (this.password.length < 3){
            throw new Error('Password must be at least 3 characters long');
        }
        if (!this.pattern.test(this.password)){
            throw new Error('Password must contain at least 1 uppercase letter and 1 number');
        }
    }

    getAccount() :Account {
        return this.account;
    }
}


