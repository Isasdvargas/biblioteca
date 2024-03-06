import { GeneroLivro } from "./GeneroLivro";
import { StatusLivro } from "./StatusLivro";

export class Livro{

    nome: string
    genero: GeneroLivro 
    autor: string
    status: StatusLivro

    constructor(nome: string, genero: GeneroLivro, autor: string, status: StatusLivro){

        this.nome = nome
        this.genero = genero
        this.autor = autor
        this.status = status

    }
}