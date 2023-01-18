// Bad examples of classes
(() => {
  type Gender = 'F' | 'M';

  // Class below can be simplified
  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  // Classes below doesn't fulfill Single Responsibility
  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const person = new Person('Isaac', 'M', new Date());
  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'user@google.com',
    'Admin',
    'User X',
    'M',
    new Date('2000-10-16')
  );

  console.log(person);
  console.log(userSettings);
})();
