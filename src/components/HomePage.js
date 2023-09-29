import React from 'react'
import '../custom.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomePage() {
    
    const [user, setUser] = useState({ nome: '', cognome: '', email: '' });
    const [userList, setUserList] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
        console.log('Cambio en el estado de usuario:', user);
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8080/user', user) // Asegúrate de que la URL coincida con tu controlador de usuario en el backend
        .then((response) => {
        // Realiza alguna acción después de una inserción exitosa, si es necesario
        console.log('Usuario insertado:', response.data);
        })
        .catch((error) => {
        console.error('Error al insertar usuario:', error);
        });
      };

    useEffect(() => {
    axios.get('http://localhost:8080/users') // Asegúrate de que la URL coincida con tu controlador de usuario en el backend
        .then((response) => {
        setUserList(response.data);
        })
        .catch((error) => {
        console.error('Error al obtener la lista de usuarios:', error);
        });
    }, []); // El array vacío asegura que esta solicitud se realice solo una vez al montar el componente

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Name</label>
              <input type="text" className="custom-input form-control" name='nome' id="nombre" value={user.nome || ''} onChange={handleInputChange} placeholder="nome" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Last Name</label>
              <input type="text" className="custom-input" id="apellido" name="cognome" value={user.cognome || ''} onChange={handleInputChange} placeholder="cognome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="custom-input" id="email" name="email" value={user.email || ''} onChange={handleInputChange} placeholder="Email" />
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
                        {userList.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <a href="#" class="user-link">{user.nome}</a>
                                </td>  
                                <td> 
                                    <a href="#" class="user-link">{user.cognome} </a>
                                </td>
                                <td>
                                    <a href="#">{user.email}</a>
                                </td>
                                <td style={{width: '4%'}}>
                                    <Link to={`/users-books/${user.id}`} className="icon-button table-link">
                                        <span class="fa-stack">
                                            <i class="fa fa-square fa-stack-2x"></i>
                                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </Link>
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
