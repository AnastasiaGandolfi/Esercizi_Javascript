/* function sum(num1, num2, num3) {
  return num1 + num2 + num3;
} */

function sum(...numbers) {
  const total = numbers.reduce((acc,curr) => acc + curr);
  return total;
}



const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));

