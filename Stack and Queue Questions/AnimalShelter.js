const Queue =  require('../Queue/queue_list')

class AnimalShelter{

    #dogs;
    #cats;
    #timestapm;
    constructor(){
        this.#dogs = new Queue;
        this.#cats = new Queue;
        this.#timestapm = 1000;
    }

    enqueue(animal){

        animal.timestamp = this.#timestapm;

        if(animal instanceof Dog){
            this.#dogs.add(animal)
        }else{
            this.#cats.add(animal)
        }

        this.#timestapm += 1000;
    }

    dequeueAny(){

        if(this.#dogs.isEmpty() && this.#cats.isEmpty()) return
        else if( this.#dogs.isEmpty() && !this.#cats.isEmpty() ){
            return this.#cats.remove()
        }else if( !this.#dogs.isEmpty() && this.#cats.isEmpty()){
            return this.#dogs.remove()
        }else{
            return this.#dogs.peek().timestamp < this.#cats.peek().timestamp? this.#dogs.remove(): this.#cats.remove();
        }
    }

    dequeueDog(){
        return this.#dogs.remove();
    }

    dequeueCat(){
        return this.#cats.remove();
    }

    print(){
        console.log('DOG: ');
        this.#dogs.print()
        console.log('CAT: ');
        this.#cats.print()
    }
}

class Animal{
    constructor(name, age){
        this.timestamp = null
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{
    constructor(name, age) {
        super(name, age)
    }
}

class Cat extends Animal{
    constructor(name, age) {
        super(name, age)
    }
}




const shelter = new AnimalShelter();

shelter.enqueue( new Cat('cat 1', 3) )
shelter.enqueue( new Cat('cat 2', 1) )
shelter.enqueue( new Dog('dog 1', 3) )
shelter.enqueue( new Dog('dog 2', 7) )
shelter.enqueue( new Cat('cat 3', 1) )
shelter.enqueue( new Dog('dog 3', 2) )
shelter.enqueue( new Dog('dog 4', 6) )

console.clear()
shelter.print()

console.log( 'dequeueAny: ' , shelter.dequeueAny());
console.log( 'dequeueDog: ' , shelter.dequeueDog());

shelter.print()
console.log( 'dequeueDog: ' , shelter.dequeueDog());
console.log( 'dequeueCat: ' , shelter.dequeueCat());
shelter.print()