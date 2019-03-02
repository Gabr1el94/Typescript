// Interfaces

function printName(person:{name:string}):void {
    console.log(person.name);
}

let randomObj = {
    name:"Gabriel",
    age: 25
}

let randomObj2 = {
    age: 20
}

//printName(randomObj2);

interface Person{
    name:string;
    age?:number;
}
interface Employee extends Person{
    salary:number;
}

let pe: Person = {name:"Gabriel Soares"};
let emp: Employee = {name:"Gabriel Silva",salary:2000.00};

printName(pe);
printName(emp);

function printName2(person:{name:string, salary?:number}):void {
   if (person.salary===undefined) {
    console.log(`${person.name}`);
   }else{
    console.log(`${person.name} - ${person.salary}`);
   }
}

printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({name:"Test"} as Employee);

interface Manager extends Employee{
    readonly bonus:number;
}

let manager:Manager = {name:"Gabriel",salary:1500,bonus:2.5};
manager.name = "Alterado";
printName2(manager);