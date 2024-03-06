import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { GeneroLivro } from "./GeneroLivro";
import { StatusLivro } from "./StatusLivro";
import { Biblioteca } from "./Biblioteca";

const livro1 = new Livro ("Jogos Vorazes", GeneroLivro.DISTOPIA, "Suzanne Collins", StatusLivro.DISPONIVEL);
const livro2 = new Livro ("É assim que acaba", GeneroLivro.ROMANCE, "Colleen Hoover", StatusLivro.DISPONIVEL);
const livro3 = new Livro ("O diário de chaves", GeneroLivro.COMEDIA, "Roberto Gómez", StatusLivro.RESERVADO);
const livro4 = new Livro ("It a coisa", GeneroLivro.TERROR, "Stephen King", StatusLivro.EMPRESTADO);
const livro5 = new Livro ("O homem de giz", GeneroLivro.SUSPENSE, "C.J. Tudor", StatusLivro.ATRASADO);

const usuario1 = new Usuario('Isadora Vargas', 26, 23875688082, [livro4], [], [livro1], 22);
const usuario2 = new Usuario('Murilo Rihan', 8, 12309865477, [], [livro3], [livro4], 0);
const usuario3 = new Usuario('Arthur Henrique', 27, 12770688880, [], [livro1], [], 66);
const usuario4 = new Usuario('Gaia Silveira', 4, 33875688082, [], [livro5], [livro1, livro2, livro3, livro4], 40);
const usuario5 = new Usuario('Rosangela Vianna', 24, 43875688082, [], [livro2], [livro5], 1000);

