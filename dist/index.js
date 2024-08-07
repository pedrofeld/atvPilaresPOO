"use strict";
/*
1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.
*/
console.log('---------------------------- ATIVIDADE 01 ----------------------------');
class Ingresso {
    valorReais;
    constructor(valorReais) {
        this.valorReais = valorReais;
    }
    imprimeValor() {
        return this.valorReais;
    }
}
// extends para fazer a herança
class Normal extends Ingresso {
    constructor(valorReais) {
        super(valorReais); //super para herdar o atributo da classe mãe
    }
    imprimeValor() {
        return super.imprimeValor();
    }
}
class VIP extends Ingresso {
    valorAdicional;
    constructor(valorReais, valorAdicional) {
        super(valorReais);
        this.valorAdicional = valorAdicional;
    }
    imprimeValor() {
        return super.imprimeValor() + this.valorAdicional;
    }
}
class Camarote extends Ingresso {
    valorAdicional;
    constructor(valorReais, valorAdicional) {
        super(valorReais);
        this.valorAdicional = valorAdicional;
    }
    imprimeValor() {
        return super.imprimeValor() + this.valorAdicional;
    }
}
const ingressoNormal = new Normal(20);
console.log("Valor do ingresso normal:", ingressoNormal.imprimeValor());
const ingressoVIP = new VIP(20, 30);
console.log("Valor do ingresso VIP:", ingressoVIP.imprimeValor());
const ingressoCamarote = new Camarote(20, 80);
console.log("Valor do ingresso camarote:", ingressoCamarote.imprimeValor());
/*
2. Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto.
*/
console.log('---------------------------- ATIVIDADE 02 ----------------------------');
class Imovel {
    endereco;
    preco;
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }
}
class Novo extends Imovel {
    precoAdicional;
    constructor(endereco, preco, precoAdicional) {
        super(endereco, preco);
        this.precoAdicional = precoAdicional;
    }
    mostraValorAdicional() {
        return this.precoAdicional;
    }
    imprimeValorTotal() {
        return this.preco + this.precoAdicional;
    }
}
class Velho extends Imovel {
    desconto;
    constructor(endereco, preco, desconto) {
        super(endereco, preco);
        this.desconto = desconto;
    }
    mostrarDesconto() {
        return this.desconto;
    }
    imprimeValorTotal() {
        return this.preco - this.desconto;
    }
}
const imovelNovo = new Novo("Rua Bananinha, 123", 300000, 50000);
console.log("Endereço do imóvel novo:", imovelNovo.endereco);
console.log("Preço base do imóvel novo:", imovelNovo.preco);
console.log("Valor adicional do imóvel novo:", imovelNovo.mostraValorAdicional());
console.log("Valor total do imóvel novo sem desconto:", imovelNovo.imprimeValorTotal());
const imovelVelho = new Velho("Rua Moranguinho, 321", 250000, 50000);
console.log("Endereço do imóvel velho:", imovelVelho.endereco);
console.log("Preço base do imóvel velho:", imovelVelho.preco);
console.log("Desconto do imóvel velho:", imovelVelho.mostrarDesconto());
console.log("Valor total do imóvel velho com desconto:", imovelVelho.imprimeValorTotal());
/*
3. Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.
*/
console.log('---------------------------- ATIVIDADE 03 ----------------------------');
class Animal {
    comida;
    tipoDeSom;
    quantidadePatas;
    constructor(comida, tipoDeSom, quantidadePatas) {
        this.comida = comida;
        this.tipoDeSom = tipoDeSom;
        this.quantidadePatas = quantidadePatas;
    }
    emitirSom() {
        console.log(`O animal faz o som: ${this.tipoDeSom}`);
    }
    comer() {
        console.log(`O animal come: ${this.comida}`);
    }
}
class Cachorro extends Animal {
    nivelDeLealdade;
    constructor(comida, tipoDeSom, quantidadePatas, nivelDeLealdade) {
        super(comida, tipoDeSom, quantidadePatas);
        this.nivelDeLealdade = nivelDeLealdade;
    }
    mostrarLealdade() {
        console.log(`O cachorro demonstra um nível de lealdade: ${this.nivelDeLealdade}`);
    }
}
class Cavalo extends Animal {
    serveParaTransporte;
    constructor(comida, tipoDeSom, quantidadePatas, serveParaTransporte) {
        super(comida, tipoDeSom, quantidadePatas);
        this.serveParaTransporte = serveParaTransporte;
    }
    transportar() {
        if (this.serveParaTransporte) {
            console.log("O cavalo pode ser usado para transporte.");
        }
        else {
            console.log("Este cavalo não é usado para transporte.");
        }
    }
}
class Gato extends Animal {
    autolimpeza;
    constructor(comida, tipoDeSom, quantidadePatas, autolimpeza) {
        super(comida, tipoDeSom, quantidadePatas);
        this.autolimpeza = autolimpeza;
    }
    limpar() {
        if (this.autolimpeza) {
            console.log("O gato se limpa sozinho.");
        }
        else {
            console.log("Este gato precisa de ajuda para se limpar.");
        }
    }
}
const cachorro = new Cachorro("ração", "latido", 4, 10);
console.log('CACHORRO');
cachorro.emitirSom();
cachorro.comer();
cachorro.mostrarLealdade();
const cavalo = new Cavalo("capim", "relincho", 4, true);
console.log('CAVALO');
cavalo.emitirSom();
cavalo.comer();
cavalo.transportar();
const gato = new Gato("peixe", "miado", 4, true);
console.log('GATO');
gato.emitirSom();
gato.comer();
gato.limpar();
