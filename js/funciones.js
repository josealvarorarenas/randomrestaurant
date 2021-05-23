$(document).ready( function(){

    console.log("Documento Cargado")

});



$(".boton_formulario").click( function() {
    
    console.log("Hago clic sobre formulario");
    
    $(this).css({ 
        "transition-duration":"1s",
        "z-index":"10",
    });

    $(".screen_fixed").css({ 
        "width": "100vw",
        "height": "100vh",
        "z-index":"9",
        "background": "rgba(0,0,0,0.5)",
       
    });

});

$(".boton_formulario").click(function(){
    
    
    $(".boton_formulario").addClass("menu_open")
    
});

$(".screen_fixed").click(function(){
    
    
    $(".screen_fixed").css({ 
        "width": "0",
        "height": "0",
        "z-index":"20",
        "background": "rgba(0,0,0,0)",
       
    });

    $(".boton_formulario").toggleClass("menu_open")
    
});












