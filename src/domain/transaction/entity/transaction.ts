import Entity from "../../@shared/entity/entity.abstract";
import Account from "../../account/entity/account";

export default class Transaction extends Entity{
    private debitedAccount: Account;
    private creditedAccount: Account;
    private value: number;
    private createdAt: Date;

    constructor(){
        super();
    }

    validate(){
        if (this.debitedAccount.id === this.creditedAccount.id){
            throw new Error('Debited and credited accounts must be different');
        }
        if (this.value <= 0){
            throw new Error('Value must be greater than 0');
        }
    }

    debit(account: Account, value: number){
        
    }
}