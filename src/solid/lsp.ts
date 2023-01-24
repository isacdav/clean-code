/*
 * Liskov substitution principle
 */

// Interfaces
interface Car {
  getNumberOfSeats: () => number;
}

// Classes
class Tesla implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

class Audi implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

class Toyota implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

class Honda implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

class Ford implements Car {
  constructor(private numberOfSeats: number) {}

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

// Implement
(() => {
  const printCarSeats = (cars: Car[]) => {
    cars.forEach(car => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Ford(6),
  ];

  printCarSeats(cars);
})();
