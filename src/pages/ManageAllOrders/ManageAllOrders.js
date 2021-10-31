import React, { useEffect, useState } from 'react';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://chilling-vault-19684.herokuapp.com/getOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            {
                orders.map(order => <ul>
                    <li>Name:{order.name}</li>
                    <li>Email:{order.email}</li>
                    <li>Phone:{order.Phone}</li>
                    <li>Addess:{order.adress}</li>
                </ul>)
            }
        </div>
    );
};

export default ManageAllOrders;