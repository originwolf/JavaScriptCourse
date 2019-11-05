function trocaCorClaro() {
	//general function
	document.getElementById('claro').style.display = 'none'
	document.getElementById('escuro').style.display = 'inline'
	//sobremim Section
	document.getElementById('sobremim').style.background = "#cecece"
	document.getElementById('sobremim').style.color = "#25221A"
	document.getElementById('meusDados').style.color = "#25221A"
	document.getElementById('meApresenta').style.color = "#25221A"
	document.getElementById('minhaFoto').style.border = "1px solid black"
	//habilidades Section
	document.getElementById('habilidades').style.background = "#cecece"
	document.getElementById('habilidades').style.color = "#25221A"
	document.getElementById('divHab1').style.color = "#25221A"
	document.getElementById('divHab2').style.color = "#25221A"
	document.getElementById('divHab3').style.color = "#25221A"
}

function trocaCorEscuro() {
	//general function
	document.getElementById('escuro').style.display = 'none'
	document.getElementById('claro').style.display = 'inline'
	//sobremim Section
	document.getElementById('sobremim').style.background = "#25221A"
	document.getElementById('sobremim').style.color = "#cecece"
	document.getElementById('meusDados').style.color = "#cecece"
	document.getElementById('meApresenta').style.color = "#cecece"
	document.getElementById('minhaFoto').style.border = "1px solid white"
	//habilidades Section
	document.getElementById('habilidades').style.background = "#25221A"
	document.getElementById('habilidades').style.color = "#cecece"
	document.getElementById('divHab1').style.color = "#cecece"
	document.getElementById('divHab2').style.color = "#cecece"
	document.getElementById('divHab3').style.color = "#cecece"
}

// <div class="p-2 font-weight-bold">
// 	<button id="claro" type="button" onclick="trocaCorClaro()" class="btn btnMenu contato">Modo Claro</button>
// 	<button id="escuro" type="button" onclick="trocaCorEscuro()" class="btn btnMenu contato" style="display: none;">Modo Escuro</button>
// </div>