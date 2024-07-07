// Definición del arreglo 'usuarios'
export let usuarios = [];


export function listarUsuarios() {
  const usuariosCopy = [...usuarios]
  document.getElementById('my-users').innerHTML = '';
  usuariosCopy.map((element) => {
    let container = document.createElement('div')
    let paddingContainer = document.createElement('div')
    let nombreContainer = document.createElement('div')
    let nombre = document.createElement('p')
    let documentoContainer = document.createElement('p')
    let documento = document.createElement('strong')
    let direccionContainer = document.createElement('p')
    let direccion = document.createElement('strong')
    let telefonoContainer = document.createElement('p')
    let telefono = document.createElement('strong')
    let planContainer = document.createElement('p')
    let plan = document.createElement('strong')
    let ciudadContainer = document.createElement('p')
    let ciudad = document.createElement('strong')

    nombre.textContent = element.name
    documento.textContent = element.documento
    direccion.textContent = element.address
    telefono.textContent = element.phone
    plan.textContent = element.plan
    ciudad.textContent = element.city

   
 


    paddingContainer.append(nombre, nombreContainer, nombre, documentoContainer, documento, direccionContainer, direccion, telefonoContainer, telefono, planContainer, plan, ciudadContainer, ciudad)
    container.append(paddingContainer)
    document.getElementById('my-users').append(container)


  })
}


// Suponiendo que tienes un array de usuarios llamado 'usuarios'
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
  card.appendChild(planFamiliar);
  card.appendChild(acumuladoFamiliar);

  // Plan Básico
  let planBasico = document.createElement('h3');
  planBasico.textContent = 'Plan Básico';
  let acumuladoBasico = document.createElement('p');
  acumuladoBasico.textContent = tarifaBasico.toLocaleString(); // Formatear la tarifa si es necesario
  card.appendChild(planBasico);
  card.appendChild(acumuladoBasico);

  // Plan Full
  let planFull = document.createElement('h3');
  planFull.textContent = 'Plan Full';
  let acumuladoFull = document.createElement('p');
  acumuladoFull.textContent = tarifaFull.toLocaleString(); // Formatear la tarifa si es necesario
  card.appendChild(planFull);
  card.appendChild(acumuladoFull);

  cardContainer.appendChild(card);
  document.getElementById('mostrar-filtro').appendChild(cardContainer);
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
    cardCartagena.classList.add('card');
    let cardBodyCartagena = document.createElement('div');
    cardBodyCartagena.classList.add('card-body');
    let cityCartagena = document.createElement('h5');
    cityCartagena.textContent = 'Cartagena';
    let registrosCartagena = document.createElement('p');
    registrosCartagena.textContent = `Total de registros: ${totalCartagena}`;

    cardBodyCartagena.appendChild(cityCartagena);
    cardBodyCartagena.appendChild(registrosCartagena);
    cardCartagena.appendChild(cardBodyCartagena);
    document.getElementById('filter-city').appendChild(cardCartagena);
  }

  if (totalSanAndres > 0) {
    let cardSanAndres = document.createElement('div');
    cardSanAndres.classList.add('card');
    let cardBodySanAndres = document.createElement('div');
    cardBodySanAndres.classList.add('card-body');
    let citySanAndres = document.createElement('h5');
    citySanAndres.textContent = 'San Andrés';
    let registrosSanAndres = document.createElement('p');
    registrosSanAndres.textContent = `Total de registros: ${totalSanAndres}`;

    cardBodySanAndres.appendChild(citySanAndres);
    cardBodySanAndres.appendChild(registrosSanAndres);
    cardSanAndres.appendChild(cardBodySanAndres);
    document.getElementById('filter-city').appendChild(cardSanAndres);
  }

  if (totalSantaMarta > 0) {
    let cardSantaMarta = document.createElement('div');
    cardSantaMarta.classList.add('card');
    let cardBodySantaMarta = document.createElement('div');
    cardBodySantaMarta.classList.add('card-body');
    let citySantaMarta = document.createElement('h5');
    citySantaMarta.textContent = 'Santa Marta';
    let registrosSantaMarta = document.createElement('p');
    registrosSantaMarta.textContent = `Total de registros: ${totalSantaMarta}`;

    cardBodySantaMarta.appendChild(citySantaMarta);
    cardBodySantaMarta.appendChild(registrosSantaMarta);
    cardSantaMarta.appendChild(cardBodySantaMarta);
    document.getElementById('filter-city').appendChild(cardSantaMarta);
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
  const resultadoFiltro = filtro()
  let usuariosCopyFilter = [...resultadoFiltro]
  document.getElementById('filter-users').innerHTML = '';
  usuariosCopyFilter.forEach((users)=>{
    let card = document.createElement('div')
    let nombre = document.createElement('h3')
    let documentoContainer = document.createElement('p')
    let documento = document.createElement('strong')
    let direccionContainer = document.createElement('p')
    let direccion = document.createElement('strong')
    let telefonoContainer = document.createElement('p')
    let telefono = document.createElement('strong')


    nombre.textContent = users.name
    documento.textContent = users.documento
    direccion.textContent = users.address
    telefono.textContent = users.phone



    card.append(nombre, documentoContainer, documento, direccionContainer, direccion, telefonoContainer, telefono)
    document.getElementById('filter-users').append(card)

  })

}

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
    alert('El nombre debe contener solo letras y espacios, y no más de 60 caracteres.');
    return;
  }

  // Validación de documento (solo números, no más de 20 caracteres)
  const documentoRegex = /^\d{1,20}$/;

  if (!documentoRegex.test(documento)) {
    alert('El documento debe contener solo números y no más de 20 caracteres.');
    return;
  }

  // Validación de teléfono (solo números, no más de 20 caracteres)
  const telefonoRegex = /^\d{1,20}$/;

  if (!telefonoRegex.test(phone)) {
    alert('El teléfono debe contener solo números y no más de 20 caracteres.');
    return;
  }

  if (address === '') {
    alert('La dirección no puede estar vacía.');
    return;
  }

  if (plan === '') {
    alert('Por favor seleccione un plan.');
    return;
  }if(plan === 'Plan Básico'){
    tarifa = 1500000
    
  }else if(plan === 'Plan Familiar'){
    tarifa = 2500000
  }else if(plan === 'Plan Full'){
     tarifa = 4500000
  }else{
    alert(' no se pudi establecer la tarifa')
  }

  if (city === '') {
    alert('Por favor seleccione una ciudad.');
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






