
/**
 * The Dependency Inversion principle states that our classes should depend upon interfaces or abstract classes 
 * instead of concrete classes and functions.
 */

abstract class Keyboard{
    public handleKeyInput(key:string){
        console.log(key);
    }
    // some other methods
}

interface Mouse{
     handleDrag(position:string);
    // some other methods
}


class WiredKeyboard extends Keyboard{
    public connectViaCabel(){
        console.log('connected via wire');
    }
}


class WiredMouse implements Mouse{
    
    public handleDrag(position:string){
        console.log(position);
    }
    public connectViaCabel(){
        console.log('connected via wire');
    }
}


// In the below Laptop class, client is restricted to use Wired keyboard and wired mouse. 
// here client is restricted to pass Wired keyboard and wired mouse only.
// It will throw error if we pass wire less keyboard or mouse. 
// here we violates the DIP.
class Laptop{

    private keyboard: WiredKeyboard;
    private mouse: WiredMouse

    constructor( keyboard: WiredKeyboard ) { // we should not use concrete class
        this.keyboard = keyboard;
        this.mouse = new WiredMouse() // we should not create any instance in constructor.
    }
    
}

// DIP
class BluetoothKeyboard extends Keyboard{
    public connectViaBluetooth(){
        console.log('connected via Bluetooth');
    }
}


class BluetoothMouse implements Mouse{
    public handleDrag(position:string){
        console.log(position);
    }
    public connectViaBluetooth(){
        console.log('connected via Bluetooth');
    }
}

class MyLaptop{
    private keyboard: Keyboard; // root level abstract class
    private mouse: Mouse; // root level interface

    // We accept keyboard and mouse object as constructor parameters, also the type is of root level abstract class or interface.
    // this will allow client to pass any kind of keyboard and mouse
    constructor(keyboard: Keyboard, mouse:Mouse) {

        // This approach is dependancy injection, where we take object as argument instead of creating instance.
        this.keyboard = keyboard;
        this.mouse = mouse
    }
}


(function(){

    let keyboard_1 = new WiredKeyboard();
    let laptop_1 = new Laptop(keyboard_1);

    let keyboard_2 = new BluetoothKeyboard();
    // let laptop_1 = new Laptop(keyboard_2); // we can't pass bluetooth keyboard here, also we can't pass mouse object.


    let wiredKeyboard =  new WiredKeyboard();
    let blutoothMouse =  new BluetoothMouse();
    let myLaptop = new MyLaptop(wiredKeyboard, blutoothMouse); // here i can pass any type of keyboard and mouse

    let bluetoothKeyboard = new BluetoothKeyboard();
    let wiredMouse = new WiredMouse();

    let myLaptop2 = new MyLaptop(bluetoothKeyboard, wiredMouse);// here i can pass any type of keyboard and mouse
})()