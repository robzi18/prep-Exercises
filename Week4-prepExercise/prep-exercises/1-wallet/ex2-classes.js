import eurosFormatter from "./euroFormatter.js";

class Wallet {
  #name;
  #cash;
  #dailyAllowance;
  #dayTotalWithdrawals;

  constructor(name, cash) {
    this.#name = name;
    this.#cash = cash;
    this.#dailyAllowance = 40;
    this.#dayTotalWithdrawals = 0;
  }

  get name() {
    return this.#name;
  }

  deposit(amount) {
    this.#cash += amount;
  }

  withdraw(amount) {
    if (this.#cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    this.#cash -= amount;
    return amount;
  }

  transferInto(wallet, amount) {
    console.log(
      `Transferring ${eurosFormatter.format(amount)} from ${this.name} to ${
        wallet.name
      }`
    );
    const withdrawnAmount = this.withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  dailyAllowance() {
    console.log(`this is daily allowance ${this.#dailyAllowance}`);
  }

  reportBalance() {
    console.log(
      `Name: ${this.name}, balance: ${eurosFormatter.format(this.#cash)}`
    );
  }
  resetDailyAllowance() {
    console.log(
      `the daily allowance of ${this.#name} is ${this.#dailyAllowance} `
    );
    this.#dayTotalWithdrawals = 0;
    console.log(
      `the daily allowance is successfuly reseted to ${
        this.#dayTotalWithdrawals
      }`
    );
  }
  set dailyAllowance(newAllowance) {
    this.#dailyAllowance = dailyAllowance;
    console.log(
      `the daily allowance of ${this.#name} is ${
        this.#dailyAllowance
      }  from seet`
    );
  }
}

function main() {
  const walletJack = new Wallet("Jack", 100);
  const walletJoe = new Wallet("Joe", 10);
  const walletJane = new Wallet("Jane", 20);

  walletJack.resetDailyAllowance();
  walletJoe.resetDailyAllowance();
  walletJane.dailyAllowance = 50;

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
