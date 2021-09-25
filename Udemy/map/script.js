//map: it creates another array so first array has the same values

const number = [1, 2, 3];
const doubleNumber = number.map((num) => {
  return num * 2;
});
console.log(number);
console.log(doubleNumber);
