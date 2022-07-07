// Como podemos melhorar o esse código usando TS? 

import { type } from "os";

type Men = {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa1: Men = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};

let pessoa2: Men = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};

let pessoa3: Men = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Men = {
    nome: "carlos",
    idade:  19,
    profissao: "padeiro"
}