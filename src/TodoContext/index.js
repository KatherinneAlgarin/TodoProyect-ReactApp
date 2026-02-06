import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    //Estados derivado
    //Uso de nuestro custom hook
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_VN1', []);
    const [searchValue, setSearchValue] = React.useState('');

    //Estado del modal
    const [openModal, setOpenModal] = React.useState(false);

    const completasTodos = todos.filter(todo => !!todo.completas).length;
    const totalTodos = todos.length;


    const searchedTodo = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    const completaTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completas = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completas: false,
        });
        saveTodos(newTodos);
    }


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completasTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodo,
            completaTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>

    );
}


export { TodoContext, TodoProvider }