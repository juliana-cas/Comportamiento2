class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
      this.subordinates = [];
    }
  
    addSubordinate(subordinate) {
      this.subordinates.push(subordinate);
    }
  
    *[Symbol.iterator]() {
      yield this;
  
      for (const subordinate of this.subordinates) {
        yield* subordinate;
      }
    }
  
    toString() {
      return `Employee: ${this.name}, Position: ${this.position}`;
    }
  }
  
  

  