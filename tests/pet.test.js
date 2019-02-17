const Pet = require('../src/pet');
let pet = null;

beforeEach(() => {
  pet = new Pet('Colin');
});

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Colin')).toBeInstanceOf(Object);
  });
  it('sets a name value on the new pet', () => {
    expect(pet.name).toEqual('Colin');
  });
});

describe('growUp function', () => {
  it('increases the pet\'s age by 1 when called', () => {
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});

describe('Pet health and hunger levels', () => {
  it('increases the pet\'s hunger by 5', () => {
    pet.hunger = 0;
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it('decreases the pet\'s fitness by 3', () => {
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
  it('increases the pet\'s fitness by 4', () => {
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('decreases the pet\'s hunger by 3', () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  })
});

describe('checkUp method', () => {
  it('checks the pet\'s fitness status', () => {
    pet.hunger = 4;
    pet.fitness = 2;
    expect(pet.checkUp()).toEqual('I need a walk');
  });
  it('checks the pet\'s hunger status', () => {
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry');
  });
  it('checks both hunger and fitness together', () => {
    pet.hunger = 6;
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual('I am hungry and I need a walk');
  });
  it('checks both hunger and fitness together', () => {
    pet.hunger = 4;
    pet.fitness = 8;
    expect(pet.checkUp()).toEqual('I am just fine thanks!');
  });
})

describe('isAlive', () => {
  it('returns a boolean whether the cat is still alive', () => {
    pet.hunger = 10;
    pet.fitness = 8;
    pet.age = 10;
    expect(pet.isAlive).toEqual(false);
  });
  it('returns a boolean whether the pet is still alive', () => {
    pet.hunger = 4;
    pet.fitness = 8;
    pet.age = 10;
    expect(pet.isAlive).toEqual(true);
  });
});

describe('deathMsg', () => {
  it('checkUp() thows an error message when the pet is no loner alive', () => {
    pet.hunger = 10;
    expect(pet.checkUp).toThrow('Your pet has died :\'(');
  });
  it('walk() thows an error message when the pet is no loner alive', () => {
    pet.fitness = 0;
    expect(pet.walk).toThrow('Your pet has died :\'(');
  });
  it('feed() thows an error message when the pet is no loner alive', () => {
    pet.hunger = 10;
    expect(pet.feed).toThrow('Your pet has died :\'(');
});
  it('growUp() thows an error message when the pet is no loner alive', () => {
    pet.age = 30;
    expect(pet.growUp).toThrow('Your pet has died :\'(');
  });
});