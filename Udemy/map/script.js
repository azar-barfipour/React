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
console.log(array1);
console.log(find);

//findindex(): returns the first index of element which is match with the condition
const isLargerThanTwelve = array1.findIndex((el) => el > 12);
console.log(array1);
console.log(isLargerThanTwelve);

//filter(): creates another array with all element that match with the codition
const filter = array1.filter((el) => el >= 12);
console.log(array1);
console.log(filter);

//reduce(): returns sum of the all elemts in the array
const reduce = array1.reduce((preValue, nextValue) => {
  return preValue + nextValue;
});
console.log(array1);
console.log(reduce);

//concat(): creates another array which is arr1 + arr2

const array2 = [8, 10, 50, 60];
const array3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(array3);
