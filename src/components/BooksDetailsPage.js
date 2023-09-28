import React from 'react'
import '../custom.css'

export default function BooksDetailsPage() {
  return (
    <>
    <div class="container">
        <h1>BookApp</h1>
        <h2>Books Details Page</h2>
        <button className="btn btn-primary">Back to Books</button>
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
                                <td> 
                                    <a href="#" class="user-link">Libro Test </a>
                                </td>
                                <td>
                                    <a href="#" class="user-link">Test Autore</a>
                                </td>
                                <td>
                                    <a href="#">111123123123</a>
                                </td>
                                <td> 
                                    <p >Trama interesante </p>
                                </td>
                                <td> 
                                    <p >1</p>
                                </td>
                                <td> 
                                    <p >22/11/2020</p>
                                </td>
                                <td style={{width: '9%'}}>
                                    <button className="icon-button table-link">
                                        <span class="fa-stack">
                                            <i class="fa fa-square fa-stack-2x"></i>
                                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </button>
                                    <button className="icon-button" >
                                        <span class="fa-stack">
                                            
                                            <i class="fa fa-square fa-stack-2x"></i>
                                            <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                            
                                        </span>
                                    </button>
                                    <button className="icon-button-red" >
                                        <span class="fa-stack">
                                            <i class="fa fa-square fa-stack-2x"></i>
                                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </button>
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
            
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Titolo</label>
              <input type="text" className="custom-input form-control " id="nombre" placeholder="Titolo" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Autore</label>
              <input type="text" className="custom-input" id="apellido" placeholder="Autore" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Codice ISBN</label>
              <input type="number" className="custom-input" id="email" placeholder="1234567891234" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Trama</label>
              <input type="text" className="custom-input" id="apellido" placeholder="Trama" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Numero Letture</label>
              <input type="number" className="custom-input" id="email" placeholder="1" />
            </div>
            <button type="submit" className="btn btn-primary">Edit Book</button>
          </form>
        </div>
    </div>
    </div></>
  )
}
