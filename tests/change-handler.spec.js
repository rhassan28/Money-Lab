// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("Insert a penny", function(){
        //Arrange
        let vendingMachine = new ChangeHandler(100)
        //Act
        vendingMachine.insertCoin("penny")
        //Assert
        expect(vendingMachine.cashTendered).toBe(1);

    });

    it("Insert a nickel", function(){
        //Arrange
        let vendingMachine = new ChangeHandler(100)
        //Act
        vendingMachine.insertCoin("nickel")
        //Assert
        expect(vendingMachine.cashTendered).toBe(5);

    });
});