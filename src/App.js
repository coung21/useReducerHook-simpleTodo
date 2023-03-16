import React, { useRef, useReducer } from 'react';
import { ACTIONS } from './ACTIONS';
import './App.css';
import { INITIAL_STATE, todoReducer } from './todoReduder';

function App() {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const todoRef = useRef();

  const addTodo = () => {
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { todo: todoRef.current.value, selected: true },
    });
    console.log(state);
  };

  const inputVal = (event) => {
    dispatch({ type: ACTIONS.INPUT_TODO, payload: event.target.value });
    console.log(state);
  };

  return (
    <div className='App'>
      <div style={{ padding: '0 20px' }}>
        <h2>Todo</h2>
        <input
          ref={todoRef}
          value={state.value}
          type='text'
          placeholder='Enter tasks..'
          onChange={inputVal}
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {state.todos.map((item) => (
            <li key={item}>
              {item}{' '}
              <span
                onClick={() =>
                  dispatch({ type: ACTIONS.REMOVE_TODO, payload: item })
                }
                style={{ fontSize: '20px', cursor: 'pointer' }}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
