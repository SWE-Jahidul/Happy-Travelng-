import React, { useLayoutEffect, useState } from 'react';
import { useFormState } from 'react-hook-form';
import Order from '../Order/Order';

const ManageOrder = () => {
    const [order, setOrder] = useState();
    useLayoutEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    console.log("pace", order);
    return (
        <>

<div className="text-center m-5">
                <h1>All User Order Page</h1>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Package</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        order?.map((iteam, index) => (<Order
                            key={iteam._id}
                            iteam={iteam}
                        > </Order>))
                    }

                </tbody>
            </table>

        </>
    );
};

export default ManageOrder;