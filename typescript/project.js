"use strict";
// const anchor = document.querySelector('a');
// // if(anchor){
// // console.log(anchor.href)
// // }
// console.log(anchor)
// //interface
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
//  console.log(person2.name)
// }
// isme(me)
//forms
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        `${this.client} ows$${this.amount} for${this.details}`;
    }
}
const invone = new Invoice('yam', 'themaid', 222);
const invtwo = new Invoice('kwame', 'programer', 220);
let invorces = [];
invorces.push(invone);
invorces.push(invtwo);
console.log(invorces);
invorces.forEach((inv) => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
//inputs
const type = document.querySelector('#type');
const tofrom = document.getElementById('#tofrom');
const details = document.getElementById('#details');
const amount = document.getElementById('#amount');
form.addEventListener('Submit', (e) => {
    e.preventDefault();
    type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber;
});
