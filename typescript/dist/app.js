"use strict";
console.log('efeefef');
let username;
username = [1, '2'];
//explcit the variables before we give them a value
let character;
let age;
let login;
let price;
//arrays
let fruits = [];
fruits = ['pawpaw', 'mango', 'cashew'];
//union type it means if u want to mix the data types / u want more than one data type
let mix = [];
mix = ['pawpaw', 'mango', 40];
let ud;
ud = 'kofi';
ud = true;
//obbjects
let person;
person = {
    name: 'john',
    age: 20,
    text: 'john is going to school'
};
console.log(person);
let person1;
person1 = {
    place: 'kumasi',
    years: 2022,
    country: 'kumasi'
};
//dynamics (any) types this allows the varaibel to  accept any data types
let grade;
grade = 'john';
grade = [1, 2, 3, 4, 5, {}, []];
grade = {};
let grade1;
//beter workflows & tsconfig == 
//function basics
const add = ((a, b, c) => {
    console.log(a + b);
});
add(1, 2);
//function basics
const greet = (a, b, c) => {
    return a + b;
};
let result = greet(10, 10, 10);
const data = {
    name: 'Kofi'
};
const prices = (a, b) => {
    return 8;
};
let k;
let l;
const adding = (k, l) => {
    return k + l;
};
//function signature
//example 1
let pay;
pay = (name, ans) => {
    console.log(`this${name}, the ans is ${ans}`);
};
//exam 2 
let calc;
calc = (a, b) => {
    return a + b;
};
console.log(calc(10, 20));
//exam 3
let islogin;
islogin = (info) => {
    console.log(`my name is ${name} and ${age}`);
};
//casting
let x = 'hello';
console.log(x);
