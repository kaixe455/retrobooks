import axios from "axios";

const API_URI = 'http://127.0.0.1:8000/user/register/'

const login = async () => {

	const values = window.location.search; // Devuelve el resto de la URL, sin métodos ni dominio.

	const params = new URLSearchParams(values);

	let logged = false

	var code = params.get('code')

	if (code) {

		var data = `?code=${code}`

		await axios.post(API_URI + data).then(function (response) {

			console.log("Conexión con la API OK")
			logged = true

		}).catch(function (e) {

			//TODO: Modificar el mensaje por uno de error.
			console.log("Sin conexion con API")

		})


	} else {

		// NO está autorizado para ver la página. Lo redirigimos a la página de retrobooks.
		console.log('No hay code')
		// window.location.replace('https://books.retrobooks.com')

	}

	return logged
};
const LoginService = {
	login
};
export default LoginService;