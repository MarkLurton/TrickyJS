function createAccount(pin, amount = 0) {
  const account = {
    pin: pin,
    balance: amount,
    checkBalance: function (pin) {
      if (pin == this.pin) {
        return `$${this.balance}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: function (pin, amount) {
      if (pin == this.pin) {
        this.balance += amount;
        return `Succesfully deposited $${amount}. Current balance: $${this.balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function (pin, amount) {
      if (pin == this.pin) {
        if (this.balance >= amount) {
          this.balance -= amount;
          return `Succesfully withdrew $${amount}. Current balance: $${this.balance}.`;
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function (oldPin, newPin) {
      if (oldPin == this.pin) {
        this.pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
  return account;
}

module.exports = { createAccount };
