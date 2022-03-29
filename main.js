var characters = undefined;
var filtro = undefined;
var productos = undefined;
var cantidad_de_elementos = undefined;
var orden_de_elementos = undefined;
var arrayPersonajes = [];

if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}else{
	ready();
}
function ready(){
	productos = document.getElementById('listaProductos');
	cantidad_de_elementos = document.getElementById('elementos');
	orden_de_elementos = document.getElementById('orden');
	cantidad_de_elementos.addEventListener('input', updateView);
	orden_de_elementos.addEventListener('input', reorder);
	fetch("http://hp-api.herokuapp.com/api/characters")
	.then(function(response){
		response.json().then(function(respjson){
			characters =  respjson;
			for(var i = 0; i < characters.length; i++){
				const personaje = {
					id: i,
					name: characters[i].name,
					alternate_names: characters[i].alternate_names,
					species: characters[i].species,
					gender: characters[i].gender,
					house: characters[i].house,
					dateOfBirth: characters[i].dateOfBirth,
					yearOfBirth: characters[i].yearOfBirth,
					wizard: characters[i].wizard,
					ancestry: characters[i].ancestry,
					eyeColour: characters[i].eyeColour,
					hairColour: characters[i].hairColour,
					wand: characters[i].wand,
					patronus: characters[i].patronus,
					hogwartsStudent: characters[i].hogwartsStudent,
					hogwartsStaff: characters[i].hogwartsStaff,
					actor: characters[i].actor,
					alternate_actors: characters[i].alternate_actors,
					alive: characters[i].alive,
					image: characters[i].image
				}
				localStorage.setItem(i.toString(), JSON.stringify(personaje));
				arrayPersonajes.push(personaje);
			}
			//console.log(arrayPersonajes);
			updateView();
		}).catch(err=>{
			console.log(err);
		});
	})
	.catch(err=>{
		console.log(err);
	});
}

function reorder() {
	if(orden_de_elementos.value == "nombreAscendente"){
		arrayPersonajes.sort(function(a,b){
			let x = a.name.toLowerCase();
			let y = b.name.toLowerCase();
			if (x<y)
				return -1;
			if (x>y)
				return 1;
			return 0;
		})
	}
	if(orden_de_elementos.value == "nombreDescendente"){
		arrayPersonajes.sort(function(a,b){
			let x = a.name.toLowerCase();
			let y = b.name.toLowerCase();
			if (x<y)
				return 1;
			if (x>y)
				return -1;
			return 0;
		})
	}
	if(orden_de_elementos.value == "precioAscendente"){
		arrayPersonajes.sort(function(a,b){return -a.yearOfBirth+b.yearOfBirth});
	}
	if(orden_de_elementos.value == "precioDescendente"){
		arrayPersonajes.sort(function(a,b){return -b.yearOfBirth+a.yearOfBirth});
	}
	//console.log(arrayProductos);
	updateView();
}
function updateView(){
	productos.innerHTML='';
	for(let i = 0; i<cantidad_de_elementos.value; i++){
		productos.innerHTML+='<div class="producto"><a href="personaje.html?id='+arrayPersonajes[i].id+'"><img src="'+arrayPersonajes[i].image+'"></a><div><h2><a href="personaje.html">'+arrayPersonajes[i].name+'</a></h2><div><h3>'+arrayPersonajes[i].house+'</h3></div><div><h3>Año de nacimiento</h3><h3>'+arrayPersonajes[i].yearOfBirth+'</h3></div><div><a href="personaje.html?id='+arrayPersonajes[i].id+'"><button id="'+i+'">Ver más</button></a></div></div></div>'
	}
	addListenersProductos();
}
function addListenersProductos(){
	// var productos = document.getElementsByClassName('producto');
	// for(let i=0; i < productos.length; i++){
	// 	productos[i].children[1].children[3].children[2].addEventListener('click', clickAgregar);
	// 	productos[i].children[1].children[3].children[1].addEventListener('change', cantidadCambio);
	// 	//console.log(productos[i].children[1].children[3].children[1]);
	// }
}