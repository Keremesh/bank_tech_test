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
       
       

    }

    subtractWithdrawal(withdrawal) {
        return this.balance -= withdrawal.amount;
    }



}

module.exports = Account;