import axios from 'axios';

const API_URL = 'http://localhost:8080/v1/api/books';

class ApiService {

    fetchBooks() {
        debugger;
        return axios.get(API_URL);
    }

    fetchBooksById(bookId) {
        return axios.get(API_URL + '/' + bookId);
    }

    deleteBook(bookId) {
        return axios.delete(API_URL + '/' + bookId);
    }

    addBook(book) {
        return axios.post(""+API_URL, book);
    }

    editBook(book) {
        return axios.put(API_URL + '/' + book.id, book);
    }

}

export default new ApiService();