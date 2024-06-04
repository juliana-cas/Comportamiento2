class Organization {
  constructor(rootEmployee) {
    this.rootEmployee = rootEmployee;
  }

  *[Symbol.iterator]() {
    yield* this.rootEmployee;
  }
}

