import { usuarios } from "../model/UsuarioModel.js";

function crearElemento(tipo, clases, contenido) {
  const elemento = document.createElement(tipo);
  if (clases) {
    elemento.classList.add(...clases);
  }
  if (contenido) {
    if (typeof contenido === 'string') {
      elemento.textContent = contenido;
    } else {
      elemento.append(...contenido);
    }
  }
  return elemento;
}

export function filtrarPorUsuarios() {
  const contenedor = document.getElementById('filter-users');
  contenedor.innerHTML = '';

  const fragmento = document.createDocumentFragment();

  usuarios.forEach(({ name, documento, address, phone }) => {
    const card = crearElemento('div', ['bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4', 'transition-transform', 'transform', 'hover:scale-105']);

    const nombre = crearElemento('h3', ['text-lg', 'font-semibold', 'text-gray-800', 'mb-2'], name);

    const documentoContainer = crearElemento('p', ['text-gray-600', 'mb-1'], `<strong>Documento:</strong> ${documento}`);
    const direccionContainer = crearElemento('p', ['text-gray-600', 'mb-1'], `<strong>Dirección:</strong> ${address}`);
    const telefonoContainer = crearElemento('p', ['text-gray-600'], `<strong>Teléfono:</strong> ${phone}`);

    card.append(nombre, documentoContainer, direccionContainer, telefonoContainer);
    fragmento.append(card);
  });

  contenedor.append(fragmento);
}
