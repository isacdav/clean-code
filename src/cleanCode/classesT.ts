// Course task
(() => {
  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElement {
    public element: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor(id: string, value: string, placeholder: string) {
      this.element = new HtmlElement(id, 'input');
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement('input_name', 'Axl', 'Enter first name');

  console.log(nameField);
})();
