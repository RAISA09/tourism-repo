import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../utilities/serverDb';

const ManageOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('https://chilling-vault-19684.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div className="add-services">
            <h2>Please add services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />
                <input defaultValue={user.email} {...register("email")} placeholder="Email" />
                <input type="number" {...register("Phone")} placeholder="Phone" />
                <input  {...register("adress")} placeholder="Address" />
                <input type="submit" />
            </form>
            <Link to="/manageAllOrder"> <button className="bg-dark text-white">Manage All Orders</button></Link>
        </div>
    );
};

export default ManageOrder;