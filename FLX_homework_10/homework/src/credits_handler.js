let zero = 0; //to avoid error with magic numbers
function userCard(index) {
    let tax = 0.005;
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    return {
      getCardOptions:() => {
        return {key: index, balance, transactionLimit, historyLogs};
      },
      putCredits: (amount) => {
        if (amount > zero) {
          balance += amount;
          historyLogs.push({
          operationType: `Received credits`,
          credits: amount,
          operationTime: new Date().toLocaleString('en-GB')
          });
        } else {
          console.error(`the amount should be greater`);
        }
      },
      takeCredits: function (amount) {
        if (transactionLimit < amount || balance < amount) {
          console.error(`You have exceeded the limit or there is not enough money on your balance`);
        }else {
          balance -= amount;
          historyLogs.push({
            operationType: `Withdrawal of credits`,
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')
          });
        }
      },
      setTransactionLimit: function (amount) {
        if (amount > zero ) {
          transactionLimit = amount;
          historyLogs.push({
            operationType: `Transaction limit change`,
            credits: amount,
            operationTime: new Date().toLocaleString()
          });
        } else {
          console.error(`the amount should be greater`);
        }
      },
      transferCredits: function (amount, recipientCard) {
        let wholeAmount = tax * amount + amount;
        if (balance < amount) {
          console.error(`There is not enough money on the card`);
        } else if (transactionLimit < wholeAmount) {
          console.error(`Exceeded limit, try again`);
        } else {
          this.takeCredits(wholeAmount);
          recipientCard.putCredits(amount);
        }
      }
    }
  }
  class UserAccount {
    constructor(name) {
      this.name = name;
      this.cards = [];
    }
    addCard() {
      const maxAmountOfCards = 3
      if (this.cards.length < maxAmountOfCards) {
        this.cards.push(userCard(this.cards.length + 1));
      } else {
        console.error(`You should have <= 3 cards`);
      }
    }
    getCardByKey(key) {
      return this.cards[key - 1];
    }
  }