import Account from "../../account/entity/account";
import Transaction from "./transaction";

describe("Transaction unit tests", () => {
  it("should return transaction with debited and credited accounts", () => {
    const transaction = new Transaction();
    const debitedAccount = new Account();
    const creditedAccount = new Account();

    const initialDebitedBalance = debitedAccount.getBalance();
    const initialCreditedBalance = creditedAccount.getBalance();

    const transferValue = 50;
    transaction.transfer(debitedAccount, creditedAccount, transferValue);

    expect(transaction.getDebitedAccount()).toEqual(debitedAccount);
    expect(transaction.getCreditedAccount()).toEqual(creditedAccount);

    expect(debitedAccount.getBalance()).toBe(initialDebitedBalance - transferValue);
    expect(creditedAccount.getBalance()).toBe(initialCreditedBalance + transferValue);

    const now = new Date();
    expect(transaction.getCreatedAt()).toBeInstanceOf(Date);
    expect(Math.abs(transaction.getCreatedAt().getTime() - now.getTime())).toBeLessThan(1000); // Dentro de 1 segundo
  });
});
