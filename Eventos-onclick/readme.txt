   Há 3 formas onde podemos por nossos scripts JS no documento HTML.
Cada local tem seus prós e contras.

Obs:
	No console do navegador conseguimos rodar o JS na hora.



Exemplo da aula: 

	console.log(){
		document.getElementyById("teste")
	}

	O console deve mostrar:

	<div id="teste">Texto da div</div>




Exemplo 2:

	console.log(){
		document.getElementyById("teste").innerHTML
	}

	Por conta do innerHTML o console deve mostrar:

	Texto da div




Pratica Pessoal:

	var botaovar = document.getElementById("botaoid").innerHTML = 		"Botão Clicado"

	Com o código acima, consegui mudar o texto do botão quando ele foi 		clicado.

