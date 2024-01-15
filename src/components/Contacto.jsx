
const Contacto = ({miContacto, setContacto, eliminarContacto}) => {

    const handleEditar = () =>
    {
        setContacto({
            nombre:miContacto.nombre,
            celular:miContacto.celular,
            direccion:miContacto.direccion,
            email:miContacto.email,
            id:miContacto.id
        })
    }

  return (
    <div className="bg-blue-400 py-1 px-1 mt-2  rounded-md shadow-md">
        <p className="text-xl text-black font-bold bg-white p-1 rounded-md ">Nombre: {''}
          <span className="text-blue-400">{miContacto.nombre}</span>
        </p>
        <p className="text-xl text-black font-bold bg-white p-1 rounded-md ">Celular: {''}
          <span className="text-blue-400">{miContacto.celular}</span>
        </p>
        <p className="text-xl text-black font-bold bg-white p-1 rounded-md ">Direccion: {''}
          <span className="text-blue-400">{miContacto.direccion}</span>
        </p>
        <p className="text-xl text-black font-bold bg-white p-1 rounded-md ">Email: {''}
          <span className="text-blue-400">{miContacto.email}</span>
        </p>     

        <div className="flex justify-between mt-3 mb-1">
            <button 
                type="submit"
                onClick={handleEditar}
                className="bg-green-600 py-2 px-10 text-center text-white uppercase font-bold rounded-md hover:bg-green-800 "
            >Editar</button>    
            <button 
                type="submit"
                onClick={() => eliminarContacto(miContacto.id)}
                className="bg-red-600 py-2 px-10 text-center text-white uppercase font-bold rounded-md hover:bg-red-800 "
            >ELiminar</button>    
        </div>   
    </div>
  )
}

export default Contacto
