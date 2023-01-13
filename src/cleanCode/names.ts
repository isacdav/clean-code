(() => {
  // variable name changed fs -> filesToEvaluate
  const filesToEvaluate = [
    { id: 1, evaluate: false },
    { id: 2, evaluate: false },
    { id: 3, evaluate: true },
    { id: 4, evaluate: false },
    { id: 5, evaluate: false },
    { id: 7, evaluate: true },
  ];
  const filesToDelete = filesToEvaluate.map(file => file.evaluate);

  // Example of bad naming practices
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}
  // Better
  class User {}
  interface User {}

  // TODO: Change names

  const ddmmyyyy = new Date();
  const currentDay = new Date();

  const d: number = 23;
  const elapsedDays: number = 23;

  const dir = 33;
  const numberOfFiles = 33;

  const name = 'Fernando';
  const firstName = 'Fernando';

  const apellido = 'Herrera';
  const lastName = 'Herrera';

  const dsm = 12;
  const daysSinceUpdate = 12;

  const max = 6;
  const studentMaxClasses = 6;
})();
