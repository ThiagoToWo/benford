function primeiroDigito(numero) {
	var dig = numero;
	var fator = 10;
	
	while (dig >= 10) {
		dig = Math.floor((dig) / 10);
	}

	return dig;
}