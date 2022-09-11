import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://molzi.com/wp-content/uploads/2020/09/Primeday-Bannerx2.jpg" alt="checkout banner" />
            
                    <div>
                    <h2>Hi, {user?.email}</h2>
                    <h1 className="checkout__title">Your this is your shopping basket:</h1>

                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
                
            </div>
        </div>
    );
}

export default Checkout;
