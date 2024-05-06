import User from "./user"
import { v4 as uuid } from "uuid";

describe("User unit tests", () => {
  it("should throw error when username least 3 characters long", () => {
    expect(() => {
      let user = new User(uuid(), "gu", "12345Joge@")
    }).toThrowError("Username must be at least 3 characters long");
  })

  it("should throw error when password least 3 characters long", () => {
    expect(() => {
      let user = new User(uuid(), "joge", "32")
    }).toThrowError("Password must be at least 3 characters long");
  })

  it("should throw error when password least 1 uppercase letter and 1 number", () => {
    expect(() => {
      let user = new User(uuid(), "joge", "323333333")
    }).toThrowError("Password must contain at least 1 uppercase letter and 1 number");
  })

  it("should return account with a balance of 100", () => {
    const user = new User(uuid(), "joge", "12345Joge@");
    const account = user.getAccount();

    expect(account.getBalance()).toEqual(100);
  });

})
