visualizacionProducto = undefined;
if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}else{
	ready();
}
function ready(){
	console.log(location.search.slice(4));
	personaje_guardado = localStorage.getItem(location.search.slice(4).toString());
	if (personaje_guardado){
		personaje_guardado = JSON.parse(personaje_guardado);
	}
	else{
		personaje_guardado = null;	
		return;
	}
	console.log(personaje_guardado);
	visualizacionProducto = document.getElementById('visualizacionProducto');
	visualizacionProducto.innerHTML = '<div class="imagenProducto"><img src="'+personaje_guardado.image+'"></div><div class="productoDetallado"><h1>'+personaje_guardado.name+'</h1><div class="division2"><h2>Alternate Names</h2><h2>'+personaje_guardado.alternate_names+'</h2></div><div class="division2"><h2>Species</h2><h2>'+personaje_guardado.species+'</h2></div><div class="division2"><h2>Gender</h2><h2>'+personaje_guardado.gender+'</h2></div><div class="division2"><h2>House</h2><h2>'+personaje_guardado.house+'</h2></div><div class="division2"><h2>Date of Birth</h2><h2>'+personaje_guardado.dateOfBirth+'</h2></div><div class="division2"><h2>Year of Birth</h2><h2>'+personaje_guardado.yearOfBirth+'</h2></div><div class="division2"><h2>Wizard</h2><h2>'+personaje_guardado.wizard+'</h2></div><div class="division2"><h2>Ancestry</h2><h2>'+personaje_guardado.ancestry+'</h2></div><div class="division2"><h2>Eye Colour</h2><h2>'+personaje_guardado.eyeColour+'</h2></div><div class="division2"><h2>Hair Colour</h2><h2>'+personaje_guardado.hairColour+'</h2></div><div class="division2"><h2>Wand</h2><h2>'+JSON.stringify(personaje_guardado.wand)+'</h2></div><div class="division2"><h2>Patronous</h2><h2>'+personaje_guardado.patronus+'</h2></div><div class="division2"><h2>Hogwarts Student</h2><h2>'+personaje_guardado.hogwartsStudent+'</h2></div><div class="division2"><h2>Hogwarts Staff</h2><h2>'+personaje_guardado.hogwartsStaff+'</h2></div><div class="division2"><h2>Actor</h2><h2>'+personaje_guardado.actor+'</h2></div><div class="division2"><h2>Alternate actors</h2><h2>'+personaje_guardado.alternate_actors+'</h2></div><div class="division2"><h2>Alive</h2><h2>'+personaje_guardado.alive+'</h2></div></div>';
}