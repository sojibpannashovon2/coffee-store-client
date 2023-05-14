import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import swal from 'sweetalert';

const UpdateCoffe = ({ product, products, setProducts }) => {

    // console.log(product);

    const { _id, photo, name, details, quantity } = product

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )

                            const remaining = products.filter(cof =>
                                cof._id !== _id
                            )
                            setProducts(remaining)
                        }
                    })
            }
        })
    }

    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl border border-success">
                <figure><img className='w-fit h-64 p-4' src={photo} alt="Movie" />
                </figure>
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Details: {details}</h2>
                    <h2 className="card-title">Quantity: {quantity}</h2>



                </div>
                <div className="card-actions flex flex-col my-auto mx-4">
                    <button className="btn btn-secondary">View</button>
                    <Link to={`/coffeeDeatils/${_id}`}>
                        <button className="btn btn-secondary">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-danger bg-red-600">Delete</button>

                </div>
            </div>
        </>
    );
};

export default UpdateCoffe;