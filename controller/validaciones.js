import { usuarios } from "./usuario.js";

export function validarFormulario() {

  const name = document.getElementById('name').value.trim();
  const documento = document.getElementById('documento').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const plan = document.getElementById('plan').value;
  const city = document.getElementById('city').value;
  let tarifa =0

  // Expresión regular para nombre (solo letras y espacios, máximo 60 caracteres)
  const nombreRegex = /^[A-Za-z\s]{1,60}$/;

  if (!nombreRegex.test(name)) {
    console.log('El nombre debe contener solo letras y espacios, y no más de 60 caracteres.');
    return;
  }

  // Validación de documento (solo números, no más de 20 caracteres)
  const documentoRegex = /^\d{1,20}$/;

  if (!documentoRegex.test(documento)) {
    console.log('El documento debe contener solo números y no más de 20 caracteres.');
    return;
  }

  // Validación de teléfono (solo números, no más de 20 caracteres)
  const telefonoRegex = /^\d{1,20}$/;

  if (!telefonoRegex.test(phone)) {
    console.log('El teléfono debe contener solo números y no más de 20 caracteres.');
    return;
  }

  if (address === '') {
    console.log('La dirección no puede estar vacía.');
    return;
  }

  if (plan === '') {
    console.log('Por favor seleccione un plan.');
    return;
  }if(plan === 'Plan Básico'){
    tarifa = 1500000
    
  }else if(plan === 'Plan Familiar'){
    tarifa = 2500000
  }else if(plan === 'Plan Full'){
     tarifa = 4500000
  }else{
    console.log(' no se pudi establecer la tarifa')
  }

  if (city === '') {
    console.log('Por favor seleccione una ciudad.');
    return;
  }

  const usuario = {
    name,
    documento,
    address,
    phone,
    plan,
    city,
    tarifa
    
  };

  // Aquí deberías tener una definición de 'usuarios'
  // Asumiendo que 'usuarios' es un array declarado previamente
  if (typeof usuarios !== 'undefined' && Array.isArray(usuarios)) {
    usuarios.push(usuario); // Agregar el nuevo usuario al arreglo 'usuarios'
    alert('Se guardó');
  } else {
    alert('No se pudo guardar el usuario');
  }
}
