import './Input.css'
const Input = ({label,...rest}) => {
    return(
        <div className="field">
            <labe>{label}</labe>
            <input {...rest} />
            
            
        </div>
       
    )
}
export default Input;