import './TodoItem.css'
//Importamos nuestros iconos que estan en otros archivos
import{CompleteIcon} from "../TodoIcon/CompleteIcon.js"
import {DeleteIcon} from "../TodoIcon/DeleteIcon.js"

function TodoItem(props){
  return(
    <li className='TodoItem'>
      {/* <span 
      className={`Icon Icon-check ${props.completas && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >V</span> */}
      <CompleteIcon
        completas={props.completas}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completas && 'TodoItem-p--complete'}`}>{props.text}</p>

      <DeleteIcon
        onDelete={props.onDelete}/>
        
      {/* <span className='Icon Icon-delete'
      onClick={props.onDelete}
      >X</span> */}
    </li>
  );
}

export { TodoItem }