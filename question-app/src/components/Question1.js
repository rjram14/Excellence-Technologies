// Question 1
// Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only

function question1(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      arr.push(array[i]);
    }
    return arr;
  }
}
question1([2, 1, 4, 5, 67, 8]);
