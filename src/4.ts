class Key {
  constructor(private signature: number) {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  constructor(protected key: Key) {}
  protected door = false;
  protected tenants: Person[] = [];
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key);
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері відчинено.");
    } else {
      console.log("Неправильний ключ. Двері не відкриються.");
    }
  }
}

const key = new Key(25);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
