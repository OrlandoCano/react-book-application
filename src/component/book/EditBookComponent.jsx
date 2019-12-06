import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import moment from "moment";

class EditBookComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            isbn: '',
            name: '',
            author: '',
            releaseDate: '',
            editorial: ''
        }
        this.saveBook = this.saveBook.bind(this);
        this.loadBook = this.loadBook.bind(this);
    }

    componentDidMount() {
        this.loadBook();
    }

    loadBook() {
        ApiService.fetchBookById(window.localStorage.getItem("bookId"))
            .then((res) => {
                let book = res.data;

                this.setState({
                id: book.id,
                isbn: book.isbn,
                name: book.name,
                author: book.author,
                releaseDate: book.releaseDate,
                editorial: book.editorial                
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveBook = (e) => {
        e.preventDefault();
        let book = {id: this.state.id, 
            isbn: this.state.isbn, 
            name: this.state.name,
            author: this.state.author, 
            releaseDate: this.state.releaseDate, 
            editorial: this.state.editorial};
        ApiService.editBook(book)
            .then(res => {
                this.setState({message : 'Book added successfully.'});
                this.props.history.push('/books');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Book</h2>
                <form>
                    <div className="form-group hidden">
                        <label>Book ID:</label>
                        <input type="text" placeholder="id" name="id" className="form-control" value={this.state.id} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>ISBN:</label>
                        <input type="text" placeholder="ISBN" name="isbn" className="form-control" value={this.state.isbn} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Book's name:</label>
                        <input placeholder="book's name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Author:</label>
                        <input placeholder="author" name="author" className="form-control" value={this.state.author} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Release Date</label>
                        <input type="date" placeholder="Release Date" name="releaseDate" className="form-control" value={moment(new Date(this.state.releaseDate)).format('YYYY-MM-DD')} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Editorial:</label>
                        <input type="text" placeholder="Editorial" name="editorial" className="form-control" value={this.state.editorial} onChange={this.onChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveBook}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditBookComponent;