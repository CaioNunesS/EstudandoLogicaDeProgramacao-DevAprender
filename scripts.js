

// let altura = 160;
// console.log (altura);

// let nome = 'Caio'; //string literal

// let idade = 24; //number literal
// let aprovado = true; //boolean
// let sobrenome = null //redefinir um valor 

// let pessoa = {
//     nome: 'Caio',
//     idade: 24,
//     sobrenome: 'nunes',
//     estaAprovado: true
// };
// console.log (pessoa);

// // Verbo + Substantivo//

// let corSite = "preto";
// function resetaCor(cor,tonalidade){
// corSite = cor + tonalidade;
//  }
// console.log(corSite);
// resetaCor("verde"," escuro");
// console.log(corSite)


//operadores aritméticos


// let salario = 100;
// console.log (salario + salario);
// console.log (salario - salario);
// console.log (salario * salario);

// console.log (++salario);

// console.log (--salario);

//operadores de atribuiçao

// let valorTecladoGamer = 100;
// valorTecladoGamer += valorTecladoGamer;
// console.log (valorTecladoGamer);

// operadores de igualdade//
// Igualdade estrita - Recomendada
// console.log ( 1 === 1 );
// console.log ( "1" === 1 );

//igualdade solta - Nao recomendada
// console.log( 1 == 1 );
// console.log ( '1' == 1);

//Operador Ternário//

// cliente, 100 premium, comum
// let pontos = 110;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log (tipo);

//Operadores Logicos//

//Operador Logico e (&&)
// Retona true se os dois operandos forem true

// let maiorDeIdade = false;
// let carteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && carteiraDeTrabalho;
// console.log (podeAplicar);

//Operador Logico ou (||)
//Retorna true se um dos operadores for true

// let maiorDeIdade = false;
// let carteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || carteiraDeTrabalho;
// console.log(podeAplicar);

//Operador Logico Not (!)
// let maiorDeIdade = false;
// let carteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || carteiraDeTrabalho;
// console.log('pode aplicar: ',podeAplicar)

// let candidatoRecusado = !podeAplicar;
// console.log('Recusado: ',candidatoRecusado);

//Comparações nao Beleanos://
//Falsy -
//undefined
//null
//o
//false
//''
//NaN - not a number

//Truthy-

// let corPersonalizada = '';
// let corPadrao = 'azul';
// let corPerfil = corPersonalizada || corPadrao;
// console.log (corPerfil)

//"Mini-Projeto 1" - Trocando Valores de Variaveis//

// let a = 'vermelho';
// let b = 'azul';

// let c = a;
//  a = b;
//  b = c;

// console.log(a);
// console.log(b)
//

//if..else//

//Se a hora estiver entre 05:00 até 12:00 : Bom dia!
//Se a hora estiver entre as 12:00 até as 18:00 : Boa tarde!
//Caso contrário : Boa noite!
// let hora = 13;

// if (hora > 6 && hora < 12){
//     console.log("Bom dia!");
// }
// else if (hora > 12 && hora < 18){
//     console.log("Boa tarde!");
// }
// else {
//     console.log("Boa noite!");
// }


//Switch..Case//

// let permissao; //comum,gerente,diretor
// permissao = 'gerente';
// switch (permissao){
//     case 'comum':
//     console.log('usuario comum');
//     break;

//     case 'gerente':
//     console.log('usuario gerente');
//     break;

//     case 'diretor':
//     console.log('usuario diretor');
//     break;

//     default:
//         console.log('usuário não reconhecido')
// }

//Loop For//

// 1. For

// for(let i = 1; i <= 5; i++){
//     console.log('Estou aprendendo' ,i);

// }

// 2. While
// let i = 5;
// while(i >= 1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i --;
// }

// 3. Do..while
// let i = 1;
// do {
//     console.log('digitando' ,i);
//     i++;
// } while (i < 10)

// 4. For..in
// const pessoa = {
//     nome: 'Caio',
//     idade: 24
// };

// for (let chave in pessoa)
//     console.log(chave , pessoa);

//     const cores = ['vermelho','azul','verde'];

//     for (let indice in cores){
//         console.log(indice,cores[indice])
//     }

// // 5.For..of
// for(let cor of cores){
//     console.log(cor);
// }

//mini-projeto2 - Escreva uma funçao que usa 2 numeros e retorna o maior entre eles

// let maiorNumero = max(2,9);
// console.log(maiorNumero)

// function max(numero1,numero2){
//     if(numero1 > numero2)
//     return numero1;
//     else return numero2;
// }
//ou
//     let maiorNumero = max(2,9);
//     console.log(maiorNumero)

//     function max(numero1,numero2){
//    return numero1>numero2 ? numero1: numero2;
// }

//

//mini-projeto3 - fizzBuzz//

//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => entrada
//Nao é um numero => 'Nao é um numero'

// const resultado = fizzBuzz(15);
// console.log(resultado);

// function fizzBuzz(entrada){
//     if ( typeof entrada !== 'number')
//         return 'Não é um número';
//     if (entrada % 3 === 0 && entrada % 5 === 0)
//         return 'fizzbuzz';
//     if ( entrada % 3 === 0)
//         return 'fizz';
//     if (entrada % 5 === 0)
//         return 'Buzz';

//     return entrada;    
// }

// Mini-projeto 4 - Medidor de velocidade//

// Velocidade max de até 70
//a cada 5km acima do limite voce ganha 1 ponto
// usar Math.floor
//caso pontos maior que 12 -> "Carteira Suspendida"

// let velocidadeMax = max();
// console.log( velocidadeMax );

// verificarVelocidade(74);

// function verificarVelocidade (velocidade){
//     const velocidadeMax = 70;
//     const kmPorPonto = 5;
//     if (velocidade <= velocidadeMax)
//         console.log ('okay') ;
//     else {
//         const pontos = Math.floor(((velocidade - velocidadeMax) / kmPorPonto));
//         if ( pontos >= 12)
//         console.log('Carteira Suspensa');
//         else
//             console.log('pontos', pontos)
//     }

// }

//miniProjeto5 - Par ou Impar//

// Receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

// exibirTipo(8);
// function exibirTipo(limite){
//     for (let i = 0; i <= limite; i++)
//     if (i % 2 === 0)
//     console.log(i, 'par')
//     else 
//     console.log(i, 'impar');
// }

// MiniProjeto6 - Encontre a String//

//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto

// const filme = {
//     título : 'Batman',
//     ano : 2022,
//     ator : 'robert',
//     personagem : 'batman'
// }
// exibirPropriedades(filme);
// function exibirPropriedades(obj){
//   for (prop in obj)
//   if (typeof obj[prop] === 'number')
//   console.log(prop, obj[prop])
// }

//miniProjeto7 - multiplos de 3 e 5//

//Criar uma funçao somar que retorna a soma de todos os multiplos de 3 e 5

//Multiplos de 3
//3,6,9
//multiplos de 5
//5,10

//Somando os multiplos
// armazenar os multiplos de 3
//armazenar os multiplos de 5
// somar os dois

// somar(18);
// function somar (limite){
//     let multiplosDe3 = 0;
//     let multiplosde5 = 0;
//     for (i = 0; i <= limite; i++){
//     if (i % 3 === 0)
//     multiplosDe3 += i;
//     if(i % 5 === 0)
//     multiplosde5 += i;
// }
// console.log(i = multiplosDe3 + multiplosde5);

// }

//miniProjeto8 - Media de Notas//

//Obter a média a partir de um array]
// 0-59: f
//60-69: d
//70-79: c
//80-89: b
//90-100: a

// const array = [80,50,70,80];

// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas){
//     const media = calcularMedia(notas);

//     if (media < 59) return 'F';
//     if (media < 69) return 'D';
//     if (media < 79) return 'C';
//     if (media < 89) return 'B';
//     return 'A'

// }
// function calcularMedia(array){
//     let resultado = 0;
//     for (let valor of array){
//         resultado += valor;
//     }
//     return media = resultado/ (array.length);
// }

//miniProjeto9 - Contador de asteristicos//

//criar uma funçao que exibe a quantidade de * que aquela linha possui

// exibirAsteristicos(8);

// function exibirAsteristicos(linhas) {

// let padrao = '';
// for (let linha = 1; linha <= linhas; linha++){
//     padrao += '*';
//     console.log(padrao);
// }

//ou
//     for (let linha = 1; linha <= linhas; linha++) {
//         let padrao = "";
//         for (let i = 0; i < linha; i++) {
//             padrao += '*';
//         }
//         console.log(padrao)
//     }
// }

//miniProjeto10 - Números primos//

//Criar função para mostrar os números primos

//Primos
//Compostos

// exibirNumerosPrimos(10)

