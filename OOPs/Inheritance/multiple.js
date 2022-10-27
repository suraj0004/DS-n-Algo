/**
 * In JavaScript we can only inherit from a single object.
 * But we can inherit from multiple parents using mixins
 */



// Parent one
const  Father = {
    father_todo(){
        console.log(this.name + ' going to job');
    }
}

// Parent two
const  Son = {
    son_todo(){
        console.log(this.name +' going to shop.');
    }
}


// Final derived class
class Person{
    constructor(name) {
        this.name = name
    }
}


const p = new Person("suraj");

// Multiple Inheritance
Object.assign(Person.prototype, Son)
Object.assign(Person.prototype, Father)

p.son_todo()
p.father_todo()
