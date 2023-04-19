const Account = require('./Account');
const Deposit = require('./Deposit');

describe('Account', () => {
    test('shows starting balance as zero', () => {
        const account = new Account();
        expect(account.balance).toEqual(0);
    });
    test('adds the deposited amount to the balance', () => {
        const account = new Account(0);
        const deposit1 = new Deposit(200);
        account.addDeposit(deposit1);
        expect(account.balance).toEqual(200);
        const deposit2 = new Deposit(300);
        account.addDeposit(deposit2);
        expect(account.balance).toEqual(500);
    });
    test.skip('subtracts the withdrawed amount from the balance', () => {
        const account = new Account(1000);
        const withdrawal = new Withdrawal(100);
        account.subtractWithdrawal(withdrawal);
        expect(account.balance).toEqual(800);
        // const deposit2 = new Deposit(300);
        // account.addDeposit(deposit2);
        // expect(account.balance).toEqual(500);
        ;
    });

})
