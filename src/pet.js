const MINIMUM_HUNGER = 0;
const MAXIMUM_FITNESS = 10;
const DEATH_MSG = 'Your pet has died :\'(';

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
};

Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_MSG);
  }
  
  this.age += 1;
  this.hunger += 4;
  this.fitness -= 3;
};

Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_MSG);
  }
  
  if(this.fitness < 6) {
    this.fitness += 3;
    this.hunger += 1;
  } else (this.fitness = MAXIMUM_FITNESS);
};

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_MSG);
  }
  
  if(this.hunger > 3) {
    this.hunger -= 4;
    this.fitness -= 1;
  } else (this.hunger = MINIMUM_HUNGER);
};

Pet.prototype.checkUp = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_MSG);
  }
  
  if(this.fitness <= 3 && this.hunger >= 5) {
    return 'I am hungry and I need a walk'
  } else if(this.fitness <= 3) {
    return 'I need a walk'
  } else if(this.hunger >= 5) {
    return 'I am hungry';
  } else {
    return 'I am just fine thanks!';
  };
};



module.exports = Pet;