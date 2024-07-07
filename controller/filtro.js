import { usuarios } from "./usuario.js";

export function acumulado() {
  let arrayCopy = [...usuarios];
  document.getElementById('mostrar-filtro').innerHTML = '';

  let tarifaFamiliar = 0;
  let tarifaBasico = 0;
  let tarifaFull = 0;

  // Accumulate tariffs based on plan type
  arrayCopy.forEach((usuario) => {
    switch (usuario.plan) {
      case 'Plan Familiar':
        tarifaFamiliar += usuario.tarifa;
        break;
      case 'Plan Básico':
        tarifaBasico += usuario.tarifa;
        break;
      case 'Plan Full':
        tarifaFull += usuario.tarifa;
        break;
      default:
        alert('Error: Unknown plan');
    }
  });

  // Create elements to display accumulated tariffs
  let cardContainer = document.createElement('div');
  let card = document.createElement('div');

  // Plan Familiar
  let planFamiliar = document.createElement('h3');
  planFamiliar.textContent = 'Plan Familiar';
  let acumuladoFamiliar = document.createElement('p');
  acumuladoFamiliar.textContent = tarifaFamiliar.toLocaleString(); // Formatear la tarifa si es necesario
  card.append(planFamiliar);
  card.append(acumuladoFamiliar);

  // Plan Básico
  let planBasico = document.createElement('h3');
  planBasico.textContent = 'Plan Básico';
  let acumuladoBasico = document.createElement('p');
  acumuladoBasico.textContent = tarifaBasico.toLocaleString(); // Formatear la tarifa si es necesario
  card.append(planBasico);
  card.append(acumuladoBasico);

  // Plan Full
  let planFull = document.createElement('h3');
  planFull.textContent = 'Plan Full';
  let acumuladoFull = document.createElement('p');
  acumuladoFull.textContent = tarifaFull.toLocaleString(); // Formatear la tarifa si es necesario
  card.append(planFull);
  card.append(acumuladoFull);

  cardContainer.append(card);
  document.getElementById('mostrar-filtro').append(cardContainer);
}


export function filtrarPorCiudad() {
  let totalCartagena = 0;
  let totalSantaMarta = 0;
  let totalSanAndres = 0;

  const arrayCopy = [...usuarios];

  arrayCopy.forEach((user) => {
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





export function filtro() {
  // Copiamos el array de usuarios
  let arrayCopy = usuarios;
  
  // Filtramos y mapeamos los datos relevantes de cada usuario
  let usuariosFiltro = arrayCopy.map((user) => {
    return {
      name: user.name,
      documento: user.documento,
      phone: user.phone,
      address: user.address
    };
  });

  return usuariosFiltro; // Devolvemos el array filtrado
}


export function filtrarPorUsuarios() {
  const resultadoFiltro = filtro();
  let usuariosCopyFilter = [...resultadoFiltro];
  document.getElementById('filter-users').innerHTML = '';
  
  usuariosCopyFilter.forEach((users) => {
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
