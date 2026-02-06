//SI TENEMOS NUESTROS ICONOS EN SVG U IMAGEN ETC
import React from "react";
//Importamos nuestra "libreria de iconos"
import {TodoIcon} from './'


function CompleteIcon({completas, onComplete}){
    return (
        <TodoIcon
        type='check'
        color={completas ? 'green': 'gray'}
        onClick={onComplete
            
        }/>
    )
}

export {CompleteIcon};