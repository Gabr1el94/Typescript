class Persons {
    private _name: string

    constructor(name: string) {
        this.name = name;
    }

    print(): void {
        console.log(`seu nome: ${this.name}`);
    }

    get name():string{
        return this._name;
    }

    set name(value:string){
        this._name = value;
    }
}

class Employees extends Persons {
    private _salary: number;
    constructor(name: string, salary: number) {
        super(name)
        this._salary = salary;
    }

    print(): void {
        super.print();
        console.log(`com salário de ${this.salary}`);
    }

    get salary():number{
        return this._salary
    }

    set salary(value:number){
        this._salary = value;
    }

}

let p1 = new Persons("Gabriel");
let emp1 = new Employees("Kátia", 1200);
p1.print();
emp1.name="Luiz";
emp1.print();

/* Polimorfismo e Modificadores de acesso */
console.log("-------------------PART2------------------------")
let p2 = <Persons>{};
let p3: Persons = new Employees("Lucas", 5000);
p3.name="Otávio"
p3.print();


