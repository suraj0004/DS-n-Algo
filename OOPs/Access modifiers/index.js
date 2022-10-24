const MyClass = (function(){


    // private properties
    let name, age;

    function MyClass(_name, _age, _roll_no){

        // private properties
        name = _name;
        age = _age;

        // public properties
        this.roll_no = _roll_no
    }

    // Public methods
    MyClass.prototype.getName = function(){
        return name;
    }

    MyClass.prototype.getAge = function(){
        return age;
    }

    MyClass.prototype.setName = function(_name){
        name = _name;
    }


    // private methods
    function IamPrivateMethod(){
        console.log('I am private method');
    }

    return MyClass
})()


const a = new MyClass('suraj', 10, 33)

// undefined, because name & IamPrivateMethod is private
try {
    console.log(a.name);
    console.log(a.IamPrivateMethod());
} catch (error) {
    console.log(error.message);
}


// public 
console.log(a.roll_no);
console.log(a.getName());

