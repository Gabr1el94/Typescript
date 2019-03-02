/* TEST HELLO
var p = document.createElement('p');
var hello:string = "Gabriel Soares TS";

p.textContent = hello;
document.body.appendChild(p);
*/

// TYPES OF VARIABLES - PART 1

var num:number = 10;
var bool:boolean=true;
var str:string="Teste";
var str1:string='Teste';
var str2:string=`${str1} to Gabriel`;//theme string
//console.log(str2);
function func():void {}
if (bool !=null) {}
if (bool!=undefined) {}

if (bool) {

    let i:number; 
    for (let i = 0; i < 3; i++) {
        //console.log(i);
    }

}

//console.log("values"+i);

let list:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

//Tupla
let tuple:[string,number];
tuple=["Gabirel",50];
console.log(tuple[0].toLocaleUpperCase());
console.log(tuple[1]);

//Enum
enum Day{MONDAY=-1, TUESDAY,SATURDAY};
let day:Day = Day.MONDAY;
//console.log(`day: ${day} : ${Day.TUESDAY} : ${Day.SATURDAY}`);

// TYPES OF VARIABLES - PART 2
console.log("-------------------PART2------------------------")
/* NUMBER
   function add(v1:number,v2:number,v3?:number):number {
    if (v3!== undefined) {
        return v1+v2+v3;  
    } 
    return v1+v2;
 }
 
*/



function add(v1:any,v2:any,v3?:any):any {
  if (v3!== undefined) {
      return v1+v2+v3;  
  } 
  return v1+v2;
 }
 console.log(`add NUMBER:${add(2,3)}`);
 console.log(`add ANY:${add("Gabriel tem ",3)}`);

 let example: number;

// TYPES OF VARIABLES - PART 3
console.log("-------------------PART3------------------------")

//Cast FORCE
let ex1: any = "sasa";
let stringLength:number= (<string>ex1).length;
let stringUpper:string= (ex1 as string).toLocaleUpperCase();

console.log(`Length:${stringLength}`);
console.log(`UpperCase:${stringUpper}`);

//Rest Parameter
function add2(v1:string, ...v2:number[]):void {
    let sum: number= 0;
    for (let i = 0; i < 2; i++) {
        sum+=v2[i];
    }    
    console.log(v1+sum);
}

add2("Soma é:",1,5,4);