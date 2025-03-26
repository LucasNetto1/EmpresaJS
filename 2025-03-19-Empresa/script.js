class Funcionario {
    constructor(nome, salario, dataAdmissao) {
        this.nome = nome;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;
    }

    calcularBonus() {
        return (this.salario / 100) * 10;
    }

    exibirDetalhes() {
        console.log(`Funcionário Nome: ${this.nome}, Salário: ${this.salario}, Data de Admissão: ${this.dataAdmissao}, Bônus: ${this.calcularBonus()}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, dataAdmissao, departamento) {
        super(nome, salario, dataAdmissao); 
        this.departamento = departamento;
    }

    calcularBonus() {
        return (this.salario / 100) * 20; 
    }

    exibirDetalhes() {
        console.log(`Gerente Nome: ${this.nome}, Salário: ${this.salario}, Data de Admissão: ${this.dataAdmissao}, Departamento: ${this.departamento}, Bônus: ${this.calcularBonus()}`);
    }
}

const funcionario1 = new Funcionario("Lucas", 1000, "2002-03-29");
const gerente1 = new Gerente("João", 5000, "2002-07-29", "Vendas");

funcionario1.exibirDetalhes(); 
gerente1.exibirDetalhes(); 