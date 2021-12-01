import useFormulario from '../hooks/useFormulario'  // Importar el hook para el formulario
import Input from './Input'  //importar componentes
import Button from './Button'  //importar el componente
const UserForm =({ submit})=>{
    const [formulario, handleChange, reset] = useFormulario({
        name:'', 
        lastname:'',
        email:'',
      })
      const handleSubmit = (e)=>{
        e.preventDefault() //evita que se recargue la pagina
        submit(formulario)
        reset()
      }
    return(
        <form onSubmit={handleSubmit}>
              <Input 
                label="Nombre" 
                name="name" 
                value={formulario.name} 
                onChange={handleChange}
                placeholder="Nombre" 
                />
              <Input 
                label="Apellido" 
                name="lastname" 
                value={formulario.lastname} 
                onChange={handleChange}
                placeholder="Apellido"
                />
                <Input 
                label="Correo" 
                name="email" 
                value={formulario.email}
                onChange={handleChange}
                placeholder="Correo"
                />
              <Button>Enviar</Button>
            </form>
    )
}
export default UserForm;