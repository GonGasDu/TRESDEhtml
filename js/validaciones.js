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

        if (hayError) {
            e.preventDefault();
        }
    };

    // Agregar evento 'submit' al formulario para llamar a la función validar
    formulario.addEventListener("submit", validar);
}());
