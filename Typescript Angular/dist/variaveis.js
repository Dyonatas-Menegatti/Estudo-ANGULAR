"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Stark";
let idade = 30;
let altura = 1.75;
// tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "Capitão America",
    cidade: "MT",
    idade: 30,
};
let meuProduto = {
    nome: "Escudo",
    preco: 89.99,
    unidades: 5,
};
let dados = ["Stark", "Viuva Negra", "Hulk"];
let dados2 = ["Stark", "Viuva Negra", "Hulk"];
let infos = [322, "Stark"];
let boleto = ["Conta de Agua", 199.9, 32342342];
dados.pop();
let aniversario = new Date("2026-12-01 11:00");
console.log(aniversario.toString());
//# sourceMappingURL=variaveis.js.map