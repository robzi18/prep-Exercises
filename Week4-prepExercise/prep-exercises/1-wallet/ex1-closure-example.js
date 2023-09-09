import eurosFormatter from "./euroFormatter.js";

/**
 * This is the closure way of doing things and we have already completed it for you so you don't need to do anything.
 * We leave it here as an example of how your other implementations should work!
 */

function createWallet(name, cash = 0) {
  let dailyAllowance = 40;
  let dayTotalWithdrawals = 0;

  function deposit(amount) {
    cash += amount;
    console.log(`successfully deposited ${amount} to ${name}`);
  }

  function withdraw(amount) {
    if (cash - amount < 0) {
      console.log(`Insufficient funds you have only ${cash}!`);
      return 0;
    }

    if (dayTotalWithdrawals + amount > dailyAllowance) {
      console.log(
        `Insufficient remaining daily allowance YOUR BACLANCE IS ${cash}!`
      );
      return 0;
    }

    cash -= amount;
    console.log(name, ">>", cash); //jane 25
    dayTotalWithdrawals += amount;
    console.log(name, ">>", dayTotalWithdrawals); //jane 25
    return amount;
  }

  function transferInto(wallet, amount) {
    console.log(
      `Transferring ${eurosFormatter.format(
        amount
      )} from ${name} to ${wallet.getName()}`
    );
    const withdrawnAmount = withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  function setDailyAllowance(newAllowance) {
    dailyAllowance = newAllowance;
    console.log(
      `Daily allowance set to: ${eurosFormatter.format(newAllowance)}`
    );
  }

  function resetDailyAllowance() {
    dayTotalWithdrawals = 0;
  }

  function reportBalance() {
    console.log(`Name: ${name}, balance: ${eurosFormatter.format(cash)}`);
  }

  const getName = () => name;

  return {
    deposit,
    withdraw,
    transferInto,
    setDailyAllowance,
    resetDailyAllowance,
    reportBalance,
    getName,
  };
}

function main() {
  const walletJack = createWallet("Jack", 100);
  // console.log("========");
  // console.log(walletJack);
  // console.log("========");
  const walletJoe = createWallet("Joe", 10);
  const walletJane = createWallet("Jane", 20);

  // walletJack.transferInto(walletJoe, 50);
  createWallet("Jack", 100).transferInto(walletJoe, 50);
  walletJack.setDailyAllowance(80);
  walletJack.transferInto(walletJoe, 50);

  walletJane.transferInto(walletJoe, 25);
  console.log("before deposit");
  walletJane.deposit(20);
  console.log("AFTER deposit");
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
