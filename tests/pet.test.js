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
    pet.growUp();
    pet.growUp();
    expect(pet.age).toEqual(3);
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