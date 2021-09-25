//spread on objects
const object = {
  name: "azar",
};

const newObject = {
  ...object,
  age: 30,
};

console.log(newObject);

//spread on functions

const filter = (...args) => args.filter((el) => el === 1);

console.log(filter(1, 2, 3));
