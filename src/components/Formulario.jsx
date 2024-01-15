import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({contactos, setContactos, contacto, setContacto}) => {
  const [nombre, setNombre] = useState('')
  const [celular, setCelular] = useState('')
  const [direccion, setDireccion] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  useEffect(()=>{
    if(Object.keys(contacto).length > 0)
    {
      setNombre(contacto.nombre)
      setCelular(contacto.celular)
      setDireccion(contacto.direccion)
      setEmail(contacto.email)

      if(error)
      {
        setError(false)
      }
    }
  },[contacto])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e)=>{
    e.preventDefault()  
    
    if ([nombre, celular, direccion, email].includes(''))
    {
      setError(true)
      return
    }

    setError(false)    

    const objetoContacto = {
      nombre,
      celular,
      direccion,
      email,
      
    }

    if(contacto.id)
    {
      console.log('editando contacto')
      objetoContacto.id = contacto.id
      const contactoActualizado = contactos.map((item) => item.id === contacto.id ? objetoContacto : item)
      setContactos(contactoActualizado)
      setContacto({})
    }else
    {
      objetoContacto.id = generarId()
      setContactos([...contactos, objetoContacto])

    }


    setNombre('')
    setCelular('')
    setDireccion('')
    setEmail('')


  }

  return (
    <div className="bg-blue-400 md:w-1/3 lg:w-2/5 m-3 py-10 px-2 rounded-lg shadow-blue-700 shadow-md">
        <h2 className="text-xl text-white font-bold text-center uppercase">Registro de Contactos</h2>
        <form 
          className="bg-gray-50 py-10 px-2 rounded-md mt-5"          
          onSubmit={handleSubmit}
        >
          {error && <Error children={<p className=" ">Todos los Datos son Requeridos</p>} />}
          <div className="mb-3">
            <label
              className="block text-blue-700 uppercase font-bold"
              htmlFor="nombre"
            >
              Nombre y Apellido
            </label>
            <input 
              type="text" 
              name="" 
              id="nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              className="w-full mt-3 p-2 text-xl placeholder-blue-400 border border-blue-700 rounded-lg" 
              placeholder="Ingrese un nombre"
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-blue-700 uppercase font-bold"
              htmlFor="celular"
            >
              Celular
            </label>
            <input 
              type="text" 
              name="" 
              id="celular"
              onChange={(e) => setCelular(e.target.value)}
              value={celular}
              className="w-full mt-3 p-2 text-xl placeholder-blue-400 border border-blue-700 rounded-lg" 
              placeholder="Ingrese Nombres y Apellidos"
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-blue-700 uppercase font-bold"
              htmlFor="residencia"
            >
              Direccion Residencia
            </label>
            <input 
              type="text" 
              name="" 
              id="residencia"
              onChange={(e) => setDireccion(e.target.value)}
              value={direccion}
              className="w-full mt-3 p-2 text-xl placeholder-blue-400 border border-blue-700 rounded-lg" 
              placeholder="Ingrese Direccion Residencia"
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-blue-700 uppercase font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input 
              type="email" 
              name="" 
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full mt-3 p-2 text-xl placeholder-blue-400 border border-blue-700 rounded-lg" 
              placeholder="Ingrese Email Valido"
            />
          </div>

          <button 
            type="submit"
            className="mt-3 py-3 px-2 w-full bg-green-500 text-white rounded-md font-bold uppercase hover:bg-green-700"
          > {contacto.id ? 'Editar Contacto' : 'Registrar Contacto'}            
          </button>

        </form>

    </div>
  )
}

export default Formulario
