class Key {
  constructor(private signature: number) {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    const newKey = this.key.getSignature();
    return newKey;
  }
}

abstract class House {
  door = true || false;
  key: Key;
  tenants: Person[] = [];
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key);
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key === this.key) {
      this.door = true;
      console.log("Двері відчинено.");
    } else {
      console.log("Неправильний ключ. Двері не відкриються.");
    }
  }
}

const key = new Key(25);

const house = new MyHouse();
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
