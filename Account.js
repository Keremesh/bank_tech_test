const Dates = require('./Dates');

const dates = new Dates();

class Account {
    constructor() {
        this.balance = 0;
        this.transactions = [];
        
    }

    addDeposit(deposit) {
        this.balance += deposit.amount;
        this.transactions.push({
            date: dates.getCurrentDate(),
            debit: deposit.amount,
            credit: "",
            balance: this.balance
        });
        // return this.balance;
    }

    subtractWithdrawal(withdrawal) {
        this.balance -= withdrawal.amount;
        this.transactions.push({
            date: dates.getCurrentDate(),
            debit: "",
            credit: withdrawal.amount,
            balance: this.balance
        });
        // return this.balance
    }



}

module.exports = Account;