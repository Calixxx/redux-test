import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = () => {

    const products = useSelector(state => state.allProducts.products)

    const renderList = products.map( (product) => {
        return(
            <div  key = {product.id} className='four wide column'>
                <Link to = {`/product/${product.id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src=  { product.image }  alt={product.title} />
                            </div>
                            <div className='content'>
                                <div className='header'>{product.title}</div>
                                <div className='meta price'>$ {product.price}</div>
                                <div className='meta'>{product.category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    } ) 
    return(
        <>
            {renderList}
        </>
    )

    
}

export default ProductCard;