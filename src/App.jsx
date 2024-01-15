import { useEffect, useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  const [contactos, setContactos] = useState([])
  const [contacto, setContacto] = useState({})

  useEffect(()=>{
    const contactosLS = JSON.parse(localStorage.getItem('contactos')) ?? []
    setContactos(contactosLS)
  },[])

  useEffect(()=>{
    localStorage.setItem('contactos',JSON.stringify(contactos))
  },[contactos])

  function eliminarContacto(id) 
  {
    const rpta = confirm('Comfirmar Eliminar Contacto')
    if(rpta)
    {
      console.log('elimimando contacto')
      const nuevoArray = contactos.filter((e) => e.id != id)
      setContactos(nuevoArray)
    }
    
  }


  return (
    <div className='container mx-auto mt-10'>
      <Header/>
      <div className='md:flex mt-5'>
        <Formulario
          contactos={contactos}
          setContactos={setContactos}
          contacto={contacto}
          setContacto={setContacto}
        />
        <Listado
          contactos={contactos}
          setContacto={setContacto}
          eliminarContacto={eliminarContacto}
        />
      </div>
    </div>
  )
}

export default App
