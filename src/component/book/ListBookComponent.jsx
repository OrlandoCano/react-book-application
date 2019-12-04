import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListBookComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            message: null
        }
        this.deleteBook = this.deleteBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.addBook = this.addBook.bind(this);
        this.reloadBookList = this.reloadBookList.bind(this);
    }

    componentDidMount() {
        this.reloadBookList();
    }

    reloadBookList() {
        ApiService.fetchBooks()
            .then((res) => {
                debugger;
                this.setState({books: res.data})
            });
    }

    deleteBook(bookId) {
        ApiService.deleteBook(bookId)
           .then(res => {
               this.setState({message : 'Book deleted successfully.'});
               this.setState({books: this.state.books.filter(book => book.id !== bookId)});
           })

    }

    editBook(id) {
        window.localStorage.setItem("bookId", id);
        this.props.history.push('/edit-book');
    }

    addBook() {
        window.localStorage.removeItem("bookId");
        this.props.history.push('/add-book');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Book Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addBook()}> Add Book</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>ISBN</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Release Date</th>
                            <th>Editorial</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                    <tr key={book.id}>
                                        <td>{book.ISBN}</td>
                                        <td>{book.lastName}</td>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.editorial}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteBook(book.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editBook(book.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListBookComponent;