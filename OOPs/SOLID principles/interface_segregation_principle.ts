/**
 * The principle states that many client-specific interfaces are better than one general-purpose interface.
 * Clients should not be forced to implement a function they do no need.
 */


class Car {

}

/**
 * Our ParkingLot interface includes parking and payment related functions.
 */
interface ParkingLot {

    // parking related
    parkCar(car: Car);
    unParkCar(car: Car);
    hasCapacity(): boolean;

    // fee related
    calculateFee(car: Car): number;
    doPayment(car: Car);
}

/**
 * Now I have to create a free parking lot by implementing ParkingLot interface
 * 
 * here i don't want payment related functions but ParkingLog interface forces me to have those functions.
 * Here we violates the Interface segregation principle.
 */

class FreeParkingLot implements ParkingLot {

    public parkCar(car: Car) {
        // do something
    }

    public unParkCar(car: Car) {
        // do something
    }

    public hasCapacity(): boolean {
        // do something
        return true;
    }


    // unncessary function
    public calculateFee(car: Car): number {
        // do nothing
        return 0;
    }

    // unncessary function
    public doPayment(car: Car) {
        throw new Error("This is a free parking lot");
    }
}


/**
 * as a solution we can segregate our interface.
 */

interface ParkingLotBasicOperations {
    // parking related
    parkCar(car: Car);
    unParkCar(car: Car);
    hasCapacity(): boolean;
}

interface ParkingLotPaymentOperations {
    // fee related
    calculateFee(car: Car): number;
    doPayment(car: Car);
}

/**
 * Now if i need to create a free parking lot i only need to implement ParkingLotBasicOperations
 */
class MyFreeParkingLot implements ParkingLotBasicOperations {

    public parkCar(car: Car) {
        // do something
    }

    public unParkCar(car: Car) {
        // do something
    }

    public hasCapacity(): boolean {
        // do something
        return true;
    }
}


/**
 * If i need to create a paid parking lot I can implement ParkingLotBasicOperations and ParkingLotPaymentOperations interfaces
 */

class MyPaidParkingLot implements ParkingLotBasicOperations, ParkingLotPaymentOperations {

    public parkCar(car: Car) {
        // do something
    }

    public unParkCar(car: Car) {
        // do something
    }

    public hasCapacity(): boolean {
        // do something
        return true;
    }

    public calculateFee(car: Car): number {
        // do something
        return 100;
    }

    public doPayment(car: Car) {
        // do something
    }
}