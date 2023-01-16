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
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)





//classes
class Invoice{
  client:string
  details:string
   amount:number
constructor(c:string, d:string,a:number){
    this.client =c;
    this.details = d;
    this.amount = a
}

format(){
    `${this.client} ows$${this.amount} for${this.details}`
}
}

const invone = new Invoice('yam', 'themaid',  222);
const invtwo = new Invoice('kwame', 'programer',  220);

let invorces: Invoice[] = [];
invorces.push(invone);
invorces.push(invtwo);

console.log(invorces)


invorces.forEach((inv) =>{
    console.log(inv.client, inv.details,inv.amount,inv.format())
})

//inputs
const type =  document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.getElementById('#tofrom') as HTMLInputElement;
const details = document.getElementById('#details') as HTMLInputElement;
const amount = document.getElementById('#amount') as HTMLInputElement;

form.addEventListener('Submit' , (e: Event) => {
    e.preventDefault();
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
}) 
 






















