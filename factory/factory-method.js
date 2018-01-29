// Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

class Creator {
    createEmployee(type) {
        var employee;

        if (type === 'fulltime') {
            employee = new Fulltime();
        } else if (type === 'parttime') {
            employee = new Parttime();
        } else if (type === 'temporary') {
            employee = new Temporary();
        } else if (type === 'contractor') {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = () => {
            console.log(`My type is ${this.type} and rates are ${this.hourly} /hour`);
        }

        return employee;
    }
}

class Fulltime {
    constructor() {
        this.hourly = '$12';
    }
}

class Parttime {
    constructor() {
        this.hourly = '$11';
    }
}

class Temporary {
    constructor() {
        this.hourly = '$10';
    }
}

class Contractor {
    constructor() {
        this.hourly = '$15';
    }
}

const run = () => {
    var employees = [];

    var creator = new Creator();
    employees.push(creator.createEmployee('contractor'));
    employees.push(creator.createEmployee('fulltime'));
    employees.push(creator.createEmployee('parttime'));
    employees.push(creator.createEmployee('temporary'));

    for (var t = 0, j = employees.length; t < j; t++) {
        employees[t].say();
    }
}
