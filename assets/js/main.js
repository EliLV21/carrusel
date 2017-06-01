var cargarPagina = function () {
	// Elementos
	var $botones = $(".control");
	var $anterior = $(".previous");
	var $siguiente = $(".next");

	// Eventos
	$botones.click(cambiarImagen);
	$anterior.click(anteriorImagen);
	$siguiente.click(siguienteImagen);
};

var cambiarImagen = function () {
	target =  $(this).data("target")
	console.log(target);
	mostrarImagen(target);
};
var mostrarImagen = function (target) {
	var lastSlide = $("div.active");
	var slide = $("div[data-slide='" + target + "']");
	lastSlide.removeClass("active");
	slide.addClass("active");
};

var anteriorImagen = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 3 : target;
	mostrarImagen(target);
};

var siguienteImagen = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 3) ? 0 : target;
	mostrarImagen(target);mostrarImagen(target);
};

$(document).ready(cargarPagina);
