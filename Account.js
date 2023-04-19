class Account {
    constructor() {
        this.balance = 0;
    }

    addDeposit(deposit) {
        return this.balance += deposit.amount;
    }

}

module.exports = Account;