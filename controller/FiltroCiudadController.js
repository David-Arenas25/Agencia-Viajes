import { usuarios } from "../Model/UsuarioModel.js";

export function acumulado() {
  let tarifaFamiliar = 0;
  let tarifaBasico = 0;
  let tarifaFull = 0;

  document.getElementById('mostrar-filtro').innerHTML = '';

  usuarios.forEach((usuario) => {
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

  // Crear el contenedor de tarjetas
  let cardContainer = document.createElement('div');

  // Crear y añadir la tarjeta para Plan Familiar
  let cardFamiliar = document.createElement('div');
  let planFamiliar = document.createElement('h3');
  planFamiliar.textContent = 'Plan Familiar';
  let acumuladoFamiliar = document.createElement('p');
  acumuladoFamiliar.textContent = tarifaFamiliar.toLocaleString();
  cardFamiliar.append(planFamiliar);
  cardFamiliar.append(acumuladoFamiliar);

  // Crear y añadir la tarjeta para Plan Básico
  let cardBasico = document.createElement('div');
  let planBasico = document.createElement('h3');
  planBasico.textContent = 'Plan Básico';
  let acumuladoBasico = document.createElement('p');
  acumuladoBasico.textContent = tarifaBasico.toLocaleString();
  cardBasico.append(planBasico);
  cardBasico.append(acumuladoBasico);

  // Crear y añadir la tarjeta para Plan Full
  let cardFull = document.createElement('div');
  let planFull = document.createElement('h3');
  planFull.textContent = 'Plan Full';
  let acumuladoFull = document.createElement('p');
  acumuladoFull.textContent = tarifaFull.toLocaleString();
  cardFull.append(planFull);
  cardFull.append(acumuladoFull);

  // Añadir todas las tarjetas al contenedor
  cardContainer.append(cardFamiliar);
  cardContainer.append(cardBasico);
  cardContainer.append(cardFull);

  // Añadir el contenedor al elemento con id 'mostrar-filtro'
  document.getElementById('mostrar-filtro').append(cardContainer);
}
