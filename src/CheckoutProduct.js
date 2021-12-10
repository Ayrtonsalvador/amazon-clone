import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, quantity, hideButton }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id, 
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image}
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <strong>{price}</strong>
                    <small>&nbsp;€</small>
                </p>
                <div className='checkoutProduct__rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><StarIcon className='product__starIcon'/></p>
                    ))}
                </div>

                {!hideButton && (

                    <div className='checkoutProduct__quantity'>
                        <h4 className='checkoutProduct__quantityElement'>Quantity: {quantity}</h4>

                        <IndeterminateCheckBoxIcon className='checkoutProduct__quantityElement'/>

                        <AddBoxIcon className='checkoutProduct__quantityElement'/>

                        <button className='checkoutProduct__quantityElement' onClick={removeFromBasket}
                    className='checkoutProduct__button'>Remove from Basket</button>

                    </div>

                )}


            </div>
        </div>
    )
}

export default CheckoutProduct;
