class Account {
    constructor() {
        this.balance = 0;
    }

    addDeposit(deposit) {
        return this.balance += deposit.amount;
    }

    subtractWithdrawal(withdrawal) {
        return this.balance -= withdrawal.amount;
    }

}

module.exports = Account;