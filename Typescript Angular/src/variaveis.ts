

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Stark";
let idade: number = 30;
let altura: number = 1.75;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
  name: "Capitão America",
  cidade: "MT",
  idade: 30,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Escudo",
  preco: 89.99,
  unidades: 5,
};



let dados: string[] = ["Stark", "Viuva Negra", "Hulk"];
let dados2: Array<string> = ["Stark", "Viuva Negra", "Hulk"];

let infos: (string | number)[] = [322, "Stark"];

let boleto: [string, number, number] = ["Conta de Agua", 199.9, 32342342];


dados.pop();


let aniversario: Date = new Date("2026-12-01 11:00");
console.log(aniversario.toString());