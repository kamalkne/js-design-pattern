// Separate the construction of a complex object from its representation so that the same construction process can create different representations.

class Shop {
    construct(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

class CarBuilder {
    step1() {
        this.car = new Car();
    }

    step2() {
        this.car.addParts();
    }

    get() {
        return this.car;
    };
}

class TruckBuilder {
    step1() {
        this.truck = new Truck();
    }

    step2() {
        this.truck.addParts();
    }

    get() {
        return this.truck;
    };
}

class Car {
    constructor() {
        this.doors = 0;
    }

    addParts() {
        this.doors = 4;
    }

    say() {
        console.log(`I am ${this.doors} doors car.`)
    }
}

class Truck {
    constructor() {
        this.doors = 0;
    }

    addParts() {
        this.doors = 2;
    }

    say() {
        console.log(`I am ${this.doors} doors truck.`)
    }
}

const run = () => {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);

    car.say();
    truck.say();
}
