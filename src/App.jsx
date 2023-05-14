
import { useLoaderData } from 'react-router-dom'
import './App.css'
import UpdateCoffe from './components/UpdateCoffe';
import { useState } from 'react';

function App() {

  const loggedProducts = useLoaderData()
  // console.log(loggedProducts);
  const [products, setProducts] = useState(loggedProducts)
  return (
    <>
      <div>
        <h1 className=' text-center text-4xl font-bold my-4'>Hot Hot Coffee To Orders</h1>
        <div className='mx-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {
            products.map(product => <UpdateCoffe key={product._id}
              product={product}
              products={products}
              setProducts={setProducts}
            ></UpdateCoffe>)
          }
        </div>
      </div>
    </>
  )
}

export default App
