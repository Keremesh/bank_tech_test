const Account = require('./Account');

describe('Account', () => {
    test('shows starting balance as zero', () => {
        const account = new Account();
        expect(account.balance).toEqual(0);
    })
})
