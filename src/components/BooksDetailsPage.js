import React, { useState, useEffect } from 'react';
import '../custom.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function BooksDetailsPage() {
    const { id, bookId } = useParams();
    const [book, setBook] = useState({
    titolo: '',
    autore: '',
    codiceISBN: '',
    trama: '',
    numeroLetture: '',
    dataAggiunta: '',
  });

    // Función para cargar los detalles del libro con el ID específico
    const loadBookDetails = () => {
        axios.get(`http://localhost:8080/books/${bookId}`)
          .then((response) => {
            const bookData = response.data;
            setBook({
              titolo: bookData.titolo,
              autore: bookData.autore,
              codiceISBN: bookData.codiceISBN,
              trama: bookData.trama,
              numeroLetture: bookData.numeroLetture,
              dataAggiunta: bookData.dataAggiunta,
            });
          })
          .catch((error) => {
            console.error('Error al cargar los detalles del libro:', error);
          });
      };

      // Función para guardar los cambios en el libro
    const saveBookChanges = (e) => {
    e.preventDefault();
    // Realiza una solicitud PUT al servidor para guardar los cambios en el libro
    axios.put(`http://localhost:8080/user/${id}/books/${bookId}`, book)
      .then((response) => {
        console.log('Cambios guardados correctamente:', response.data);
        // Podrías redirigir al usuario a otra página o mostrar un mensaje de éxito aquí
      })
      .catch((error) => {
        console.error('Error al guardar los cambios:', error);
      });
  };

    useEffect(() => {
        loadBookDetails();
    }, [bookId]);

  return (
    <>
    <div class="container">
        <h1>BookApp</h1>
        <h2>Books Details Page</h2>
        <Link to={`/users-books/${id}`} className="icon-button">Back to Books</Link>
    <div class="row">
        {/* Primera columna */}
        <div class="col-sm-6 user-list-container">
        <h2>Details</h2>
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
                                <th><span>Data di aggiunta alla libreria</span></th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{width: '12%'}}> 
                                    <a href="#" class="user-link">{book.titolo}</a>
                                </td>
                                <td>
                                    <a href="#" class="user-link">{book.autore}</a>
                                </td>
                                <td>
                                    <a href="#">{book.codiceISBN}</a>
                                </td>
                                <td> 
                                    <p >{book.trama}</p>
                                </td>
                                <td> 
                                    <p >{book.numeroLetture}</p>
                                </td>
                                <td> 
                                    <p >{book.dataAggiunta}</p>
                                </td>
                                
                            </tr>
                                                                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* Segunda columna */}
        <div className="col-sm-6 input-container">
        {/* Formulario para agregar un nuevo usuario */}
            <h2>Edit Book</h2>
            
            <form onSubmit={saveBookChanges}>
            <div className="form-group">
              <label htmlFor="nombre">Titolo</label>
              <input type="text" className="custom-input form-control " name="titolo" value={book.titolo} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} id="nombre" placeholder="Titolo" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Autore</label>
              <input type="text" className="custom-input" name="autore" value={book.autore} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} id="apellido" placeholder="Autore" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Codice ISBN</label>
              <input type="number" className="custom-input" name="codiceISBN" value={book.codiceISBN} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} id="email" placeholder="1234567891234" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Trama</label>
              <input type="text" className="custom-input" name="trama" value={book.trama} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} id="apellido" placeholder="Trama" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Numero Letture</label>
              <input type="number" className="custom-input" name="numeroLetture" value={book.numeroLetture} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} id="email" placeholder="1" />
            </div>
            <button type="submit" className="btn btn-primary">Edit Book</button>
          </form>
        </div>
    </div>
    </div></>
  )
}
