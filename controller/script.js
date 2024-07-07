import { filtrarPorUsuarios,acumulado, filtrarPorCiudad } from "./filtro.js";
import { listarUsuarios } from "./usuario.js";
import { validarFormulario } from "./validaciones.js";



let inputs = document.querySelectorAll("input");
inputs.forEach((element) => {
  element.addEventListener("keyup", validarFormularioScript)})


  document.getElementById('mostrar-todos').addEventListener("click",mostrarDatos)
  document.getElementById('enviar').addEventListener("click",listar)



  export function validarFormularioScript(){
    validarFormulario()
  }


export function listar(){
  validarFormulario()
}


export function mostrarDatos(){
  listarUsuarios()
  filtrarPorUsuarios()
  acumulado()
  filtrarPorCiudad()
}






