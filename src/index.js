import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './component/demousestate';
// import Counter from './component/useeffets';
// import Component1 from './component/reactcontext';
import Appuseref from './component/demouseref';
import Todos from './component/demousereducer';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Car/>
    <Counter />
    <Component1 /> */}
    <Appuseref />
    <Todos />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
