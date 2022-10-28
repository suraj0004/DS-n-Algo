/**
 * Factory method is a creational design pattern which solves the problem of creating product objects
 *  without specifying their concrete classes.

The Factory Method defines a method, which should be used for creating objects instead of using a direct constructor call (new operator).
 Subclasses can override this method to change the class of objects that will be created.
 */


// Below are our different type of delivery methods. all delivery class ( Truck and Ship ) implements the Transport interface.
interface Transport {
  deliver():void;
}

class Truck implements Transport {
  deliver() {
    console.log("deliver by road.");
  }
}

class Ship implements Transport {
  deliver() {
    console.log("deliver by sea.");
  }
}

// This is our main creator abstract class.
abstract class Logistic {
  // common methods for all delivery type will come here.
  public preDeliveryCheck(): boolean {

    const transport: Transport = this.transportVia()
    console.log(transport);
    console.log("Querying DB....");
    console.log("Verification success....");
    return true;
  }

  // function must have in child class.
  // this is our factory method.
  public abstract transportVia(): Transport;
}

class RoadLogistic extends Logistic {
  public transportVia(): Transport {
    return new Truck();
  }

  // road logistic related methods will come here
}

class ShipLogistic extends Logistic {
  public transportVia(): Transport {
    return new Ship();
  }

  // ship logistic related methods will come here
}

class MyLogisticCompany {
  public static deliverPacket(logistic: Logistic) {
    if (logistic.preDeliveryCheck()) {
      const transportMethods: Transport = logistic.transportVia(); // factory method, which return the instance 
      transportMethods.deliver();
    } else {
      throw new Error("Pre delivery check failed.");
    }
  }
}

(function () {
  try {
    MyLogisticCompany.deliverPacket(new RoadLogistic());
    MyLogisticCompany.deliverPacket(new ShipLogistic());
  } catch (e: any) {
    console.log(e.message);
  }
})();
