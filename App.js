class Vehicle {
  constructor(wheels, doors, transmission, fuel, color, hasAirbags, make, hasSunroof) {
    this.wheels = wheels;
    this.doors = doors;
    this.transmission = transmission;
    this.fuel = fuel;
    this.color = color;
  }
}

class Sedan extends Vehicle {
  constructor(model, hasSunroof, topspeed) {
    this.model = model;
    this.hasSunroof = hasSunroof;
    this.topspeed = topspeed;
  }
}

class SUV extends Vehicle {
  constructor(model, hasFourWheelDrive) {
    super();
    this.model = model;
    this.hasFourWheelDrive = hasFourWheelDrive;
  }
}

class Truck extends Vehicle {
  constructor(model, hasFourWheelDrive, bedLength){
    super();
    this.model = model;
    this.hasFourWheelDrive = hasFourWheelDrive;
    this.bedLength = bedLength;
  }
}

class Motorcyle extends Vehicle {
    constructor(model, topSpeed) {
      this.model = model;
      this.topSpeed = topSpeed;
    }
}

$("#create-vehicle-button").click(function() {
  let arr = $("#vehicle-creator-form").serializeArray();
  let truck = createTruckObject(arr);
  var div = document.getElementById('details-container');
  div.innerHTML += "You built a truck!";
  div.innerHTML += "<br/>"
  div.innerHTML += `Wheels: ${truck.wheels}<br/>`;
  div.innerHTML += `Doors: ${truck.doors}<br/>`;
  div.innerHTML += `Transmission: ${truck.transmission}<br/>`;
  div.innerHTML += `Fuel: ${truck.fuel}`;


})

function createTruckObject(formDataArr) {
  let truck = new Truck();
  truck.wheels = formDataArr[0].value;
  truck.doors = formDataArr[1].value;
  truck.transmission = formDataArr[2].value;
  truck.fuel = formDataArr[3].value;
  truck.color = formDataArr[4].value;
  return truck;
}
