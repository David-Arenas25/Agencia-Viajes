import { usuarios } from "../model/UsuarioModel.js";

export function filtrarPorCiudad() {
  let totalCartagena = 0;
  let totalSantaMarta = 0;
  let totalSanAndres = 0;


  usuarios.forEach((user) => {
    switch (user.city) {
      case 'cartagena':
        totalCartagena++;
        break;
      case 'santamarta':
        totalSantaMarta++;
        break;
      case 'sanandres':
        totalSanAndres++;
        break;
      default:
        break;
    }
  });
  // Limpiar el contenido existente antes de agregar los nuevos elementos
  document.getElementById('filter-city').innerHTML = '';

  // Crear los elementos HTML para mostrar los totales por ciudad
  if (totalCartagena > 0) {
    let cardCartagena = document.createElement('div');
    cardCartagena.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4', 'transition-transform', 'transform', 'hover:scale-105');
    let cardBodyCartagena = document.createElement('div');
    let cityCartagena = document.createElement('h5');
    cityCartagena.classList.add('text-lg', 'font-semibold', 'text-gray-800', 'mb-2');
    cityCartagena.textContent = 'Cartagena';
    let registrosCartagena = document.createElement('p');
    registrosCartagena.classList.add('text-gray-600');
    registrosCartagena.textContent = `Total de registros: ${totalCartagena}`;

    cardBodyCartagena.append(cityCartagena);
    cardBodyCartagena.append(registrosCartagena);
    cardCartagena.append(cardBodyCartagena);
    document.getElementById('filter-city').append(cardCartagena);
  }

  if (totalSanAndres > 0) {
    let cardSanAndres = document.createElement('div');
    cardSanAndres.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4', 'transition-transform', 'transform', 'hover:scale-105');
    let cardBodySanAndres = document.createElement('div');
    let citySanAndres = document.createElement('h5');
    citySanAndres.classList.add('text-lg', 'font-semibold', 'text-gray-800', 'mb-2');
    citySanAndres.textContent = 'San Andrés';
    let registrosSanAndres = document.createElement('p');
    registrosSanAndres.classList.add('text-gray-600');
    registrosSanAndres.textContent = `Total de registros: ${totalSanAndres}`;

    cardBodySanAndres.append(citySanAndres);
    cardBodySanAndres.append(registrosSanAndres);
    cardSanAndres.append(cardBodySanAndres);
    document.getElementById('filter-city').append(cardSanAndres);
  }

  if (totalSantaMarta > 0) {
    let cardSantaMarta = document.createElement('div');
    cardSantaMarta.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4', 'transition-transform', 'transform', 'hover:scale-105');
    let cardBodySantaMarta = document.createElement('div');
    let citySantaMarta = document.createElement('h5');
    citySantaMarta.classList.add('text-lg', 'font-semibold', 'text-gray-800', 'mb-2');
    citySantaMarta.textContent = 'Santa Marta';
    let registrosSantaMarta = document.createElement('p');
    registrosSantaMarta.classList.add('text-gray-600');
    registrosSantaMarta.textContent = `Total de registros: ${totalSantaMarta}`;

    cardBodySantaMarta.appendChild(citySantaMarta);
    cardBodySantaMarta.appendChild(registrosSantaMarta);
    cardSantaMarta.appendChild(cardBodySantaMarta);
    document.getElementById('filter-city').append(cardSantaMarta);
  }
}
