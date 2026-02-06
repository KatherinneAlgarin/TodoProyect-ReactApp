import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";


function TodoForm() {

    const{
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);


    //ESTADO LOCAL
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSumbit = (event) => {
            //Esto es para que la pagina al hacer clic al boton no se recargue
            event.preventDefault();
            addTodo(newTodoValue);
            setNewTodoValue('');
            setOpenModal(false);
        }

     const onCancel = () => {
            setOpenModal(false);
        }
        
    const onChange = (event) => {
            setNewTodoValue(event.target.value);
        }


    return (
        <form onSubmit={onSumbit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla"
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="TodoForm-buttonContainer">

                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >Cancelar</button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };