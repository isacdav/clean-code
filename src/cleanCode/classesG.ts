// Better examples of classes
// And applying single responsibility principle
(() => {
  // Types and interfaces
  type Gender = 'F' | 'M';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  interface UserProps {
    email: string;
    role: string;
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  interface UserSettingsProps {
    person: Person;
    user: User;
    settings: Settings;
  }

  // Classes
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({ person, user, settings }: UserSettingsProps) {
      // reassigned because they are passed by reference
      this.person = person;
      this.user = user;
      this.settings = settings;
    }
  }

  const person = new Person({
    gender: 'M',
    name: 'User X',
    birthdate: new Date('2000-10-16'),
  });
  const user = new User({
    email: 'user@google.com',
    role: 'Admin',
  });
  const settings = new Settings({
    lastOpenFolder: '/home',
    workingDirectory: '/usr/home',
  });

  const userSettings = new UserSettings({ person, user, settings });

  console.log(userSettings);
})();
