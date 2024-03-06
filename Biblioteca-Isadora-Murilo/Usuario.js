"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, id, cpf, emprestados, reservados, historicoEmprestimo, multa) {
        this.nome = nome;
        this.id = id;
        this.cpf = cpf;
        this.emprestados = emprestados;
        this.reservados = reservados;
        this.historicoEmprestimo = historicoEmprestimo;
        this.multa = multa;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
