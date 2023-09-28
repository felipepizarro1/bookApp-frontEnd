import React from 'react'
import '../custom.css'

export default function HomePage() {
  return (
    <>
    <div class="container">
        <h1>BookApp</h1>
        <h2>HomePage</h2>
    <div class="row">
          {/* Primera columna */}
          <div className="col-sm-6 input-container">
        {/* Formulario para agregar un nuevo usuario */}
            <h2>Add User</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Name</label>
              <input type="text" className="custom-input form-control " id="nombre" placeholder="nome" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Last Name</label>
              <input type="text" className="custom-input" id="apellido" placeholder="cognome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="custom-input" id="email" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
          </form>
        </div>
        {/* Segunda columna */}
        <div class="col-sm-6 user-list-container">
        <h2>Users</h2>
            <div class="main-box clearfix">
                <div class="table-responsive">
                    <table class="table user-list">
                        <thead>
                            <tr>
                                <th><span>Name</span></th>
                                <th><span>Last Name</span></th>
                                <th><span>Email</span></th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 
                                    <a href="#" class="user-link">Mila </a>
                                </td>
                                <td>
                                    <a href="#" class="user-link">Kunis</a>
                                </td>
                                <td>
                                    <a href="#">mila@kunis.com</a>
                                </td>
                                <td style={{width: '4%'}}>
                                    <button className="icon-button table-link">
                                        <span class="fa-stack">
                                            <i class="fa fa-square fa-stack-2x"></i>
                                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                                                                       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div></>
  )
}
