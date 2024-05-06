import Account from "./account";

describe("Account unit tests", () => {
  it("should return account with a balance of 100", () => {
    const account = new Account();
    expect(account.getBalance()).toEqual(100);
  })

  it("should return account with decreaseBalance", () => {
    const account = new Account();
    account.decreaseBalance(50);
    expect(account.getBalance()).toEqual(50);
  })

  it("should return account with increaseBalance", () => {
    const account = new Account();
    account.increaseBalance(50);
    expect(account.getBalance()).toEqual(150);
  })
})
