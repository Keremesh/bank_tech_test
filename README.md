# Bank tech test

This program allows a client to make deposits and withdrawals and print out an account statement. The data is kept in memory and not in database. 

The program does not utilise user interface at this moment.

## Usage

To use the app, you can create an instance of the "Account" class and call its methods to make deposits and withdrawals, and print the account statement. 

The program starts with the Account balance of zero as in real life situation when a user opens a fresh bank account. 

## Acceptance criteria

The app satisfies the following acceptance criteria: 

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see: 

```
date || debit || credit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

```
## Installations

1. Install Node.js. If not already installed, please visit https://nodejs.org/en/download/ and follow the installation instructions.

2. Download or clone the banking program from this this repository.

3. Open a terminal and navigate to the root directory of the program.

4. Run 'npm install' command to install all the neccessary dependencies.

