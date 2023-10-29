// Cargar pacientes del Local Storage
let patients = JSON.parse(localStorage.getItem('patients')) || [];

function renderPatients() {
	const patientList = document.getElementById('patientList');
	patientList.innerHTML = '';
	patients.forEach((patient, index) => {
		const patientDiv = document.createElement('div');
		patientDiv.className = 'mb-3 p-2 border rounded';
		patientDiv.innerHTML = `
<div class="d-flex justify-content-between">
  <span>${patient}</span>
  <div>
    <button onclick="editPatient(${index})" class="btn btn-outline-secondary btn-sm me-2">Editar</button>
    <button onclick="deletePatient(${index})" class="btn btn-outline-danger btn-sm">Eliminar</button>
  </div>
</div>
`;
		patientList.appendChild(patientDiv);
	});
	// Guardar pacientes en Local Storage
	localStorage.setItem('patients', JSON.stringify(patients));
}

function addPatient() {
	const patientInput = document.getElementById('patientInput');
	const patient = patientInput.value;
	if (patient) {
		patients.push(patient);
		patientInput.value = ''; // Limpiar el campo de entrada
		renderPatients();
	}
}

document.getElementById('patientInput').addEventListener('keyup', function (event) {
	if (event.key === 'Enter') {
		addPatient(); // Llamar a addPatient() si se presionó Enter
	}
});

function editPatient(index) {
	const newPatient = prompt('Edita el nombre del paciente:', patients[index]);
	if (newPatient) {
		patients[index] = newPatient;
		renderPatients();
	}
}

function deletePatient(index) {
	patients.splice(index, 1);
	renderPatients();
}

// Renderizar la lista de pacientes al cargar la página
renderPatients();
