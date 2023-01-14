const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// Quando viene assegnato un oggetto a una variabile, le viene assegnato il riferimento a quell'oggetto e non viene quindi creata una copia di quell'oggetto. Perciò ogni modifica fatta a 'person2' si rifletterà anche su 'person1', questo perché entrambe le variabili si riferiscono allo stesso oggetto.