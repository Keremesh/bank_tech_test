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
        if (withdrawal > this.balance) {
            throw new Error('Insufficient funds')
        }
        this.balance -= withdrawal.amount;
        this.transactions.push({
            date: dates.getCurrentDate(),
            debit: "",
            credit: withdrawal.amount,
            balance: this.balance
        });
        // return this.balance
    }

    printStatement() {

        let statement = 'date || credit || debit || balance\n'

        for (let i = 0; i < this.transactions.length; i++) {
            const transaction = this.transactions[i];
            statement += `${transaction.date}  ||  ${transaction.credit}  ||  ${transaction.debit}  ||  ${transaction.balance}\n`;
        }
        console.log(statement)
        return statement;      
    }
}

module.exports = Account;