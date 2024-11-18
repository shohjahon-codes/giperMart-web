import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../../components/layout/layout';

const CartSummaryPage = () => {
    const cartItems = useSelector((state) => state.cart.items);


    const formatCurrency = (value) => {
        return new Intl.NumberFormat('uz-UZ', {
          style: 'currency',
          currency: 'UZS',
         
          minimumFractionDigits: 0, 
        }).format(value);
      };
    

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = Number(item.price.replace(/\s+/g, ''));
        const quantity = Number(item.quantity);
        return acc + price * quantity;
      }, 0);

    const formattedTotalPrice = formatCurrency(totalPrice);

    const InputField = ({ label, type = "text", name, value, onChange }) => (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    const [deliveryAddress, setDeliveryAddress] = useState({
        address: '',
        city: '',
        zip: '',
    });

    const handleChangePayment = (e) => {
        setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
    };

    const handleChangeDelivery = (e) => {
        setDeliveryAddress({ ...deliveryAddress, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting Order with Payment Details and Delivery Address:', paymentDetails, deliveryAddress);
    
    };

    return (

        <Layout>
        <div className="cart-summary-page container mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="order-items">
                {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between border-b py-4">
                         <span className='w-20'><img src={item.img} alt="" /></span>
                        <span>{item.name}</span>
                        <span>${item.price} x {item.quantity}</span>
                    </div>
                ))}
            </div>
            <div className="total-price my-4">
                <strong>Total Price: </strong>{formattedTotalPrice}
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
                <h3 className="text-xl font-bold mb-2">Payment Information</h3>
                <InputField label="Card Number" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleChangePayment} />
                <InputField label="Expiry Date" name="expiry" value={paymentDetails.expiry} onChange={handleChangePayment} />
                <InputField label="CVV" type="password" name="cvv" value={paymentDetails.cvv} onChange={handleChangePayment} />

                <h3 className="text-xl font-bold mb-2 mt-6">Delivery Address</h3>
                <InputField label="Address" name="address" value={deliveryAddress.address} onChange={handleChangeDelivery} />
                <InputField label="City" name="city" value={deliveryAddress.city} onChange={handleChangeDelivery} />
                <InputField label="ZIP/Postal Code" name="zip" value={deliveryAddress.zip} onChange={handleChangeDelivery} />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Place Order
                </button>
            </form>
        </div>
        </Layout>
    );
};

export default CartSummaryPage;
