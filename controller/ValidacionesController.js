import { usuarios } from "../Model/UsuarioModel.js";
import { nombreRegex, telefonoRegex, documentoRegex } from "../Model/ValidacionesModel.js";

export function validarFormulario() {
  let tarifa = 0;
  const name = document.getElementById('name').value.trim();
  const documento = document.getElementById('document').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const plan = document.getElementById('plan').value;
  const city = document.getElementById('city').value;
  let valid = true;

  // Crear un nuevo objeto usuario
  const nuevoUsuario = {};

  // Validación de nombre
  if (!nombreRegex.test(name)) {
    console.log('El nombre debe contener solo letras y espacios, y no más de 60 caracteres.');
    valid = false;
  } else {
    nuevoUsuario.name = name;
  }

  // Validación de documento
  if (!documentoRegex.test(documento)) {
    console.log('El documento debe contener solo números y no más de 20 caracteres.');
    valid = false;
  } else {
    nuevoUsuario.documento = documento;
  }

  // Validación de teléfono
  if (!telefonoRegex.test(phone)) {
    console.log('El teléfono debe contener solo números y no más de 20 caracteres.');
    valid = false;
  } else {
    nuevoUsuario.phone = phone;
  }

  // Validación de dirección
  if (address === '') {
    console.log('La dirección no puede estar vacía.');
    valid = false;
  } else {
    nuevoUsuario.address = address;
  }

  // Validación de plan
  if (plan === '') {
    console.log('Por favor seleccione un plan.');
    valid = false;
  } else {
    switch (plan) {
      case 'Plan Básico':
        tarifa = 1500000;
        break;
      case 'Plan Familiar':
        tarifa = 2500000;
        break;
      case 'Plan Full':
        tarifa = 4500000;
        break;
      default:
        console.log('No se pudo establecer la tarifa');
        valid = false;
    }
    nuevoUsuario.plan = plan;
    nuevoUsuario.tarifa = tarifa;
  }

  // Validación de ciudad
  if (city === '') {
    console.log('Por favor seleccione una ciudad.');
    valid = false;
  } else {
    nuevoUsuario.city = city;
  }

  // Guardar usuario solo si todos los atributos son válidos
  if (valid) {
    usuarios.push(nuevoUsuario);
    alert('Se guardó el usuario');
  } else {
    console.log('No se pudo guardar el usuario');
  }
}
