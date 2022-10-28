/**
 * Singleton is a creational design pattern, which ensures that only one object of its kind exists and provides
 * a single point of access to it for any other code.
 * 
 * The Singleton pattern solves two problems at the same time, violating the Single Responsibility Principle:
 * 1) Ensure that a class has just a single instance.
 * 2) Provide a global access point to that instance
 * 
 * examples:
 * 1) The government is an excellent example of the Singleton pattern. A country can have only one official government
 * 2) session global object
 * 3) DB object
 */

class Singleton {
  private static instance: Singleton;
  private _name:string;
  private constructor() {
    this._name = 'default'
  }

  public static getInstance():Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public set name(value:string){
    this._name = value
  }

  public get name():string{
    return this._name
  }
}


(function(){

    const obj = Singleton.getInstance();

    console.log('intial value of first object: '+ obj.name);
    obj.name = "suraj";
    console.log('updated value of first object: '+ obj.name);

    const obj2 = Singleton.getInstance(); // crated new instance
    console.log('intial value of second object: '+ obj2.name);

    if (obj === obj2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }

})()