import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { getBasketQuantity, getBasketTotal } from './reducer';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { db } from './firebase';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect( () => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent from refreshing
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
               }
        }).then(({ paymentIntent }) => { // = payment confirmation

            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <>
            <h1 className='payment__container__h1'>
                Checkout (
                    <Link to='/checkout'>{getBasketQuantity(basket)} item<span className='plural'>{getBasketQuantity(basket)<2? '' : 's'}</span></Link>)
            </h1>

            <div className='payment'>


                <div className='payment__container'>


                    <div className='payment__section'>
                        <div className='payment__title'>
                            <h3>Delivery Address</h3>
                        </div>
                        
                        <div className='payment__address'>
                            <p>{user?.email}</p>
                            <p>88 pink piggies avenue</p>
                            <p>Cochonia, CO</p>
                        </div>
                        
                    </div>


                    <div className='payment__section'>
                        <div className='payment__title'>
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className='payment__items'>
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
                    </div>


                    <div className='payment__section'>

                        <div className='payment__title'>
                            <h3>Payment Method</h3>
                        </div>

                        <div className='payment__details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                <div className='payment__priceContainer'>

                                    <CurrencyFormat 
                                        renderText={(value) => (
                                            <h3 className='payment__details__h3'>Order Total:&nbsp;{value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={"€"}
                                        />
                                        <button className='payment__details__button' disabled={processing || disabled || succeeded }>
                                            <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                        </button>

                                </div>

                                        {error && <div>{error}</div>}

                            </form>

                        </div>
                    </div>

                </div>

            
                
            </div>
        </>
    )
};

export default Payment
