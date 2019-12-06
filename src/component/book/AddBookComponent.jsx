import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddBookComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: null,
            isbn: '',
            name: '',
            author: '',
            releaseDate: '',
            editorial: ''
        }
        this.saveBook = this.saveBook.bind(this);
    }

    saveBook = (e) => {
        e.preventDefault();
        let book = {id: this.state.id, 
                    isbn: this.state.isbn, 
                    name: this.state.name,
                    author: this.state.author, 
                    releaseDate: this.state.releaseDate, 
                    editorial: this.state.editorial};
        ApiService.addBook(book)
            .then(res => {
                this.setState({message : 'Book added successfully.'});
                this.props.history.push('/books');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Book</h2>
                <form>
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
                    <input type="Date" placeholder="Release Date" name="releaseDate" className="form-control" value={this.state.releaseDate} onChange={this.onChange}/>
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

export default AddBookComponent;