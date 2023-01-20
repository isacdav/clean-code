// Classes
class Tesla {
  constructor(private numberOfSeats: number) {}

  getNumberOfTeslaSeats() {
    return this.numberOfSeats;
  }
}

class Audi {
  constructor(private numberOfSeats: number) {}

  getNumberOfAudiSeats() {
    return this.numberOfSeats;
  }
}

class Toyota {
  constructor(private numberOfSeats: number) {}

  getNumberOfToyotaSeats() {
    return this.numberOfSeats;
  }
}

class Honda {
  constructor(private numberOfSeats: number) {}

  getNumberOfHondaSeats() {
    return this.numberOfSeats;
  }
}

// Implement
(() => {
  const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda)[]) => {
    for (const car of cars) {
      if (car instanceof Tesla) {
        console.log('Tesla', car.getNumberOfTeslaSeats());
        continue;
      }
      if (car instanceof Audi) {
        console.log('Audi', car.getNumberOfAudiSeats());
        continue;
      }
      if (car instanceof Toyota) {
        console.log('Toyota', car.getNumberOfToyotaSeats());
        continue;
      }
      if (car instanceof Honda) {
        console.log('Honda', car.getNumberOfHondaSeats());
        continue;
      }
    }
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
