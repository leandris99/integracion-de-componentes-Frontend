
import { useEffect, useState } from 'react';
import PersonaService from '../../Service/PersonaService/PersonaService';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const AddPersonaComponent = () => {

    const [identificacion, setIdentificacion] = useState("");
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const navigate = useNavigate();
    const{idpersona} = useParams();
    

    const saveOrUpdatePersona = (e) => {
        e.preventDefault();
        const persona = {
                identificacion, 
                nombre, 
                correo, 
                telefono, 
                direccion
            };

            if(idpersona){
                PersonaService.updatePersona(idpersona, persona).then((response) => {
                    console.log(response.data);
                    navigate("/");
                
                }).catch(error => {
                    console.log(error);
                });

            }else{
                PersonaService.registrarPersona(persona).then((response) => {
                    console.log(response.data);
                    navigate("/");
                
                }).catch(error => {
                    console.log(error);
                });
            }
        };
       

        useEffect(() => {
            PersonaService.getPersonaById(idpersona).then(response => {
                setIdentificacion(response.data.identificacion);
                setNombre(response.data.nombre);
                setCorreo(response.data.correo);
                setTelefono(response.data.telefono);
                setDireccion(response.data.direccion);
            }).catch(error => {
                console.log(error);
            })
        }, [])

        const title = () => {
            if(idpersona){
                return <h2 className='text-center'>Editar Persona</h2>
            }else{
                return <h2 className='text-center'>Agregar Persona</h2>
            }
        }


  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>
                    {title()}
                </h2>
                <div className='card-body'>
                    <form>
                    <div className='form-group mb-2'>
                            <input
                             type='number' placeholder='identificacion'name='identificacion' className='form-control' value={identificacion} onChange={
                                (e) => setIdentificacion(e.target.value)}/>
                        </div>
                        <div className='form-group mb-2'>
                            <input
                             type='text' placeholder='nombre'name='nombre' className='form-control' value={nombre}  onChange={
                                (e) => setNombre(e.target.value)}/>
                        </div>
                        <div className='form-group mb-2'>
                            <input
                             type='email' placeholder='correo'name='correo' className='form-control' value={correo} onChange={
                                (e) => setCorreo(e.target.value)}/>
                        </div>
                        <div className='form-group mb-2'>
                            <input
                             type='number' placeholder='telefono'name='telefono' className='form-control' value={telefono} onChange={
                                (e) => setTelefono(e.target.value)}/>  
                        </div>
                        <div className='form-group mb-2'>
                            <input
                             type='text' placeholder='direccion'name='direccion' className='form-control'  value={direccion} onChange={
                                (e) => setDireccion(e.target.value)}/>
                        </div>
            
                        
                        <button className='btn btn-success' onClick={(e) => saveOrUpdatePersona (e)}>Guardar</button>
                        &nbsp; &nbsp;
                        <Link to='/' className='btn btn-danger'>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPersonaComponent;