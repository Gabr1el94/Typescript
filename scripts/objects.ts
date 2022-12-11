type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja ={
    nome: 'Sapatênis',
    preco:89.90,
    unidades:5
}

console.log(`o produto ${meuProduto.nome} tem ${meuProduto.unidades} unidades`);