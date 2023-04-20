# Bank Multi-Class Design Recipe

## 1. Describe the Problem

As a user I want to be able to see my bank account statement that includes date, amount and balance, so that I can keep track of my finances

As a user I want to be able to make a deposit or withdrawal with a date of the transaction

As a user, I want to see the updated balance after making a deposit of withdrawal

## 2. Design the Class System

_Diagram in diagram.png_

```JavaScript
class Account {
  constructor(transaction) {
    this.transaction = transaction;
  }

deposit(amount) {
    // deposit is an instance of Deposit
    // Deposit gets added to the Account 
    // Returns nothing
  }

  withdrawal(amount) {
    // withdrawal is an instance of Withdrawal
    // withdrawal gets subtracted to the Account 
    // Returns nothing
  }

  statement() {
    // Prints out the statement in the correct format
  }

  balance() {
   // returns the total amount minus or plus the transaction
  }
}

class Deposit {
  constructor(amount) {
    this.amount = amount;
  }
}

  class Withdrawal {
  constructor(transaction) {
    this.transaction = transaction;
  }
}

class Dates {
    // returns date in correct format
}
```

## 3. Create Examples as Integration Tests

```JavaScript
// Gets transactions
account = new Account()
deposit1 = new Deposit(200)
withdrwall1 = new withdrawall(100)
account.deposit(deposit1)
account.withdrawall(withdrwall1)
account.balance => 100

// Starting balance zero

// If starting balance zero, unable to withdraw

// If withdrawal is larger than the balance, able to only withdraw the balance

// Prints statement
```

## 4. Create Examples as Unit Tests

_Create examples, where appropriate, of the behaviour of each relevant class at
a more granular level of detail._

```JavaScript
```

## 5. Implement the Behaviour

