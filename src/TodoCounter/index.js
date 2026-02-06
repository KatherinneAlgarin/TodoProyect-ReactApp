//Se puede crear una variable para poner los estilos y luego enviarlo al componente
// const estilos ={
//   backgroundColor: 'red'
// }
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
  //Uso de hook useContext
  const {
    completasTodos, 
    totalTodos} = React.useContext(TodoContext)

  return(
    <h1 className="TodoCounter">
      Has completado <span>{completasTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export  { TodoCounter }