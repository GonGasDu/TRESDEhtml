//Creo variable main para los html de las categrias.

let miInicio = ``

// Traigo info de data
for(let elemento of data){
    miInicio = miInicio +`

    <div class="tarjeta">
        <img src= "${elemento.image}" alt="producto">
        <div class="textocard">
            <h2> ${elemento.name} </h2>
            <p>Categoria: ${elemento.categoria}</p>
            <p> Subcategoria: ${elemento.subcategoria} </span> </p>
            <p>Precio: ${elemento.precio} </p>


            <!-- Agrego el botón para usar LocalStorage -->
            <button onclick="guardarLocalStorage('${elemento.name}')">Al carrito</button>
            
        </div>
    </div>
    
    
    
    `
}

//agrego las tarjetas de mi header

document.querySelector("main").innerHTML = miInicio

//agrego la funcion para guardar local
function guardarLocalStorage(productos){
    localStorage.setItem("productoSeleccionado", productos)   
}

//agrego funcion para mostrar el producto seleccionado

function mostrarCarrito(){
    console.log(localStorage.getItem("productoSeleccionado"))
    alert(localStorage.getItem("productoSeleccionado"))
}