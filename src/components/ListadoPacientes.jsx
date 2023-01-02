import Paciente from './Paciente'
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
              Administra tus {''}
              <span className="font-bold text-indigo-600">Pacientes y citas</span>
            </p>
            <div className="md:h-screen overflow-y-scroll">
              {pacientes.map( paciente => (
                <Paciente 
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
              Comienza agregando pacientes {''}
              <span className="font-bold text-indigo-600">y apareceran en este lugar</span>
            </p>
          </>
        )}
    </div>
  )
}

export default ListadoPacientes