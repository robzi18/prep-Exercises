import eurosFormatter from "./euroFormatter.js";

function createWallet(name, cash = 0) {
  return {
    _name: name,
    _cash: cash,
    _dailyAllowance: 40,
    _dayTotalWithdrawals: 0,

    deposit: function (amount) {
      this._cash += amount;
    },

    withdraw: function (amount) {
      if (this._cash - amount < 0) {
        console.log(`Insufficient funds!`);
        return 0;
      }

      this._cash -= amount;
      return amount;
    },
    resetDailyAllowance() {
      console.log(
        `the daily allowance of ${this._name} is ${this._dayTotalWithdrawals} `
      );
      this._dayTotalWithdrawals = 0;
      console.log(
        `the daily allowance is successfuly reseted to ${this._dayTotalWithdrawals}`
      );
      return this._dayTotalWithdrawals;
    },
    setDailyAllowance(newAllowance) {
      this._dailyAllowance = newAllowance;
      return this._dailyAllowance;
    },
    transferInto: function (wallet, amount) {
      console.log(
        `Transferring ${eurosFormatter.format(amount)} from ${
          this._name
        } to ${wallet.getName()}`
      );
      const withdrawnAmount = this.withdraw(amount);
      wallet.deposit(withdrawnAmount);
    },

    reportBalance: function () {
      console.log(
        `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
      );
    },

    getName: function () {
      return this._name;
    },
  };
}

function main() {
  const walletJack = createWallet("Jack", 100);
  const walletJoe = createWallet("Joe", 10);
  const walletJane = createWallet("Jane", 20);
  walletJack.resetDailyAllowance();
  walletJane.resetDailyAllowance();
  walletJoe.resetDailyAllowance();

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);
  console.log(walletJack._dayTotalWithdrawals);
  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
