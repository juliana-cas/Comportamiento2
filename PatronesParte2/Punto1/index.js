// Create an organization with a hierarchical structure
const ceo = new Employee('Juan Guzman', 'CEO');
const cto = new Employee('Laura Betancourt', 'CTO');
const cfo = new Employee('Juliana Martinez', 'CFO');

ceo.addSubordinate(cto);
ceo.addSubordinate(cfo);

const softwareEngineer1 = new Employee('Maria Gallego', 'Software Engineer');
const softwareEngineer2 = new Employee('David Quiceno', 'Software Engineer');

cto.addSubordinate(softwareEngineer1);
cto.addSubordinate(softwareEngineer2);

const accountant1 = new Employee('Mauricio Fernandez', 'Accountant');
const accountant2 = new Employee('Sandra Arango', 'Accountant');

cfo.addSubordinate(accountant1);
cfo.addSubordinate(accountant2);

const organization = new Organization(ceo);

// Iterate over the organization structure
for (const employee of organization) {
  console.log(employee.toString());
}
