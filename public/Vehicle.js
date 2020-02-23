export class Vehicle {
  constructor(vin, type, wheels, doors, transmission, make, color) {
    this.vin = vin
    this.type = type;
    this.wheels = wheels;
    this.doors = doors;
    this.transmission = transmission;
    this.make = make;
    this.color = color;
  }

  showInfo() { return `You successfully built a ${this.type}.`}
}

export class Sedan extends Vehicle {
  constructor(type, wheels, doors, transmission, color, model, hasSunroof) {
    super(type, wheels, doors, transmission, color);
    this.model = model;
    this.hasSunroof = hasSunroof;
  }
}

export class SUV extends Vehicle {
  constructor(type, wheels, doors, transmission, color, model, hasFourWheelDrive, hasSunroof) {
    super(type, wheels, doors, transmission, color);
    this.model = model;
    this.hasFourWheelDrive = hasFourWheelDrive;
    this.hasSunroof = hasSunroof;
  }

  showInfo() {
    return super.showInfo() + ` Make is ${this.make}, Model is ${this.model}, Four wheel drive: ${this.hasFourWheelDrive}, Has sun roof: ${this.hasSunroof}.`
  }
}

//polymorphism
export class Truck extends Vehicle {
  constructor(type, wheels, doors, transmission, color, make, model, hasFourWheelDrive, bedLength){
    super(type, wheels, doors, transmission, color, make);
    this.model = model;
    this.hasFourWheelDrive = hasFourWheelDrive;
    this.bedLength = bedLength;
  }

  showInfo() {
    return super.showInfo() + ` Make is ${this.make}, Model is ${this.model}, Bed Length is ${this.bedLength}, Four wheel drive: ${this.hasFourWheelDrive}`;
  }
}

//encapsulation
export class Motorcycle extends Vehicle {
    constructor(type, wheels, transmission, color, model) {
      super(type, wheels, transmission, color);
      this.wheels = 2;
      this.model = model;
    }

    showInfo() {
      return super.showInfo() + ` Make is ${this.make}, Model is ${this.model}. It has ${this.wheels} wheels.`;
    }
}
