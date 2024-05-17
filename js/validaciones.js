(function(){
    // Variables
    var formulario = document.getElementById('formulario'),
        elementos = formulario.elements;

    // Función para validar el campo de nombre
    var validarNombre = function(){
        if (formulario.firstname.value.trim() === ''){
            alert("Por favor, completa el campo nombre.");
            return false;
        }
        return true;
    };

    // Función para validar el campo de apellido
    var validarApellido = function(){
        if (formulario.lastname.value.trim() === ''){
            alert("Por favor, completa el campo apellido.");
            return false;
        }
        return true;
    };

    // Función para validar el campo de teléfono
    var validarTelefono = function(){
        if (formulario.telefono.value.trim() === ''){
            alert("Por favor, completa el campo teléfono.");
            return false;
        }
        return true;
    };

    // Función para validar el campo de email
    var validarEmail = function(){
        if (formulario.email.value.trim() === ''){
            alert("Por favor, completa el campo email.");
            return false;
        }
        return true;
    };

    // Función para validar el campo de dirección
    var validarDireccion = function(){
        if (formulario.direccion.value.trim() === ''){
            alert("Por favor, completa el campo dirección.");
            return false;
        }
        return true;
    };

    // Función para validar el campo de interés
    var validarInteres = function(){
        if (formulario.interes.value === ''){
            alert("Por favor, selecciona tu interés.");
            return false;
        }
        return true;
    };

    // Función para validar el campo de términos y condiciones
    var validarTerminos = function(){
        if (!formulario.terms.checked){
            alert("Por favor, acepta los términos y condiciones.");
            return false;
        }
        return true;
    };

     // Función para validar la selección de imagen
     var validarImagen = function(){
        var input = document.getElementById('foto');
        var archivo = input.files[0]; // Obtener el primer archivo seleccionado (en caso de que haya más de uno)

        // Verificar si se seleccionó un archivo
        if (archivo) {
            // Verificar el tipo del archivo
            var tipo = archivo.type.split('/')[0]; // Obtener el tipo de archivo (por ejemplo, 'image' para una imagen)

            // Verificar si el tipo de archivo es una imagen
            if (tipo !== 'image') {
                // Si no es una imagen, mostrar un mensaje de error
                alert("Por favor, selecciona solo imágenes.");
                input.value = ''; // Limpiar el campo de entrada de archivos
                return false; // Detener el envío del formulario
            }
        }
        return true; // Permitir el envío del formulario si se selecciona una imagen o no hay ninguna seleccionada
    };

    // Función para validar todos los campos del formulario
    var validar = function(e){
        var hayError = false;
        hayError |= !validarNombre();
        hayError |= !validarApellido();
        hayError |= !validarTelefono();
        hayError |= !validarEmail();
        hayError |= !validarDireccion();
        hayError |= !validarInteres();
        hayError |= !validarTerminos();
         hayError |= !validarImagen();

        if (hayError) {
            e.preventDefault();
        }
    };

    // Agregar evento 'submit' al formulario para llamar a la función validar
    formulario.addEventListener("submit", validar);
}());

