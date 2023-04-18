# Bank Multi-Class Planned Design Recipe
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
## 1. Describe the Problem

As a user I want to be able to see my bank account statement that includes date, amount and balance, so that I can keep track of my finances

As a user I want to be able to make a deposit or withdrawal with a date of the transaction

As a user, I want to see the updated balance after making a deposit of withdrawal


## 2. Design the Class System

diagram here
```

_Interface of each class in more detail._

```JavaScript
const Account {
  constructor(transaction) {
    this.transaction = transaction;
  }

  get deposit(amount) {
    # deposit is an instance of Deposit
    # Deposit gets added to the Account 
    # Returns nothing
  }

  get withdrawal(amount) {
    # withdrawal is an instance of Withdrawal
    # withdrawal gets subtracted to the Account 
    # Returns nothing
  }
  
  get date () {

  }

  balance() {
   #returns the total amount minus or plus the transaction
  }
}

const Deposit {
  constructor(amount) {
    this.amount = amount;
  }

  get deposit(amount) {
    # deposit is an instance of Deposit
    # Returns nothing
  }
}

  const Withdrawal {
  constructor(transaction) {
    this.transaction = transaction;
  }

  get withdrawal(amount) {
    # Withdarwal is an instance of Withdarwal
    # Returns nothing
  }
}


```

## 3. Create Examples as Integration Tests

_Create examples of the classes being used together in different situations and
combinations that reflect the ways in which the system will be used._

```JavaScript
# EXAMPLE

# Gets transactions
account = new Account()
deposit1 = new Deposit(200)
withdrwall1 = new withdrawall(100)
account.deposit(deposit1)
account.withdrawall(withdrwall1)
account.balance => 100

# Starting balance zero

# If starting balance zero, unable to withdraw

# If withdrawal is larger than the balance, able to only withdraw the balance

```

## 4. Create Examples as Unit Tests

_Create examples, where appropriate, of the behaviour of each relevant class at
a more granular level of detail._

```ruby
# EXAMPLE

# Constructs a track
track = Track.new("Carte Blanche", "Veracocha")
track.title # => "Carte Blanche"
```

_Encode each example as a test. You can add to the above list as you go._

## 5. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green,
refactor to implement the behaviour._

