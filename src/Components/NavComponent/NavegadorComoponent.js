import React from 'react'

export const NavegadorComponent = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div><a href="/" className="navbar-brand">Inicio</a></div>
          <div><a href="./ClientesComponent" className ="navbar-brand">Clientes</a></div>
          <div><a href="/Empleados" className="navbar-brand">Empleados</a></div>
          <div><a href="/Productos" className="navbar-brand">Productos</a></div>
          <div><a href="/Ventas" className="navbar-brand">Ventas</a></div>
        </nav>
    </div>

  
  )
}

export default NavegadorComponent;
