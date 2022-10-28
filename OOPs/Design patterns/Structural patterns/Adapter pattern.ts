/**
 * Adapter is a structural design pattern, which allows incompatible objects to collaborate.
 * 
 * The Adapter acts as a wrapper between two objects. 
 * It catches calls for one object and transforms them to format and interface recognizable by the second object.
 */

class Payload {
  public request(): object {
    return {
      data: "My name is suraj",
    };
  }
}

class PayloadWithoutWrapper {
  public requestWithoutWrapper(): string[] {

    // return data without wrapper and in different format
    return [
        "My",
        "name",
        "is",
        "suraj"
    ];
  }
}

class Adapter extends Payload {
    private adaptee: PayloadWithoutWrapper

    constructor(adaptee: PayloadWithoutWrapper) {
        super()
        this.adaptee = adaptee
    }
    

    public request(): object {
        // here we transform the data like original payload
        const data = this.adaptee.requestWithoutWrapper().join(" "); // array to string conversion.
        return {
            data: data
        }
    }
}


function apiCall( payload: Payload ){
    console.log(payload.request());
    
}

(function () {
 const payload = new Payload();

 apiCall(payload)

 const withoutWrapper = new PayloadWithoutWrapper()
 const adapter = new Adapter(withoutWrapper)

 apiCall(adapter)
 
 
})();