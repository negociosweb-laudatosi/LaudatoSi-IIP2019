
/*/importando swal
import Swal from 'sweetalert2';
import Axios from 'axios';
// Obtener el botón desde el DOM
const btnEliminar = document.querySelector('#eliminar-proyecto');
btnEliminar.addEventListener('click', e => {
    // Eliminar tarea
if  (e.target.classList.contains('id')){
    // Obteniendo el HTML del articulo
    // Necesitamos acceder al elemento HTML <li></li>
    const articuloHTML = e.target.parentElement.parentElement;
    // Obtener el id de la tarea
    const idProyecto = articuloHTML.dataset.proyecto;

    // Mostrar una alerta de Sweet Alert
    Swal.fire({
        title: '¿Estás seguro que deseas borrar este artículo?',
        text: '¡No podrás recuperar esta informacións!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value) {
            // Enviar el delete mediante Axios
            const url = `${location.origin}/proyecto/${idProyecto}`;

            Axios.delete(url, {params : { idProyecto } })
                .then(function(respuesta){
                    if (respuesta.status === 200) {
                        // Eliminar el nodo <li></li> desde el padre
                        articuloHTML.parentElement.removeChild(articuloHTML);

                        // Mostrar un mensaje de eliminación realizada
                        Swal.fire(
                            'Tarea eliminada',
                            respuesta.data,
                            'success'
                        )
                    }
                })
        }
    })
}
});
*/
