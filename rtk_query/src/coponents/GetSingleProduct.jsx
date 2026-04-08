import React from 'react'
import { useGetSingleProductQuery } from '../../app/service/dummyData';

const GetSingleProduct = () => {
    const {data,isError,isLoading,isSuccess} = useGetSingleProductQuery(1);
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
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>
        <p>Price: ${data?.price}</p>
    </div>
  )
}

export default GetSingleProduct