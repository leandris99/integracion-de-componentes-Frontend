import React from 'react'
import {useEffect, useState } from 'react';
import PersonaService from '../../Service/PersonaService/PersonaService';
import { Link } from 'react-router-dom';


//este componente se encarga de mostrar la lista de personas
//se puede agregar un boton para agregar una nueva persona
export const ListPersonaComponent = () => {

    const [persona, setPersona] = useState([]);

    useEffect(() => {
        ListarPersonas();
    }, []);

    const ListarPersonas = () => {
        PersonaService.getAllPersona().then(response => {
            setPersona(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const deletePersona = (personaid) => {
        PersonaService.deletePersona(personaid).then(response => {
            ListarPersonas();
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Listado de Empleados</h2>
            <Link to = "/add-persona" className='btn btn-primary mb-2'>Agregar persona</Link>

            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Identificacion</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {persona.map(persona => (
                        <tr key={persona.idpersona}>
                            <td>{persona.idpersona}</td>
                            <td>{persona.identificacion}</td>
                            <td>{persona.nombre}</td>
                            <td>{persona.correo}</td>
                            <td>{persona.telefono}</td>
                            <td>{persona.direccion}</td>
                            <td>
                                <Link  className='btn btn-info' to={`/edit-persona/${persona.idpersona}`}>Editar</Link>
                                <button style={{margilLeft: "10px"} } className='btn btn-danger' onClick={()=> deletePersona(persona.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPersonaComponent;