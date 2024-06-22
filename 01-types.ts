let isCompleted: boolean = false;
let score: number = 88;
let message: string = 'TypeScript is fun!';
// score = "TypeScript!";
// Arrays
const evenNumbers: number[] = [2, 4, 6, 8, 10];
evenNumbers.push(12);
evenNumbers.forEach(i => console.log(i));
// Tuple
const employee: [string, string, number] = ['Hugo', 'Boss', 22062024];

employee[1] = 'Doe';
employee.push(45);
employee.forEach(j => console.log(j));

// Function
function printGreeting(name) {
    console.log(`Welcome, ${name}`);
}

printGreeting('Hugo');
printGreeting('Sam');
// Any
let data: any;
data = 1233;
data = true;
data = ' The world is mine';

let value: number | string;
value = 45;
value = 'forty five';

console.log(value);




