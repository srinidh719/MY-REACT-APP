import React, { useContext, useReducer } from 'react';

const CountContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function Parent() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <Child />
    </CountContext.Provider>
  );
}

function Child() {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Parent;
