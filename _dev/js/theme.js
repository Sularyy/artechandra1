/**
 * This is the entry point for specific javascript of theme
 */
 $(document).ready(function() {
//alert('el documento está preparado');
//---------------Pie de pagina---------------------------------------
    $('div.block-contact').addClass('elementoFooter');
    var idiv;
    var sdiv;
    var fdiv;
    idiv=$('<div id="informacion" class="elementoFooter">');
    sdiv=$('<div id="miCuenta" class="elementoFooter">');
    fdiv=$('</div>');
    $('div.block-contact').after(idiv);
    $('#informacion').after(sdiv);
    $('#footer h3:first').appendTo('#informacion');
    $('#footer ul:first').appendTo('#informacion');
    $('#footer h3').eq(1).appendTo('#miCuenta');
    $('#footer ul').eq(1).appendTo('#miCuenta');
    console.log('el documento está preparado');

  //----------------menu despegable para filtrar---------------------------------
    $('#menuDesplegable').mouseover(function(){
      $('#menuDesplegable').css('cursor', 'pointer');
      $('.menuhidden').css('visibility','visible');
    }
  );
  $('#prueba').mouseleave(function(){
   $('.menuhidden').css('visibility','hidden');
  }
);

});
