//(1)
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)
//output is:"Tesla"
//output is:"Mercedes"
//(2)
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
console.log(otherName);
//output is:Error
//output is:"Elon"
//(3)
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
console.log(password);
console.log(hashedPassword);
//output is:"12345"
//output is:Undefined
//(4)
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(first == second);
console.log(first == third);
//output is:False
//output is:True
//(5)
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//output is:"value"
//output is:[1, 5, 1, 8, 3, 3]
//output is:1
//output is:5
