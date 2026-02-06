import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos'
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'; 
import { TodoContext } from '../TodoContext';

function AppUI() {

  const {
    loading,
    error,
    searchedTodo,
    completaTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (<>
          <TodosLoading />
          <TodosLoading />
          <TodosLoading />
        </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodo.length === 0) && <EmptyTodos />}


        {searchedTodo.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completas={todo.completas}
            onComplete={
              () => completaTodo(todo.text)
            }
            onDelete={
              () => deleteTodo(todo.text)
            }
          />
        ))}


        {/* Segunda forma de hacerlo--------------------- */}
        {/* {defaultTodos.map((todo,index)=>(
                <TodoItem key={index} text={todo.text}/>
            ))}
        {[<TodoCounter>,</TodoCounter>]} */}

      </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          {/* Adentro poner toda la logica o componentes que se quiera teletransportar entre nodos de html */}
          <TodoForm/>
        </Modal>
      )}

    </>
  );
}

export { AppUI }