import { Livro } from "./Livro"

export class Usuario {
        
    nome: string
    id: number
    cpf: number
    emprestados: Livro[]
    reservados: Livro[]
    historicoEmprestimo: Livro[]
    multa: number

    constructor(nome: string, id: number, cpf: number, emprestados: Livro[], reservados: Livro[], historicoEmprestimo: Livro[], multa: number) {
        this.nome = nome
        this.id = id
        this.cpf = cpf
        this.emprestados = emprestados
        this.reservados = reservados
        this.historicoEmprestimo = historicoEmprestimo
        this.multa = multa
    }
} 
