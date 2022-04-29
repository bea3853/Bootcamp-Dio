class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}
// this se refere ao objeto
//sempre que for ter um get e um set é legal que tenha um _, no caso do saldo não vai retornar o mesmo valor 
// 

set saldo(valor) {
	this._saldo = valor;
}

get saldo() {
	return this._saldo;
}

	sacar(valor) {
		if (valor > this._saldo) {
			return 'Saque negado, insuficiente!';
		}

		this._saldo = this._saldo - valor;


		return this._saldo;
	}



	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}

	
}


// abrimos outra class  que vai receber conta corrente 
//5

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero,  cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}


}

//6 conta poupança 

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}


//8 conta universitaria
class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Op negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}


