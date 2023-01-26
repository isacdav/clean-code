/*
 * Interface segregation principle
 */

// Interface
interface BirdB {
  fly(): void;
  eat(): void;
  run(): void;
}

// Toucan and hummingbird can implement Bird
class ToucanB implements BirdB {
  public fly() {}
  public eat() {}
  public run() {}
}

class HummingbirdB implements BirdB {
  public fly() {}
  public eat() {}
  public run() {}
}

// Ostrich cannot implement one of the methods (breaking the principle)
class OstrichB implements BirdB {
  public fly() {
    throw new Error('Does not fly');
  }
  public eat() {}
  public run() {}
}

/*** Better way to implement classes and interfaces ***/
interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

interface RunningBird extends Bird {
  run(): void;
}

interface SwimmingBird extends Bird {
  swim(): void;
}

class Toucan implements FlyingBird {
  public fly() {}
  public eat() {}
}

class Hummingbird implements FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements SwimmingBird {
  public eat() {}
  public swim() {}
}
