import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
const [{ basket, user }, dispatch] = useStateValue();

if(basket.length !==0) { 
// ITEMS IN THE BASKET
    return (
    <> 
        <div className="checkout">

            <div className="checkout__left">
                <img 
                className='checkout__ad'
                src="https://1.bp.blogspot.com/-F0BtOgn4PNk/WBjiYoidSxI/AAAAAAABI5o/CYn3byqp61k9KhLatkDPRsQwRJ0t_207wCLcB/s1600/Amazon_Canada_blackfridaydeals.png"
                alt="checkout__banner"/>

            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
        
        <div className="checkout__products">

                <div className="checkout__title">
                    <h2>Shopping Cart</h2>
                    <h3 >{!user ? '' : 'Hi, ' + user.email}</h3>
                </div>
             

                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            quantity={item.quantity}
                        />
                    ))}
                       
        </div> 

        <div className="checkout__noProductsBottom"></div>
        <div className="checkout__noProductsBottomText">The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</div>
    </>
     
    )

} else { 
// NO ITEM IN THE BASKET
    return (
    <div>
        <div className="checkout">

            <div className="checkout__left">
                <img 
                className='checkout__ad'
                src="https://1.bp.blogspot.com/-F0BtOgn4PNk/WBjiYoidSxI/AAAAAAABI5o/CYn3byqp61k9KhLatkDPRsQwRJ0t_207wCLcB/s1600/Amazon_Canada_blackfridaydeals.png"
                alt="checkout__banner"/>
                   
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>

        <div className="checkout__noProducts">
            <div className="checkout__left__empty">

                    <img className="checkout__emptyBasketImg"
                            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                            alt="empty-basket-pic"
                        />

                    <div className="checkout__textEmptyBasket">  
                        <h2>
                            {!user ? 'Your Amazon Cart is empty' : 'Hi, ' + user.email + ', your Amazon Cart is empty'}
                        </h2>
                        
                        <Link to='/login'>
                           {!user ? <button className="btn">Sign in to your account</button> : ''}
                        </Link>
                    </div>

            </div>
        </div>

        <div className="checkout__noProductsBottom"></div>
        <div className="checkout__noProductsBottomText">The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</div>

    </div>
    )
}
}

export default Checkout;
