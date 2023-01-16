"use strict";
// console.log('efeefef')
// let username:[number, string];
// username = [1, '2']
// //explcit the variables before we give them a value
// let character: string;
// let age: number;
// let login:boolean;
// let price: null;
// //arrays
// let fruits: string[] = [];
// fruits = ['pawpaw','mango','cashew']
// //union type it means if u want to mix the data types / u want more than one data type
// let mix: (string|number)[] =  [];
//  mix= ['pawpaw','mango', 40]
// let ud : string|boolean;
//  ud = 'kofi';
//  ud = true;
//  //obbjects
//  let person:{
//     name:string,
//     age:number,
//     text:string
//  }
//  person ={
//     name:'john',
//     age:20,
//     text:'john is going to school'
//  }
//  console.log(person)
//  let person1: object;
//  person1 = {
//     place: 'kumasi',
//     years: 2022,
//     country: 'kumasi'
//  }
// //dynamics (any) types this allows the varaibel to  accept any data types
//  let grade : any;
//  grade = 'john'
//  grade = [1,2,3,4,5,{},[]]
// grade = {}
// let grade1: {name: any, contact:any,birth:any}
// //beter workflows & tsconfig == 
// //function basics
// const add = ((a:number, b:number, c?: number|boolean) =>{
//   console.log(a + b)
// })
// add(1, 2 );
// //function basics
// const greet = (a:number, b:number , c:number|string ) => {
//  return a + b;
// }
// let result = greet(10, 10, 10);
// //alliases
// type addnum = string|Number;
// type multi = string|Number;
// type users = {
//     name: string,
//     price?: number
// }
// const data:users = {
//     name: 'Kofi'
// }
//  const prices = (a:users , b:multi):number => {
//      return 8
//  }
//  let k:number;
// let l:number;
// const adding = (k:number,l:number) =>{
//     return k + l
// }
// //function signature
// //example 1
// let pay:(p:string, m:string) => void;
//  pay = (name:string, ans:string) =>{
//    console.log( `this${name}, the ans is ${ans}`) 
//  }
// //exam 2 
// let calc: (a:number, b:number , c?:string) => number; 
// calc = (a,b) =>{
//     return a + b
// }
// console.log(calc(10,20)  ) 
// //exam 3
// let islogin:(obj:{name:string , age:number}) => void;
// islogin = (info:{name: string, age:number}) =>{
//     console.log(`my name is ${name} and ${age}`)
// }
// class
// class infomation{
//     person:string;
//     contact:number;
//     place:string|string;
//     constructor(p:string, c:number,pp:string){
//         this.person = p;
//         this.contact = c;
//         this.place = pp;
//     }
//     getdaa(){
//     return `${this.person}, ${this.contact},${this.place}`
//     } 
// }
// let infomation1 = new infomation('yaw',233,'kumasi')
// console.log(infomation1)
// let infomation2 = new infomation('kwaku',453,'accra')
// infomation2.getdaa;
// console.log(infomation2)
// //casting
// let x: unknown  = 'hello';
// console.log(x as string)
//interface
// interface isperson {
//     name:string,
//     age:number,
//     speak(a:string): void;
//     spend(b:number): number;
// }
// const  me: isperson ={
//     name:'john',
//     age:30,
//     speak(text:string): void{
//         console.log(text)
//     },
//     spend(amount:number): number{
//         console.log(amount)
//         return amount;
//     }
// }
// console.log(me)
// let someone: isperson;
// someone = {
//     name:'john',
//     age:30,
//     speak(text:string): void{
//         console.log(text)
//     },
//     spend(amount:number): number{
//         console.log(amount)
//         return amount;
//     }
// }
// const isme = (person2: isperson) =>{
//     console.log(person2.name)
//    }
//    isme(me)
//enums if not this den diff thing
var bookk;
(function (bookk) {
    bookk[bookk["mathsbook"] = 0] = "mathsbook";
    bookk[bookk["englishbook"] = 1] = "englishbook";
})(bookk || (bookk = {}));
// generics
let pass = (obj) => {
    let uid = {};
    return Object.assign(Object.assign({}, obj), { uid });
};
let pass1 = pass({ name: 'john' });
const gender = {
    uid: 1,
    per: "john",
    book: bookk.englishbook,
    data: { name: "limit" }
};
//tuples === it helps you explicit the data type , but u cant reverse it 
//it should look like the same
const food = ['kk', true, { id: 1, log: true }];
food[0] = "bamku";
food[1] = false;
//wrap up 
