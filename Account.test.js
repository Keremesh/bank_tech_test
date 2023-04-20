const Account = require('./Account');
const Deposit = require('./Deposit');
const Withdrawal = require('./Withdrawal');
const Dates = require('./Dates');

describe('Account', () => {

    it('should show the starting balance as zero', () => {
        const account = new Account();
        expect(account.balance).toEqual(0);
    });

    it('should add the deposited amount to the balance', () => {
        const account = new Account(0);
        const deposit1 = new Deposit(200);
        account.addDeposit(deposit1);
        expect(account.balance).toEqual(200);
        const deposit2 = new Deposit(300);
        account.addDeposit(deposit2);
        expect(account.balance).toEqual(500);
    });

    it('should subtract the withdrawn amount from the balance', () => {
        const account = new Account(0);
        const deposit = new Deposit(1000);
        account.addDeposit(deposit);
        const withdrawal = new Withdrawal(100);
        account.subtractWithdrawal(withdrawal);
        expect(account.balance).toEqual(900);
    });

    // should not allow withdrawal below the balance - throwError;

    test('should show the date of the deposit in the correct format', () => {
        const date = new Date().toLocaleDateString('en-gb');
        const account = new Account(0);
        const deposit = new Deposit(200);
        account.addDeposit(deposit);
        expect(account.transactions).toEqual([{ balance: 200, credit: "", date: `${date}`, debit: 200 }]);
        
    });

    test('should show the date of the withdrawal in the correct format', () => {
        const date = new Date().toLocaleDateString('en-gb');
        const account = new Account(0);
        const deposit = new Deposit(300);
        account.addDeposit(deposit);
        const withdrawal = new Withdrawal(150);
        account.subtractWithdrawal(withdrawal);
        expect(account.transactions[0]).toEqual({ balance: 300, credit: "", date: `${date}`, debit: 300 });
        expect(account.transactions[1]).toEqual({ balance: 150, credit: 150, date: `${date}`, debit: "" });
        expect(account.transactions).toEqual([{ balance: 300, credit: "", date: `${date}`, debit: 300 }, {balance: 150, credit: 150, date: `${date}`, debit: ""}]);
    });

    test('should print the statement in the correct format', () => {
        const date = new Date().toLocaleDateString('en-gb');
        const account = new Account(0);
        const deposit = new Deposit(1000);
        account.addDeposit(deposit);
        const withdrawal = new Withdrawal(200);
        account.subtractWithdrawal(withdrawal);
        // account.printStatement();
        const result = `date || credit || debit || balance\n${date}  ||    ||  1000  ||  1000\n${date}  ||  200  ||    ||  800\n`
        expect(account.printStatement()).toEqual(result);
        
    });

})
