import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';

if (module.hot){
    module.hot.accept();
}
ReactDOM.render(<HomePage/>,document.getElementById('root'))