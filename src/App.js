
import './App.css';
import HeaderComponent from './Components/HeaderComponente/HeaderComponent';
import ListPersonaComponent from './Components/PersonaComponent/ListPersonaComponent';
import NavegadorComponent from './Components/NavComponent/NavegadorComoponent';
import AddPersonaComponent from './Components/PersonaComponent/AddPersonaComponent';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div>
      <BrowserRouter>
      <HeaderComponent />
      <div className='container'>
      <NavegadorComponent/>
        <Routes>
          <Route exact path='/' element={<ListPersonaComponent />} />
          <Route path='/' element={<ListPersonaComponent />} />
          <Route path='/add-persona' element={<AddPersonaComponent />} />
          <Route path='/edit-persona/:id' element={<AddPersonaComponent />} />
          

        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