// function exibirNumerosPrimos(limite){
//    for(let numero = 2; numero <= limite; numero++){
//     let ehPrimo = true;

//     for(let divisor = 2; divisor <numero; divisor++){
//          if(numero % divisor === 0){
//             ehPrimo = false;
//             break;
//          }
//    }

//        if (ehPrimo) console.log(numero);
//   }
// }

// pontosCorridos();

// let times = {
//     SaoPaulo: 10,
//     Palmeiras: 8,
//     curintias: 1,
//     santos: 7,
//     flamengo: 1
// }
// console.log(times)

// function pontosCorridos(pontos){

//      for(let ponto = 0; ponto <= pontos; ponto++ ){
//      if(ponto >= pontos)


//     }
// }



//refazendo

//#1

let a = 'vermelho';
let b = 'azul';
let c = a;

a = b;
b = c;

// console.log(a);
// console.log(b);

//#2

function maiorNumero(num1, num2) {
    if (num1 >= num2)
        return num1
    else return num2;

}

// console.log(maiorNumero(9,10))

//#3
function fizzBuzz(number) {
    if (number % 5 === 0, number % 3 === 0)
        return "fizzBuzz";
    if (number % 3 === 0)
        return "fizz";
    if (number % 5 === 0)
        return "buzz";

}
// console.log(fizzBuzz(15));

//#4


function radarDeVelocidade(velocidade) {
    const velocidadeMax = 70;
    const pontosPorKm = 5;

    if (velocidade <= velocidadeMax)
        return "Okay"
    else {
        const pontos = Math.floor(((velocidade - velocidadeMax) / pontosPorKm));
        if (pontos >= 12) {
            console.log("Carteira suspensa");
        } else {
            console.log(pontos + " pontos")
        }
    }

}

// radarDeVelocidade(129);

//miniProjeto5 - Par ou Impar//

// Receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

function ParOuImpar(num) {
    for (i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i + ' Par')
        }
        else {
            console.log(i + ' Impar')
        }
    }
}
// ParOuImpar(10);

// MiniProjeto6 - Encontre a String//

//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto

const cadastro =
{
    Nome: 'Caio',
    Sobrenome: 'Nunes',
    Idade: 24,
    RG: 376411648

}


function leitorDeStrings(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'number')
            console.log(prop, obj[prop])
    }
}
// leitorDeStrings(cadastro);

//miniProjeto7 - multiplos de 3 e 5//

//Criar uma funçao somar que retorna a soma de todos os multiplos de 3 e 5

//Multiplos de 3
//3,6,9
//multiplos de 5
//5,10

function somaMultiplos(num) {

    for (i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ' multiplo de ambos')
        }
        else if (i % 3 === 0) {
            console.log(i + ' multiplo de 3')
        } else if (i % 5 === 0) {
            console.log(i + ' multiplo de 5')
        }
    }
}
// somaMultiplos(100);

//miniProjeto8 - Media de Notas//

//Obter a média a partir de um array]
// 0-59: f
//60-69: d
//70-79: c
//80-89: b
//90-100: a

let notas = [5, 5, 5, 5];

function mediaNotas(array) {
    let soma = array.reduce(function (acumulador, i) {
        return acumulador + i
    })
    return soma / notas.length
}

// console.log(mediaNotas(notas));


//miniProjeto9 - Contador de asteristicos//

//criar uma funçao que exibe a quantidade de * que aquela linha possui

let contadorAsteristico = function (linhas) {

    for (linha = 0; linha <= linhas; linha++) {
        let sinal = ''
        for (i = 0; i < linha; i++) {
            sinal += '*';
        }
        console.log(sinal)
    }

}

//miniProjeto10 - Números primos//

//Criar função para mostrar os números primos

//Primos
//Compostos

let primosECompostos = function (num) {
    for (let numero = 2; numero <= num; numero++) {
        let ehPrimo = true;

        for (let divisor = 2; divisor <= numero; divisor++) {
            if (numero % divisor === 0) {
                ehPrimo = false;
                break;
            }
        }
       
       if (ehPrimo) console.log(numero);
    }
}

primosECompostos(9);

// exibirNumerosPrimos(10)

function exibirNumerosPrimos(limite){
   for(let numero = 2; numero <= limite; numero++){
    let ehPrimo = true;

    for(let divisor = 2; divisor < numero; divisor++){
         if(numero % divisor === 0){
            ehPrimo = false;
            break;
         }
   }

       if (ehPrimo) console.log(numero);
  }
}
















































