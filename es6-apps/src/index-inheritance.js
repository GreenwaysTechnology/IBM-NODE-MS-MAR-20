
    //is-a 

    class Account {
        constructor(id) {
            this.id = id;
            console.log('acc')
        }
        //methods
        deposit(){
            return 'Account Deposit'
        }
    }
    class SavingsAccount extends Account {
        constructor(id = 1) {
            super(id);
            console.log('savings account')
        }
        deposit(){
            return 'SavingsAccount Deposit' + super.deposit();
        }
    }
    let sb = new SavingsAccount(12);
    console.log(`Account id ${sb.id} ${sb.deposit()}`)