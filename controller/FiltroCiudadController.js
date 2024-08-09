
export let usuarios = []
export function acumulado() {
  let tarifaFamiliar = 0;
  let tarifaBasico = 0;
  let tarifaFull = 0;

  document.getElementById('mostrar-filtro').innerHTML = '';

  // Acumular tarifas según el tipo de plan
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

  // Crear y mostrar las tarjetas con los acumulados
  let cardContainer = document.createElement('div');
  let card = document.createElement('div');

  let planFamiliar = document.createElement('h3');
  planFamiliar.textContent = 'Plan Familiar';
  let acumuladoFamiliar = document.createElement('p');
  acumuladoFamiliar.textContent = tarifaFamiliar.toLocaleString(); // Formatear la tarifa si es necesario
  card.append(planFamiliar);
  card.append(acumuladoFamiliar);

  let planBasico = document.createElement('h3');
  planBasico.textContent = 'Plan Básico';
  let acumuladoBasico = document.createElement('p');
  acumuladoBasico.textContent = tarifaBasico.toLocaleString();
  card.append(planBasico);
  card.append(acumuladoBasico);

  let planFull = document.createElement('h3');
  planFull.textContent = 'Plan Full';
  let acumuladoFull = document.createElement('p');
  acumuladoFull.textContent = tarifaFull.toLocaleString();
  card.append(planFull);
  card.append(acumuladoFull);

  cardContainer.append(card);
  document.getElementById('mostrar-filtro').append(cardContainer);
}
