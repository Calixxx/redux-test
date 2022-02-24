import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductList from './components/ProducList';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import Header from './components/Header';

ReactDOM.render(
  <Provider store = { store }>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProductList />}/>
      <Route path='/Home' element={<App />}/>
      <Route path='/product/:productId' element={<ProductDetail />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
  </Provider>,document.getElementById('root')
)