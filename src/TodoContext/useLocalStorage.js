import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);

  //Estado para verificar si es un array vacio o un array donde no le han cargado los datos
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  //Crear efetco
  React.useEffect(
    () => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem) {
            //Cuando el usuario entre por primersa vez a la aplicacion
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;

          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }

          setLoading(false);

        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    });


  //Funcion para guadar cambios en localstorage y estado
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };


  return { item, saveItem, loading, error };
};

export { useLocalStorage }

// localStorage.removeItem('TODOS_VN1');
// const defaultTodos = [
//         { text: 'cortar cebolla', completas: true },
//         { text: 'estudiar', completas: false },
//         { text: 'limpieza', completas: false },
//         { text: 'salir', completas: false },
//         { text: 'u', completas: true },
//       ];

// localStorage.setItem('TODOS_VN1', JSON.stringify(defaultTodos));
