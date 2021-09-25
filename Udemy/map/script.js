//map(): creates another array so first array has the same values

const number = [1, 2, 3];
const doubleNumber = number.map((num) => {
  return num * 2;
});
console.log(number);
console.log(doubleNumber);

//find(): returns the first element which is match with the codition
const array1 = [5, 12, 8, 130, 44];
const find = array1.find((el) => el >= 10);

console.log(find);

//findindex(): returns the first index of element which is match with the condition
const isLargerThanTwelve = array1.findIndex((el) => el > 12);

console.log(isLargerThanTwelve);
