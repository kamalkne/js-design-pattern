// If your application needs more control over the object creation process, consider using a Factory.

// Product instances
class Employee {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`I am employee ${this.name}`);
    }
}

class Vendor {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`I am vendor ${this.name}`);
    }
}

// Concrete Factory -
class EmployeeFactory {
    create(name) {
        return new Employee(name);
    }
}

class VendorFactory {
    create(name) {
        return new Vendor(name);
    }
}

const run = () => {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create('John Doe'));
    persons.push(employeeFactory.create('Doe John'));
    persons.push(VendorFactory.create('Jon Dows'));
    persons.push(VendorFactory.create('Dow Jon'));

    for (var i = 0, j = persons.length; i < j; i++) {
        persons[i].say();
    }
}
