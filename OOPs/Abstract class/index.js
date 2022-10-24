class AbstractClass {
    constructor(){
        if(this.constructor === AbstractClass){
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    printName(){
        console.log(this.name);
    }
}

class Child extends AbstractClass{
    constructor(name){
        super()
        this.name = name;
    }
}


try {
    const ac = new AbstractClass()
} catch (error) {
    console.log(error.message);
}


const c = new Child("Test");
c.printName()