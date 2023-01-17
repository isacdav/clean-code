(() => {
  const reds = ['manzana', 'cereza', 'ciruela'];
  function isRedFruit(fruit: string): boolean {
    return reds.includes(fruit);
  }

  type Color = 'red' | 'yellow' | 'purple';

  const redFruits = ['manzana', 'fresa'];
  const yellowFuits = ['piña', 'banana'];
  const purpleFruits = ['moras', 'uvas'];

  function getFruitsByColor(color: Color, newFn?: boolean): string[] {
    if (newFn) return getFruitsByColor2(color);

    switch (color) {
      case 'red':
        return redFruits;
      case 'yellow':
        return yellowFuits;
      case 'purple':
        return purpleFruits;
      default:
        throw Error('the color must be: red, yellow, purple');
    }
  }

  const fruitsByColor = {
    red: ['manzana', 'fresa'],
    yellow: ['piña', 'banana'],
    purple: ['moras', 'uvas'],
  };

  function getFruitsByColor2(color: Color): string[] {
    if (!Object.keys(fruitsByColor).includes(color))
      throw Error('the color must be: red, yellow, purple');

    return fruitsByColor[color];
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking) return 'Fourth step broken.';
    return 'Working properly!';
  }

  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' });
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });

  console.log({ redFruits: getFruitsByColor('red') });
  console.log({ yellowFruits: getFruitsByColor('yellow') });
  console.log({ purpleFruits: getFruitsByColor('purple') });
  // console.log({ pinkFruits: getFruitsByColor('pink') });
  console.log({ purpleFruits: getFruitsByColor('purple', true) });

  console.log({ workingSteps: workingSteps() });
})();
