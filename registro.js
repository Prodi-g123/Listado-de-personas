const llenar = document.querySelector("h1");

llenar.addEventListener("click", () => {
        nombre.value = "Ricardo";
        telefono.value = "123456789";
        correo.value = "raul@gmail.com";
        puesto.value = "admin";
        responsabilidades.value = "ninguna";
})

//Campos del formulario
const form = document.querySelector("form");
const btnRegistrar = document.querySelector("#btn-registrar");
const nombre = document.querySelector("#nombre");;
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const puesto = document.querySelector("#puesto");
const fechaNacimiento = document.querySelector("#fecha-nacimiento");
const fechaRegistro = document.querySelector("#fecha-registro");
const responsabilidades = document.querySelector("#responsabilidades");

btnRegistrar.toggleAttribute("data-bs-toggle");

btnRegistrar.addEventListener("click", () => {
    

    //Div que contendrá los mensajes de error
    let errorNombre = document.querySelector("#error-nombre");
    let errorTelefono = document.querySelector("#error-telefono");
    let errorCorreo = document.querySelector("#error-correo");
    let errorPuesto = document.querySelector("#error-puesto");
    let errorFechaNacimiento = document.querySelector("#error-fecha-nacimiento");
    let errorFechaRegistro = document.querySelector("#error-fecha-registro");
    let errorResponsabilidades = document.querySelector("#error-responsabilidades");
    
    //Permite verificar que todos los campos esten completos para proseguir con el submit
    let errores = 0;

    //Limpia los campos para volver a revalidar los campos
    errorNombre.innerText = "";
    errorTelefono.innerText = "";
    errorCorreo.innerText = "";
    errorPuesto.innerText = "";
    errorFechaNacimiento.innerText = "";
    errorFechaRegistro.innerText = "";
    errorResponsabilidades.innerText = "";

    

    //validacion de todos los campos para que no se envie el formulario
    if (nombre.value === "" || nombre.value == null) {
        errores++;
        errorNombre.innerText = "El nombre es requerido";
    }

    if (telefono.value === "" || telefono.value == null) {
        errores++;
        errorTelefono.innerText = "El telefono es requerido";
    }
    if (correo.value === "" || correo.value == null) {
        errores++;
        errorCorreo.innerText = "El correo es requerido";
    }
    if (puesto.value === "" || puesto.value == null) {
        errores++;
        errorPuesto.innerText = "El puesto es requerido";
    }
 
    /*Fecha de nacimiento*/
    if (fechaNacimiento.value === "" || fechaNacimiento.value == null) {
        errores++;
        errorFechaNacimiento.innerText = "La fecha de nacimiento es requerida";   
    }
    else{
        if(!validarFecha(fechaNacimiento.value, "nacimiento")){
            errores++;
            errorFechaNacimiento.innerText = "La fecha debe ser entre 18 y 65 años de antiguedad"; 
        }
    }

    /*Fecha de registro*/
    if (fechaRegistro.value === "" || fechaRegistro.value == null) {
        errores++;
        errorFechaRegistro.innerText = "La fecha de registro es requerida";
    }
    else{
        if(!validarFecha(fechaRegistro.value, "registro")){
            errores++;
            errorFechaRegistro.innerText = "La fecha es invalida, debe ser menor o igual a la fecha actual, y tener 65 años de antiguedad o menos";
        }
    }

    if (responsabilidades.value === "" || responsabilidades.value == null) {
        errores++;
        errorResponsabilidades.innerText = "Las responsabilidades son requeridas";
    }

    if(errores > 0) {
        console.log(errores);
        
    }else{
       alert(`Se registró al empleado ${nombre.value} correctamente`); 
        nombre.value = "";
        telefono.value = "";
        correo.value = "";
        puesto.value = "";
        fechaNacimiento.value = "";
        fechaRegistro.value = "";
        responsabilidades.value = "";
    }
})


function validarFecha(fecha, tipoFecha){
    let fechaActual = new Date();
    let fechaFormato = new Date(fecha);
    
    let valido = false;

    if(tipoFecha === "nacimiento"){

        let fechaMinima = new Date(fechaActual.getFullYear() - 65, fechaActual.getMonth(), fechaActual.getDate());
        let fechaMaxima = new Date(fechaActual.getFullYear() - 18, fechaActual.getMonth(), fechaActual.getDate());

        if(fechaFormato >= fechaMinima && fechaFormato <= fechaMaxima){
            valido = true;      
        }
    } 
    
    if(tipoFecha === "registro"){
        let fechaMinima = new Date(fechaActual.getFullYear() - 65, fechaActual.getMonth(), fechaActual.getDate());
        let fechaMaxima = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());

        if(fechaFormato >= fechaMinima && fechaFormato <= fechaMaxima){
            valido = true;       
        }
    }
    
    return valido;

}