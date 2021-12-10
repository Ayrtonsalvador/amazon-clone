import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating, quantity }) {

const [{ basket }, dispatch ] = useStateValue();

const addToBasket = () => {

    const existingItem = basket.find((item) => id === item.id);

    if (existingItem) {

        dispatch({
                type: 'UPDATE_BASKET',
                item: {
                    id,
                    quantity: existingItem.quantity + 1
                }});

    } else {
            
        dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                    quantity: quantity,
                    }
                });
    }
    };

    return (
        <div className='product'>

            <div className='product__info'>

                <p>{title}</p>

                <p className='product__price'>
                    <strong>{price}</strong>
                    <small>&nbsp;€</small>
                </p>

                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p><StarIcon className='product__starIcon'/></p>
                    ))}
                    
                </div>

            </div>

            <img className='product__img'
                    src={image}
                    alt=''
            />

            <button onClick={addToBasket} className='product__button'>Add to Basket</button>

        </div>
    )
}

export default Product;
