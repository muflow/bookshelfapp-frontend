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

		// Find book
	findOneBook(id) {
	return this.apiClient.get(`/books/${id}`).then(({ data }) => data);
	}

	createBook(book) {
	const {title, author} = book;
	return this.apiClient.post("/books", { title, author }).then(({ data }) => data);
	}

	deleteOneBook(id) {
	return this.apiClient.delete(`/books/${id}`).then(({ data }) => data);
	}

	editOneBook(id, body) {
	const { title, author } = body;
	return this.apiClient.put(`/books/${id}`, { title, author }).then(({ data }) => data);
	}

	addToFavs(id, body) {
	const { title, author } = body;
	return this.apiClient.put(`/favs/${id}`, { title, author }).then(({ data }) => data);
	}



	// User profile

	userProfile(user) {
	const { username } = user;
	return this.apiClient.get("/user/profile", { username }).then(({ data }) => data);
	}

	
}

const apiClient = new ApiClient();

export default apiClient;
