import React from 'react'
import { useUpdateProductMutation } from '../../app/service/dummyData';

const UpdateProduct = () => {
    const [updateProduct,{data,isError,isLoading,isSuccess}] = useUpdateProductMutation();
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
        <button onClick={() => updateProduct({
            id: 1,
            title: "Updated Product",
            description: "This is an updated product",
            price: 200,
        })} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateProduct