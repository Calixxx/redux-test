import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { setProducts } from '../redux/actions/products.action'

const ProductList = () => {

    const dispatch = useDispatch()

    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then( res => {dispatch(setProducts(res.data))})
            .catch( err => console.log('error :', err) )
    }

    useEffect(() => {
        fetchProducts()
    }, []);
    return(
        <div className='ui grid container'>
            <ProductCard/>
        </div>
    )
}

export default ProductList;