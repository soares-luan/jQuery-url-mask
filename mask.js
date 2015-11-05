$(document).ready(function() {
//função de máscara para link
$(".url").on('keydown',function(e){
    e.preventDefault();
    
    if($(this).val() != ''){
        if(window.urlDigitada == undefined){
            var texto = $(this).val();
            window.urlDigitada = texto.replace('http://www.','');    
        }
        
    }
    if(190 == e.keyCode){  //adiciono um ponto
        if(window.urlDigitada != undefined){
            window.urlDigitada = window.urlDigitada +'.';    
            $(this).val('http://www.'+window.urlDigitada);    
        }
    }else if(193 == e.keyCode){ //adiciono uma barra
        if(window.urlDigitada != undefined){
            window.urlDigitada = window.urlDigitada +'/';    
            $(this).val('http://www.'+window.urlDigitada);    
        }
    }else if(e.keyCode == 8){ //backspace
        if(window.urlDigitada != undefined || window.urlDigitada != ''){
            var tamanho = window.urlDigitada.length;
            window.urlDigitada = window.urlDigitada.substr(0,tamanho -1);

            $(this).val('http://www.'+window.urlDigitada);    
        }else{
            $(this).val('http://www.');
        }
    }else if((e.keyCode >= 65 && e.keyCode <= 90) && (isNaN(String.fromCharCode(e.keyCode)))){
        var letra = String.fromCharCode(e.keyCode).toLowerCase();
        if(window.urlDigitada != undefined){
            window.urlDigitada = window.urlDigitada + letra;    
        }else{
            window.urlDigitada = letra;
        }
        $(this).val('http://www.'+window.urlDigitada);    
    }
    
});
});