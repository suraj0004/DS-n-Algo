/**
 * Simply put, the Liskov Substitution Principle (LSP) states that objects of a superclass should be 
 * replaceable with objects of its subclasses without breaking the application. 
 * In other words, what we want is to have the objects of our subclasses behaving the same way as the 
 * objects of our superclass.
 * 
 * LSP reveals the hidden problem with our inheritance hierarchy. 
 * 
 */

// NOTE: prerequisites -> liskov_substitution_principle_problem.ts

// Example: We have a Rectangle class, which has a funtion to calculate area.
// we also have a test funtion (testRectangleArea) to test calculateArea function of Rectangle class.
class Rectangle {
    private _h: number; 
    private _w : number;

    constructor(height: number, widht: number) {
        this._h = height;
        this._w = widht;
    }
    

    public setHeight(value: number){
        this._h = value;
    }

    public setWidth(value: number){
        this._w = value;
    }

    public calculateArea():number {
        return this._h * this._w
    }
}


/**
 * This function takes object of rectangle and test its calculateArea function.
 * @param box 
 * @returns boolean
 */
function testRectangleArea(box: Rectangle):boolean {

    const height = 10;
    const width = 20;
    const expectedArea = height * width;

    box.setHeight(height);
    box.setWidth(width);

    return box.calculateArea() === expectedArea;
}

/**
 * as per LSP, we have to fix our inheritance structure problem by creating more generalized class (Generalization).
 * Here Square is a sperate class, which has it' own function.
 */
 class Square{
    private _side: number;

    constructor(side:number) {
       this._side =  side
    }

    public setSide(value: number): void {
        this._side =  value
    }

    public calculateArea():number {
        return this._side * this._side
    }
}

/**
 * This function takes object of Square class and test its calculateArea function.
 * @param box 
 * @returns boolean
 */
 function testSquareArea(box: Square):boolean {

    const side = 50;
    const expectedArea = side * side;

    box.setSide(side)

    return box.calculateArea() === expectedArea;
}


(function(){
    const rect = new Rectangle(20,30);
    if(testRectangleArea(rect)){
        console.log('calculateArea function working properly'); // output
    }else{
        console.log('something is wrong with calculateArea function.');
        
    }

    // upto now our calculateArea function is working properly.

    let square = new Square(10);
    /**
     * Now we don't need to pass Square class object to testRectangleArea function because squre class is not derived from Rectanle.
     * to test calculateArea function of Square class we can write sperate function.
     */
    if(testSquareArea(square)){
        console.log('testSquareArea function working properly'); // output
    }else{
        console.log('something is wrong with testSquareArea function.');
        
    }

})()
