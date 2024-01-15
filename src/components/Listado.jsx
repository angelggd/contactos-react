import Contacto from "./Contacto"
const Listado = ({contactos, setContacto,eliminarContacto}) => {
  return (
    <div className="bg-gray-50 md:w-1/3 lg:w-3/5 m-3 py-10 px-1 shadow-md shadow-gray-700 rounded-lg h-screen md:overflow-y-scroll">
      <h2 className="text-blue-700 font-bold text-xl uppercase text-center border-b-4 border-blue-700 ">Contactos Registrados</h2>
      
      {contactos.map(miContacto => (
        <Contacto
          key={miContacto.id}
          miContacto = {miContacto}
          setContacto = {setContacto}
          eliminarContacto = {eliminarContacto}
        />
        )
      )}


    </div>
  )
}

export default Listado
