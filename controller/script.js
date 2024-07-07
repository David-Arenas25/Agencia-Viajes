import { listarUsuarios,validarFormulario, filtrarPorUsuarios,acumulado, filtrarPorCiudad } from "./usuario.js";

// Función para guardar el usuario


// Esperar a que el DOM esté completamente cargado antes de asignar el evento





document.getElementById('my-users-btn').addEventListener("click",listarUsuarios)


let inputs = document.querySelectorAll("input");
inputs.forEach((element) => {
  element.addEventListener("keyup", validarFormularioScript)})


  document.getElementById('filter-users-btn').addEventListener("click",mostrarUsuariosFiltradosInicio)
  document.getElementById('enviar').addEventListener("click",validarFormularioScript)
  document.getElementById('mostrar-filtro-btn').addEventListener("click",mostrarAcumulado)
  document.getElementById('mostrar-ciudad-btn').addEventListener("click",filtrarCiudad)





export function validarFormularioScript () {

  validarFormulario();

}

export function mostrarUsuariosFiltradosInicio () {

  filtrarPorUsuarios();

}


export function mostrarAcumulado(){

  acumulado()

}


export function filtrarCiudad(){
  filtrarPorCiudad()
}


