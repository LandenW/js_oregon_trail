(function() {

//random number generator for traveler food
function randoNum() {
  return parseInt(Math.random() * 100);
}

//create traveler object
function Traveler (tFood, tName, isHealthy){
  this.food = tFood;
  this.name = tName;
  this.isHealthy = isHealthy;
}

//create wagon object
function Wagon (passengers, capacity){
  this.capacity = capacity;
  this.passengers = passengers;
}

//function to make a new traveler when a name is given
function makeTraveler(name) {
  return new Traveler(randoNum(), name, true);
}

//function to make a new wagon when a capacity is given
function makeWagon(capacity) {
  return new Wagon([], capacity);
}

//function to hunt with 50%/50% chance
function hunt(name) {
  if (randoNum() > 50) {
    name.food = name.food + 100
    return name.food;
   }
   else {
    return this.food
  }
}

//function to eat food per traveler and declair unhealthy/healthy
function eat(name) {
  if (name.food < 20) {
    name.food = 0
    name.isHealthy = false;
  }
  else {
    name.food = name.food - 20
  }
}

//function to add travelers to wagon if there is enough capacity
function join(wname, name) {
  if (wname.passengers.length < wname.capacity) {
    wname.passengers.push(name);
  }
}

//function to quarantine a wagon if an unhealthy member is aboard
function quarantine(wname) {
  for (i=0; i<wname.passengers.length; i++) {

    if (wname.passengers[i].isHealthy == false) {
      return true;
    }

  }
  return false;
}

//function to calculate the total food of the wagon
function food(wname) {
  let totalFood = 0
  for (i=0; i<wname.passengers.length; i++){

    totalFood = totalFood + wname.passengers[i].food
  }

  return totalFood;
}

//create new objects
  let wagon = makeWagon(5);
  let traveler  =  makeTraveler("Henrietta");
  let traveler2 =  makeTraveler("Juan");

//make travelers do actions
  hunt(traveler);
  eat(traveler2);
  eat(traveler2);
  join(wagon, traveler);
  join(wagon, traveler2);

//display if wagon is quarantine
  console.log(quarantine(wagon));
  console.log(food(wagon));


})();
