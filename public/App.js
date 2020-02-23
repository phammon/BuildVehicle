import { Vehicle, Truck, Sedan, SUV, Motorcycle } from "./Vehicle.js";

$("#vehicle-creator-form").submit(function(e) {
  e.preventDefault();
  let arr = $("#vehicle-creator-form").serializeArray();
  console.log(arr[0].value)
  let vehicle = createObj(arr[0].value, arr)
  var div = document.getElementById('details-container');
  div.innerHTML = null;
  div.innerHTML += vehicle.showInfo();
})

function createObj(type, data) {
  if (type === "Truck")
    return createTruckObj(data);
  if (type === "SUV")
    return createSuvObj(data);
  if (type === "Sedan")
    return createSedanObj(data);
  if (type === "Motorcycle")
    return createMotorcyleObj(data);
}

function createTruckObj(formDataArr) {
  let truck = new Truck();
  console.log(formDataArr);
  truck.type = formDataArr[0].value;
  truck.vin = formDataArr[1].value;
  truck.wheels = formDataArr[2].value;
  truck.doors = formDataArr[3].value;
  truck.transmission = formDataArr[4].value;
  truck.color = formDataArr[5].value
  truck.make = formDataArr[6].value
  truck.model = formDataArr[7].value;
  truck.bedLength = formDataArr[8].value;
  truck.hasFourWheelDrive = formDataArr[9] === undefined ? false : true;
  return truck;
}

function createSuvObj(formDataArr) {
  let suv = new SUV();
  console.log(formDataArr);
  suv.type = formDataArr[0].value;
  suv.vin = formDataArr[1].value;
  suv.wheels = formDataArr[2].value;
  suv.doors = formDataArr[3].value;
  suv.transmission = formDataArr[4].value;
  suv.color = formDataArr[5].value
  suv.make = formDataArr[6].value
  suv.model = formDataArr[7].value;
  suv.hasFourWheelDrive = formDataArr[9] === undefined ? false : true;
  suv.hasSunroof = formDataArr[10] === undefined ? false : true;
  return suv;
}

function createSedanObj(formDataArr) {
  let sedan = new Sedan();
  sedan.type = formDataArr[0].value;
  sedan.vin = formDataArr[1].value;
  sedan.wheels = formDataArr[2].value;
  sedan.doors = formDataArr[3].value;
  sedan.transmission = formDataArr[4].value;
  sedan.color = formDataArr[5].value
  sedan.make = formDataArr[6].value
  sedan.model = formDataArr[7].value;
  sedan.hasSunroof = formDataArr[10] === undefined ? false : true;
  return sedan;
}

function createMotorcyleObj(formDataArr) {
  let motorcycle = new Motorcycle();
  motorcycle.type = formDataArr[0].value;
  motorcycle.vin = formDataArr[1].value;
  motorcycle.make = formDataArr[6].value;
  motorcycle.model = formDataArr[7].value;
  return motorcycle;
}
