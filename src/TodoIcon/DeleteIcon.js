//SI TENEMOS NUESTROS ICONOS EN SVG U IMAGEN ETC
import React from "react";
//Importamos nuestra "libreria de iconos"
import {TodoIcon} from './'

function DeleteIcon({onDelete}){
    return (
        <TodoIcon
        type='delete'
        color='gray' 
        onClick={onDelete}
        />
    )
}

export {DeleteIcon}