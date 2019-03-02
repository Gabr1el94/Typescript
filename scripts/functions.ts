 //Named Functions
function print1(val?:string):void {
    console.log(val);
}
 
function printOrNot(flag:boolean = false):void {
    let str = flag ? "flag is true" : "flag is false"
    console.log(str); 
}

printOrNot(true);

//Anonymous - Função sem nome
let sumAnonymous = function(n1:number,n2:number):void{
    console.log(`sum: ${n1+n2}`)
};

sumAnonymous(2,3);

sumAnonymousNot(5,5);

function sumAnonymousNot (n1:number,n2:number):void{
    console.log(`sum: ${n1+n2}`)
};

// Type's of return
let sumArrow = (n1:number,n2:number) => n1 + n2;
let sumArrow2 = (n1:number,n2:number) => {return n1 + n2};
let objArrow = (name:string,surname:string) => ({name:name,surname:surname})

console.log(sumArrow(6,6));
console.log(sumArrow2(8,6));
console.log(objArrow('Gabriel','Soares'));

/* THIS */
console.log("-------------------PART2------------------------")

function testTHIS() {
    return this;
}
//console.log(testTHIS());
//console.log(this);
let objExample = {
    name: "Jaraya",
    lastName:"Ninja",
    fullname: function () {
        return this;
    },
    fullname2: () => {
        return this;
    },
    thisExample:this
}

console.log(objExample.thisExample);
console.log(objExample.fullname());
console.log(objExample.fullname2());

let lotter = {
    names:["Gabriel","Gabriela","Kátia"],
    test:"rsrs",

    createLotterPicker: function () {
        console.log("first level this: "+this.names+" "+this.test)
        
        return () => {
            console.log("secound level this: "+this)
            let pickerPersonNumber = Math.floor(Math.random() * 3)
            return {name:this.names[pickerPersonNumber]}
        }

    }

}

let personPicker = lotter.createLotterPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);

//AUTO-FUNCTION
(()=>{
    console.log("AUTO FUNCTION WITH SUCCESSFULL! :)");   
})();