import React from 'react'
import { useGetAllProductsQuery } from '../../app/service/dummyData';

const AllProducts = () => {
      const {data,isError,isLoading,isSuccess} = useGetAllProductsQuery();
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
        {data?.products.map((product) => {
            return (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            )
        })} 
    </div>
  )
}

export default AllProducts