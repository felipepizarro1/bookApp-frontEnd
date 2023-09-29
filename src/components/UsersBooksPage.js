import React, { useState, useEffect } from 'react';
import '../custom.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function UsersBooksPage() {
    
    const { id } = useParams(); // Obtén el ID del usuario de la URL
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
      titolo: '',
      autore: '',
      codiceISBN: '',
      trama: '',
      numeroLetture: '',
    });

    

    
      // Función para cargar los libros del usuario con el ID específico
  const loadUserBooks = () => {
    axios.get(`http://localhost:8080/user/${id}/books`) // Reemplaza con la URL correcta
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los libros del usuario:', error);
      });
  };

  // Función para agregar un nuevo libro para el usuario
  const addBook = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8080/${id}/add`, newBook) // Reemplaza con la URL correcta
      .then((response) => {
        console.log('Libro agregado:', response.data);
        setNewBook({
          titolo: '',
          autore: '',
          codiceISBN: '',
          trama: '',
          numeroLetture: 1,
        });
        loadUserBooks(); 
        // Vuelve a cargar la lista de libros después de agregar uno nuevo
      })
      .catch((error) => {
        console.error('Error al agregar el libro:', error);
      });
  };
  

  const handleDeleteBook = (bookId) => {
    axios.delete(`http://localhost:8080/user/${id}/book/${bookId}`)
    .then((response) => {
      console.log('Libro eliminado:', response.data);
      loadUserBooks(); // Vuelve a cargar la lista de libros después de eliminar uno
    })
    .catch((error) => {
      console.error('Error al eliminar el libro:', error);
    });
  };

  useEffect(() => {
    loadUserBooks(); // Carga los libros del usuario cuando se monta el componente
  }, [id]); // La dependencia es el ID del usuario


  return (
    <>
    <div class="container">
        <h1>BookApp</h1>
        <h2>User Books Page</h2>
        <Link to="/" className="icon-button">Back to Users</Link>
    <div class="row">
          {/* Primera columna */}
          <div className="col-sm-6 input-container">
        {/* Formulario para agregar un nuevo usuario */}
            <h2>Add Book</h2>
            
          <form onSubmit={addBook}>
            <div className="form-group">
              <label htmlFor="nombre">Titolo</label>
              <input type="text" className="custom-input form-control " id="nombre" name="titolo" value={newBook.titolo} onChange={(e) => setNewBook({ ...newBook, titolo: e.target.value })} placeholder="Titolo" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Autore</label>
              <input type="text" className="custom-input" id="apellido" name="autore" value={newBook.autore} onChange={(e) => setNewBook({ ...newBook, autore: e.target.value })} placeholder="Autore" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Codice ISBN</label>
              <input type="number" className="custom-input" id="email" name="codiceISBN" value={newBook.codiceISBN} onChange={(e) => setNewBook({ ...newBook, codiceISBN: e.target.value })} placeholder="1234567891234" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Trama</label>
              <input type="text" className="custom-input" name="trama" value={newBook.trama} onChange={(e) => setNewBook({ ...newBook, trama: e.target.value })} id="apellido" placeholder="Trama" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Numero Letture</label>
              <input type="number" className="custom-input" id="email" name="numeroLetture" value={newBook.numeroLetture} onChange={(e) => setNewBook({ ...newBook, numeroLetture: e.target.value })} placeholder="1" />
            </div>
            <button type="submit" className="btn btn-primary">Add Book</button>
          </form>
        </div>
        {/* Segunda columna */}
        <div class="col-sm-6 user-list-container">
        <h2>Books</h2>
        
            <div class="main-box clearfix">
                <div class="table-responsive">
                    <table class="table user-list">
                        <thead>
                            <tr>
                                <th><span>Titolo</span></th>
                                <th><span>Autore</span></th>
                                <th><span>Codice ISBN</span></th>
                                <th><span>Trama</span></th>
                                <th><span>N°Letture</span></th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                        {books.map((book) => (
                      <tr key={book.id}>
                        {console.log(book.id)}
                        <td>
                          <a href="#" class="user-link">
                            {book.titolo}
                          </a>
                        </td>
                        <td>
                          <a href="#" class="user-link">
                            {book.autore}
                          </a>
                        </td>
                        <td>
                          <a href="#">{book.codiceISBN}</a>
                        </td>
                        <td>
                          <p>{book.trama}</p>
                        </td>
                        <td>
                          <p>{book.numeroLetture}</p>
                        </td>
                        <td style={{ width: '10%' }}>
                          <Link to={`/books-details/${id}/${book.id}`} className="icon-button table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i>
                              <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                            </span>
                          </Link>
                          <Link to={`/books-details/${id}/${book.id}`} className="icon-button">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i>
                              <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                            </span>
                          </Link>
                          <button className="icon-button-red" onClick={() => handleDeleteBook(book.id)}>
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i>
                              <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                                                                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div></>
  )
}
