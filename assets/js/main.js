/*PATRON DE MODULO*/

$(function(){
  var moduloCarrusel = (function(){
    var imgs = {};
    imgs.el = $("#carrusel");
    imgs.items = {
      panel: imgs.el.find(".contenedorbase")
    }
    /*VARIABLES*/
     var sliderInterval,
         currentSlider = 0,
         nextSlider = 1,
         lenghtSlider = imgs.items.panel.length;
    /*INICIAR*/
    imgs.init = function(settings){
      sliderInit();
    }
    var sliderInit = function(){
      sliderInterval = setInterval(imgs.startSlider,3000);
    }
    imgs.startSlider = function(){
      var panel = imgs.items.panel;
      if (nextSlider >= lenghtSlider){
        nextSlider = 0;
        currentSlider = lengthSlider-1;
      }
      /*EFECTOS*/
      panels.eq(currentSlider).fadeOut("slow");
      panels.eq(nextSlider).fadeIn("slow");


      /*ACTUALIZAMOS DATOS*/
      currentSlider = nextSlider;
      nextSlider += 1;
    }
    return imgs;
  }());
  moduloCarrusel.init();
});
