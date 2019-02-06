/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "penny"){
            this.cashTendered += 1;
        }else if (type === "nickel"){
            this.cashTendered += 5;
        }else if (type === "dime"){
            this.cashTendered += 10;
        }else if (type === "quarter"){
            this.cashTendered += 25;
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered <= this.amountDue){
            return true;
        }else 
        return false;
    }
    giveChange() {
        let pennies = 0
        let nickels = 0
        let dimes = 0
        let quarters = 0
        let amountToGiveBack = this.cashTendered - this.amount;
        while (amountToGiveBack >=0){

        }if (amountToGiveBack >= 25) {
            quarters = quarters + 1;
            change -= 25

        }if (amountToGiveBack >= 10) {
            dimes = dimes + 1;
            change -= 10

        }if (amountToGiveBack >= 5) {
            nickels = nickels + 1;
            change -= 5
        
        }if(amountToGiveBack >= 1) {
            pennies = pennies + 1;
            change -= 1;
        }

        // TODO return the correct change in the following format...
        return {
            pennies: 0,
            nickels: 0,
            dimes: 0,
            quarter: 0,
        }
    }
}

let vendingMachine = new ChangeHandler(100)