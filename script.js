//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  makeSound() {
    super.makeSound();
  }

  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  makeSound() {
    super.makeSound();
  }

  purr() {
    console.log("purr");
  }
}

window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;