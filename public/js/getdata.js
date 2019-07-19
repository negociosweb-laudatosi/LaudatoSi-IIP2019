$(document).ready(function(){
    console.log('Hola mundo');
    $("#get-data-form").submit(function(e){
        tinyMCE.triggerSave();
        if (tinyMCE) tinyMCE.triggerSave(); 
        if (edit.value ==''){
        	alert('El contenido no puede estar en blanco.');
        	edit.focus();
        	return false;
        }
        console.log(edit.value);
        console.log('adios');
    });
});