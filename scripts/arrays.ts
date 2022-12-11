//Arrays normal
let dados: string[] = ["gabriel","arthur","kátia"]
let dados2: Array<string> = ["v","a","q"];

console.log(dados);
console.log(dados2);

//---------------------MultiTypes--------------------------------
let infos: (string | number)[] =["gabriel",80,1.90,"kátia",50];
console.log(infos);
//---------------------Tuplas--------------------------------
let boleto:[string,number,number] = ["200", 199.90, 2151541];
console.log(boleto);