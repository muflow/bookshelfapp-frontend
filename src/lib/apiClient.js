import axios from 'axios';

class ApiClient {
	constructor() {
		this.apiClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}
	
	// User
	me() {
		return this.apiClient.get('/whoami').then(response => response.data);
	}

	signup(user) {
		const { username, password } = user;
		return this.apiClient.post('/signup', { username, password }).then(({ data }) => data);
	}

	login(user) {
		const { username, password } = user;
		return this.apiClient.post('/login', { username, password }).then(({ data }) => data);
	}

	logout() {
		return this.apiClient.post('/logout', {}).then(response => response.data);
	}
	// end

	// Books
	findAllBooks() {
	return this.apiClient.get("/books").then(({ data }) => data);
	}

	createBook(body) {
	return this.apiClient.post("/books", body).then(({ data }) => data);
	}
}

const apiClient = new ApiClient();

export default apiClient;
