import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Khởi tạo action
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

// Khởi tạo reducer
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Khởi tạo store
export const store = createStore(counterReducer);

// Component CounterApp gộp tất cả vào một file
export const CounterApp = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
};

// Cung cấp store cho ứng dụng và render component
// ReactDOM.render(
//   <Provider store={store}>
//     <CounterApp />
//   </Provider>,
//   document.getElementById('root')
// );
