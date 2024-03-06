import { GeneroLivro } from "./GeneroLivro";
import { Livro } from "./Livro";
import { StatusLivro } from "./StatusLivro";
import { Usuario } from "./Usuario";


export class Biblioteca {
    livros:Livro[]
    usuarios: Usuario[]
    status: StatusLivro
    genero: GeneroLivro 

    constructor(livros: Livro, usuarios: Usuario, status: StatusLivro, genero: GeneroLivro){
        this.livros =  []
        this.usuarios = []
        this.status = status
        this.genero = genero
    }

    livrosDisponiveis(): void{
        if (this.status === StatusLivro.DISPONIVEL) {
            console.log(`Livros disponíveis: ${this.status === StatusLivro.DISPONIVEL}`)
        }else{
            console.log("Erro")
        }
    }
    
    listaEmprestados(): void{
        if (this.status === StatusLivro.EMPRESTADO) {
            console.log(`Livros emprestados: ${this.status === StatusLivro.EMPRESTADO}`)
        }else{
            console.log("Erro")
        }
    }
    
    listaAtrasados(): void{
        if (this.status === StatusLivro.ATRASADO) {
            console.log(`Livros atrasados: ${this.status === StatusLivro.ATRASADO}`)
        }else{
            console.log("Erro")
        }
    }

    cadastroUsuario(usuarios): void{
            this.usuarios.push(usuarios)
    }
    
    // historicoEmprestimo(): string
    //emprestimo(): string
    // reserva(): string
    // verMulta(): string
    
    listaGenero(): void{
        if (this.genero === GeneroLivro.ROMANCE) {
            console.log(`Livros de romance: ${this.genero === GeneroLivro.ROMANCE}`)
        }else if(this.genero === GeneroLivro.TERROR){
            console.log(`Livros de terror: ${this.genero === GeneroLivro.TERROR}`)
        }else if(this.genero === GeneroLivro.SUSPENSE){
            console.log(`Livros de suspense: ${this.genero === GeneroLivro.SUSPENSE}`)
        }else if(this.genero === GeneroLivro.COMEDIA){
            console.log(`Livros de comedia: ${this.genero === GeneroLivro.COMEDIA}`)
        }else if(this.genero === GeneroLivro.DISTOPIA){
            console.log(`Livros de distopia: ${this.genero === GeneroLivro.DISTOPIA}`)
        }
    }
}