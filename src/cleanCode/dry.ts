type Size = 'S' | 'M' | 'L' | 'XL';

// Code repeated
class ProductWrong {
  constructor(public name: string, public price: number, public size: Size) {}

  toString() {
    if (this.name.length <= 0) throw Error('Name is empty');
    if (this.price <= 0) throw Error('Price is zero');
    if (this.size.length <= 0) throw Error('Size is empty');

    return `${this.name} | $${this.price} | ${this.size}`;
  }
}

// Reusable code
class Product {
  constructor(public name: string, public price: number, public size: Size) {}

  isProductValid(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if (<number>this[key] <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }

  toString() {
    if (!this.isProductValid()) {
      return '';
    }
    return `${this.name} | $${this.price} | ${this.size}`;
  }
}

// Tests
(() => {
  // console.log(new ProductWrong().toString());
  // console.log(new Product('Shirt', 0).toString());
  console.log(new Product('Shirt', 10, 'M').toString());
})();
