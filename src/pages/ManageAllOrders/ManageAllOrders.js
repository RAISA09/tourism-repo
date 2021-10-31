import React, { useEffect, useState } from 'react';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getOrders')
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