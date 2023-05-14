import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const newCoffee = useLoaderData()
    const { _id, name, quantity, supply, taste, catagory, details, photo } = newCoffee;
    console.log(newCoffee);

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supply = form.supply.value;
        const taste = form.taste.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supply, taste, catagory, details, photo }
        // console.log(newCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // alert("New data added successfully");
                    swal({
                        title: "Success",
                        text: "Coffee Updated Successfully",
                        icon: "success",
                        dangerMode: true,

                    })

                }
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdate} className='text-center w-8/12 mx-auto pt-12 flex flex-col justify-center items-center border border-primary p-10 bg-blue-100'>
                <h1 className='text-4xl text-center font-bold mb-5'>Update Coffee Item</h1>
                {/* row 1 name and quantity */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Name</span>
                            <input type="text" defaultValue={name} name="name" placeholder="Enter coffee name" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Product Quantity</span>
                            <input type="text" placeholder="Enter coffee quantity" defaultValue={quantity} name="quantity" className="input input-bordered lg:px-24" required />
                        </label>
                    </div>
                    <br />

                </div>
                <br />
                {/* row 1 supplier */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Supplier Name</span>
                            <input type="text" name="supply" defaultValue={supply} placeholder="Enter coffee supplier name" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Taste</span>
                            <input type="text" placeholder="Enter coffee taste" defaultValue={taste} name="taste" className="input input-bordered lg:px-24" required />
                        </label>
                    </div>
                    <br />

                </div>
                <br />
                {/* row 1 catagories and details */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Catagory</span>
                            <input type="text" defaultValue={catagory} name="catagory" placeholder="Enter coffee catagory" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Details</span>
                            <input type="text" placeholder="Enter coffee details" defaultValue={details} name="details" className="input input-bordered lg:px-24" required />
                        </label>
                    </div>
                    <br />

                </div>
                <br />
                {/* row 1 name and quantity */}
                <div className=''>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Photo</span>
                            <input type="text" defaultValue={photo} name="photo" placeholder="Enter photo URL" required className="input input-bordered lg:px-72" />
                        </label>
                    </div>


                </div>


                <br />
                <div className="form-control w-48 mx-auto">

                    <label className="input-group input-group-vertical">

                        <input type="submit" className="input input-bordered btn btn-outline" value="update" required />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default CoffeeDetails;