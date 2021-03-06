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
		console.log(user)
		const { username, password, email } = user;
		return this.apiClient.post('/signup', { username, password, email }).then(({ data }) => data);
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
	const { title, author, category, description, imgUrl } = book;
		return this.apiClient.post("/books", { title, author, category, description, imgUrl  }).then(({ data }) => data);
	}

	deleteOneBook(id) {
		return this.apiClient.delete(`/books/${id}`).then(({ data }) => data);
	}

	editOneBook(id, body) {
		const { title, author, imgUrl, category, description } = body;
		return this.apiClient.put(`/books/${id}`, { title, author, imgUrl, category, description }).then(({ data }) => data);
	}

	addToFavs(id) {
		return this.apiClient.post(`/user/favs/${id}`).then(({ data }) => data);
	}

	getUsersFavBooks(){
		return this.apiClient.get(`/user/favs`).then(({ data }) => data);
	}

	getUsersFavBooksIds(){
		return this.apiClient.get(`/user/favids`).then(({ data }) => data);
	}

	// User profile

	userProfile(user) {
	const { username } = user;
	return this.apiClient.get("/user/profile", { username }).then(({ data }) => data);
	}

	
}

const apiClient = new ApiClient();

export default apiClient;
