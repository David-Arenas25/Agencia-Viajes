import { usuarios } from "../Model/UsuarioModel.js";
export function filtrarPorUsuarios() {

  document.getElementById('filter-users').innerHTML = '';
  
  usuarios.forEach((users) => {
    let card = document.createElement('div');
    card.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4', 'transition-transform', 'transform', 'hover:scale-105');
    
    let nombre = document.createElement('h3');
    nombre.classList.add('text-lg', 'font-semibold', 'text-gray-800', 'mb-2');
    nombre.textContent = users.name;

    let documentoContainer = document.createElement('p');
    documentoContainer.classList.add('text-gray-600', 'mb-1');
    documentoContainer.innerHTML = '<strong>Documento:</strong> ' + users.documento;

    let direccionContainer = document.createElement('p');
    direccionContainer.classList.add('text-gray-600', 'mb-1');
    direccionContainer.innerHTML = '<strong>Dirección:</strong> ' + users.address;

    let telefonoContainer = document.createElement('p');
    telefonoContainer.classList.add('text-gray-600');
    telefonoContainer.innerHTML = '<strong>Teléfono:</strong> ' + users.phone;

    card.append(nombre, documentoContainer, direccionContainer, telefonoContainer);
    document.getElementById('filter-users').append(card);
  });
}


