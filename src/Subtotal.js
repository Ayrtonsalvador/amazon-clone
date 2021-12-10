import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketQuantity, getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {

    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({getBasketQuantity(basket)} item<span className='plural'>{getBasketQuantity(basket)<2? '' : 's'}</span>):&nbsp;
                    <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input className="subtotal__giftInput" type='checkbox' />This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            suffix={"€"}
            />
            <button onClick={e => history.push('/payment')} className="subtotal__button">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
