import React from 'react'
import { useAddProductMutation } from '../../app/service/dummyData';

const AddnewProduct = () => {
    const [addProduct,{data,isError,isLoading,isSuccess}] = useAddProductMutation();
    // console.log(data,isError,isLoading,isSuccess); 

    if(isError){
        return <h1>Something went wrong</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isSuccess){
        console.log(data);
    }

  return (
    <div>
        <button onClick={() => addProduct({
            title: "New Product",
            description: "This is a new product",
            price: 100,
        })} disabled={isLoading}>Add New Product</button>
    </div>
  )
}

export default AddnewProduct