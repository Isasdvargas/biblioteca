"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(nome, genero, autor, status) {
        this.nome = nome;
        this.genero = genero;
        this.autor = autor;
        this.status = status;
        // this.dataEmprestimo =this.dataEmprestimo
    }
    return Livro;
}());
exports.Livro = Livro;
