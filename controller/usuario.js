// Definición del arreglo 'usuarios'
export let usuarios = [];


export function listarUsuarios() {
  const usuariosCopy = [...usuarios];
  const myUsersElement = document.getElementById('my-users');
  myUsersElement.innerHTML = '';
  
  usuariosCopy.forEach((element) => {
    let container = document.createElement('div');
    container.className = 'bg-white rounded-lg shadow-md p-4 mb-4 transition-transform transform hover:scale-105';

    let paddingContainer = document.createElement('div');
    paddingContainer.className = 'space-y-2';

    let nombre = document.createElement('p');
    nombre.className = 'text-lg font-semibold text-gray-900';
    nombre.textContent = element.name;

    let documentoContainer = document.createElement('p');
    documentoContainer.className = 'text-gray-700';
    documentoContainer.innerHTML = `<strong>Documento:</strong> ${element.documento}`;

    let direccionContainer = document.createElement('p');
    direccionContainer.className = 'text-gray-700';
    direccionContainer.innerHTML = `<strong>Dirección:</strong> ${element.address}`;

    let telefonoContainer = document.createElement('p');
    telefonoContainer.className = 'text-gray-700';
    telefonoContainer.innerHTML = `<strong>Teléfono:</strong> ${element.phone}`;

    let planContainer = document.createElement('p');
    planContainer.className = 'text-gray-700';
    planContainer.innerHTML = `<strong>Plan:</strong> ${element.plan}`;

    let ciudadContainer = document.createElement('p');
    ciudadContainer.className = 'text-gray-700';
    ciudadContainer.innerHTML = `<strong>Ciudad:</strong> ${element.city}`;

    paddingContainer.append(nombre, documentoContainer, direccionContainer, telefonoContainer, planContainer, ciudadContainer);
    container.append(paddingContainer);
    myUsersElement.append(container);
  });
}









