/**
 * Simply put, the Liskov Substitution Principle (LSP) states that objects of a superclass should be 
 * replaceable with objects of its subclasses without breaking the application. 
 * In other words, what we want is to have the objects of our subclasses behaving the same way as the 
 * objects of our superclass.
 * 
 * LSP reveals the hidden problem with our inheritance hierarchy. 
 * 
 */



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
 * NOTE: first read function written in line number 78 then come here.
 * In OOP's we should do inheritance, and here Square is also a type of rectangle having equal height and width.
 * so lets create Square class by extending Rectangle class
 */
 class Square extends Rectangle{

    constructor(side:number) {
        super(side,side);
    }

    public setHeight(value: number): void {
        super.setHeight(value);
        super.setWidth(value);
    }

    public setWidth(value: number): void {
        super.setHeight(value);
        super.setWidth(value);
    }
}

(function(){
    const rect = new Rectangle(20,30);
    if(testRectangleArea(rect)){
        console.log('calculateArea function working properly'); // output
    }else{
        console.log('something is wrong with calculateArea function.');
        
    }

    // upto now our calculateArea function is working properly.


    // now we need to introduce a new class Square. goto line no. 58

    let square = new Square(10);

    /**
     * now again run testRectangleArea function with Square class object, because
     * the Liskov Substitution Principle (LSP) states that objects of a superclass should be 
     * replaceable with objects of its subclasses without breaking the application.
     */
    if(testRectangleArea(square)){
        console.log('calculateArea function working properly');
    }else{
        /**
         * this time we will get false output, which break the LSP.
         * because setHeight and setWidth function of Square class setting height and width.
         */
        console.log('something is wrong with calculateArea function.');
        
    }

})()
