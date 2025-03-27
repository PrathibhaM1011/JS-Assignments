//1 st Question Answer

const person = { 
    name: "John Doe", 
    age: 30, 
    address: { 
    city: "New York", 
    country: "USA" 
    }, 
    hobbies: ["Reading", "Traveling"] 
    };

let {name, age, address:{city, country,}, hobbies} = person;

let [hobby, ,] = hobbies;
let firstHobby = hobby;
console.log(firstHobby);

//2nd Question

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

let [fruit1, fruit2, ...remain] = fruits;

new Array = remain;

[fruit1 , fruit2] = [fruit2, fruit1]

console.log(fruit1, fruit2);

// 3rd Question

function sumNumbers(...n){
    return n.reduce( (sum,next) => sum+next );
}

console.log(sumNumbers(1, 2, 3, 4));
console.log(sumNumbers(10, 20, 30));

//4th Question

const user = { name: "Alice", age: 25 }; 
const job = { title: "Developer", company: "TechCorp" };
let userProfile = {...user, ...job, experience : "2 years"};
console.log(userProfile);

//5th Question

const numbers = [1, 2, 3, 4, 5];

let array = [...numbers]

array.unshift(0);
array.push(6);

console.log(array)

