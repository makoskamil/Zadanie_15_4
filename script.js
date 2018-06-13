//zadanie 1
const addedStrings = (string1='Hello', string2='world') => console.log(`${string1} ${string2}`);
addedStrings();

//zadanie 2
const multiply = (number1 = 1, number2 = 1) => number1 * number2;
console.log(multiply(2));
console.log(multiply(6,4));

//zadanie 3
const average = (...args) => {
    let sum = 0;
    args.forEach(arg => {sum += arg});
return (`Srednia liczb wynosi: ${sum/args.length}`);
}

//zadanie4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);

//zadanie5
const array = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, ,lastName]=array;

console.log(`The frist name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);