import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order';
import { Link } from 'react-router-dom';

function Orders() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))

        } else {

            setOrders([]);

        }

    }, [user]);


if(user){

    return (
        <div className='orders'>
            <h1 className='orders__h1'>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )

} else {

    return (
            <div className='orders'>
                 <h1 className='orders__h1'>Your Orders</h1>
                 
                 <div className='orders__emptyDiv'>

                     <div>
                        <Link to='/login'>
                            <button className="orders__btn">Sign in to your account</button>
                        </Link>
                    </div>

                    <div className='orders__imgDiv'>
                        <img className="orders__noOrder__Img"
                            src="https://cdn.dribbble.com/users/429792/screenshots/3649946/media/bb28392f6e913c06c56495260d0204a6.png"
                            alt="no-order-pic"
                        />
                    </div>

                </div>

            </div>
           
                
    )
}
}

export default Orders;
