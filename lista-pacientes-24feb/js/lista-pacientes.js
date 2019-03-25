
	var paciente1 = {'nombre': 'Loren',
						'apellido' : 'Spinale',
						'edad' : 27,
						'diagnostico' : 'Gripe',
						'numeross' : 'J41674610'}

	var paciente2 = {'nombre': 'Ivan',
						'apellido' : 'Alvarez',
						'edad' : 31,
						'diagnostico' : 'Gripe',
						'numeross' : 'X91345677'}

	var paciente3 = {'nombre': 'Maria',
						'apellido' : 'Perez',
						'edad' : 8,
						'diagnostico' : 'Ansiedad',
						'numeross' : 'I87367219'}

	var paciente4 = {'nombre': 'Jose',
						'apellido' : 'Garcia',
						'edad' : 18,
						'diagnostico' : 'Fractura de tibia',
						'numeross' : 'J12345671'}

	var paciente5 = {'nombre': 'Raul',
						'apellido' : 'Gonzalez',
						'edad' : 60,
						'diagnostico' : 'Artritis',
						'numeross' : 'S76529470'}

	var paciente6 = {'nombre': 'Laura',
						'apellido' : 'Gomez',
						'edad' : 23,
						'diagnostico' : 'Gripe',
						'numeross' : 'X734164720'}

	var paciente7 = {'nombre': 'Isabel',
						'apellido' : 'Gutierrez',
						'edad' : 25,
						'diagnostico' : 'Alopecia',
						'numeross' : 'Y56782356'}

	var paciente8 = {'nombre': 'Ruth',
						'apellido' : 'Camarero',
						'edad' : 12,
						'diagnostico' : 'Contusion',
						'numeross' : 'Y76384622'}

	var paciente9 = {'nombre': 'Gabriel',
						'apellido' : 'Calabrese',
						'edad' : 34,
						'diagnostico' : 'Lesion de pierna derecha',
						'numeross' : 'A14728930'}

	var paciente10 = {'nombre': 'Samantha',
						'apellido' : 'Smith',
						'edad' : 21,
						'diagnostico' : 'Gripe',
						'numeross' : 'D76529470'}

	var paciente11 = {'nombre': 'Carlos',
					'apellido': 'Gonzalez',
					'edad': 15,
					'diagnostico': 'Gripe',
					'numeross': 'D76529476'}


	var listaPacientes = new Array(paciente1, paciente2, paciente3, paciente4, paciente5, paciente6, paciente7, paciente8, paciente9, paciente10, paciente11);

	//console.log(listaPacientes);


/* que monteis un interfaz visual en html donde haya un selector de diagnosticos y un selector de edades. Ambos select pinteis de forma dinamica. Recorriendo el listado para pintar exactemente los que haya.

//que usando los filtros dinamicos consigamos filtrar con las funciones anteriormente hechas tanto los diagnosticos como las edades*/


let selectorDiagnostico = document.getElementById('diagnostico');
let listaDiagnosticos = new Array();

for(paciente of listaPacientes){

	let existe = listaDiagnosticos.includes(paciente.diagnostico);

	if(!existe){

		let opcionDiagnostico = document.createElement('option');
		opcionDiagnostico.value = paciente.diagnostico;
		opcionDiagnostico.innerHTML = paciente.diagnostico;
		selectorDiagnostico.appendChild(opcionDiagnostico);
		listaDiagnosticos.push(paciente.diagnostico)
	}

	listaDiagnosticos = listaDiagnosticos.sort();
	//console.log(listaDiagnosticos);
}

selectorDiagnostico.addEventListener('change', getDiagnostico);

function getDiagnostico(event){

	let eventoDiagnostico = event.target.value;
	//console.log(diagnostico1);

	filtrarDiagnostico(listaPacientes, eventoDiagnostico);
}

let listaDiagnostico2 = new Array(); 

function filtrarDiagnostico (pLista, pDiagnostico){

	for(registro of pLista)
	{
		if(registro.diagnostico == pDiagnostico)
		{
			listaDiagnostico2.push(registro);
		}
	}
	
	console.log(listaDiagnostico2);
}



//EDAD

let selectorEdad = document.getElementById('edad');
//let listaNoRepEdad = new Array();

selectorEdad.addEventListener('change', getEdad);

function getEdad(event){

	let edadMin = parseInt(event.target.value);
	let edadMax;
	
	if(edadMin == 60) edadMax = 200;

	else edadMax = edadMin + 10;

	//console.log(edadMin)
	//console.log(edadMax)

	filtrarRangoEdad(listaPacientes, edadMin, edadMax);
}


function filtrarRangoEdad(pLista, pEdadMinima, pEdadMaxima)
  {
	var listaRangoEdad = new Array();

	for(registro of pLista)
	{
		if(registro.edad >= pEdadMinima && registro.edad <= pEdadMaxima)
		{
			listaRangoEdad.push(registro);
		}
  	}

  	if(listaRangoEdad.length == 0)
  	{
  		console.log('no hay pacientes con esa edad');
  	}

console.log(listaRangoEdad);

	}
