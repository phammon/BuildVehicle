class Vehicle {
  constructor(type, wheels, doors, transmission, fuel, color) {
    this.type = type;
    this.wheels = wheels;
    this.doors = doors;
    this.transmission = transmission;
    this.fuel = fuel;
    this.color = color;
  }

  showInfo() { return `You successfully built a ${this.type}`}
}

//inheritance
class Sedan extends Vehicle {
  constructor(type, wheels, doors, transmission, fuel, color, model, hasSunroof, topspeed) {
    super(type, wheels, doors, transmission, fuel, color);
    this.model = model;
    this.hasSunroof = hasSunroof;
    this.topspeed = topspeed;
  }
}

class SUV extends Vehicle {
  constructor(type, wheels, doors, transmission, fuel, color, model, hasFourWheelDrive) {
    super(type, wheels, doors, transmission, fuel, color);
    this.model = model;
    this.hasFourWheelDrive = hasFourWheelDrive;
  }
}

//polymorphism
class Truck extends Vehicle {
  constructor(type, wheels, doors, transmission, fuel, color, model, hasFourWheelDrive, bedLength){
    super(type, wheels, doors, transmission, fuel, color);
    this.model = model;
    this.hasFourWheelDrive = hasFourWheelDrive;
    this.bedLength = bedLength;
  }
  showInfo() { return `You successfully built a ${this.type}. Make is ${this.make}, Model is ${this.model}, Bed Length is ${this.bedLength}`}

}

//encapsulation
class Motorcyle extends Vehicle {
    constructor(type, doors, transmission, fuel, color, model, topSpeed) {
      super(type, doors, transmission, fuel, color);
      let wheels = 2;
      this.model = model;
      this.topSpeed = topSpeed;
    }
}

$("#vehicle-creator-form").submit(function(e) {
  e.preventDefault();
  let arr = $("#vehicle-creator-form").serializeArray();
  console.log(arr[0].value)
  let vehicle = createObj(arr[0].value, arr)
  var div = document.getElementById('details-container');
  div.innerHTML += vehicle.showInfo();

})

function createObj(type, data) {
  if (type === "Truck")
    return createTruckObject(data);
  if (type === "SUV")
    return createSuvObject(data);
  if (type === "Sedan")
    return createSedanObject(data);
  if (type === "Motorcycle")
    return createMotorcyleObj(data);
}

function createTruckObject(formDataArr) {
  let truck = new Truck();
  console.log(formDataArr);
  truck.type = formDataArr[0].value;
  truck.wheels = formDataArr[1].value;
  truck.doors = formDataArr[2].value;
  truck.transmission = formDataArr[3].value;
  truck.fuel = formDataArr[4].value;
  truck.color = formDataArr[5].value;
  return truck;
}

function createSuvObject(formDataArr) {
  let truck = new Truck();
  console.log(formDataArr);
  truck.wheels = formDataArr[0].value;
  truck.doors = formDataArr[1].value;
  truck.transmission = formDataArr[2].value;
  truck.fuel = formDataArr[3].value;
  truck.color = formDataArr[4].value;
  return truck;
}

function createSedanObject(formDataArr) {
  let truck = new Truck();
  console.log(formDataArr);
  truck.wheels = formDataArr[0].value;
  truck.doors = formDataArr[1].value;
  truck.transmission = formDataArr[2].value;
  truck.fuel = formDataArr[3].value;
  truck.color = formDataArr[4].value;
  return truck;
}

function createSedanMotorCycle(formDataArr) {
  let truck = new Truck();
  console.log(formDataArr);
  truck.wheels = formDataArr[0].value;
  truck.doors = formDataArr[1].value;
  truck.transmission = formDataArr[2].value;
  truck.fuel = formDataArr[3].value;
  truck.color = formDataArr[4].value;
  return truck;
}
