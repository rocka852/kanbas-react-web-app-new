import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";


export default function TodoForm(
) {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click" className="btn btn-success float-end me-2 ms-2"> Add </button>
      <button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click" className="btn btn-warning me-2 ms-2 float-end"> Update </button>
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="form-control-sm"
      />
    </li>
  );
}





/* old version
export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
  todo: { id: string; title: string };
  setTodo: (todo: { id: string; title: string }) => void;
  addTodo: (todo: { id: string; title: string }) => void;
  updateTodo: (todo: { id: string; title: string }) => void;
  }
  return (
    <li className="list-group-item">
      <button onClick={() => addTodo(todo)}
              id="wd-add-todo-click"> Add </button>
      <button onClick={() => updateTodo(todo)}
              id="wd-update-todo-click"> Update </button>
      <input value={todo.title}
        onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }/>
    </li>
  );
}
}) */





  