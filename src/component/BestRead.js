import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BestRead = ({match,history}) => {
    const id = match.params.id;
    const [product, setProduct]= useState();
    const callAPI = async()=>{
        const result=await axios.get(`/best/read/${id}`)
        setProduct(result.data);
    }
    useEffect(()=>{
        callAPI();
    
},[])
const onDelete = async(url)=>{
    if(!window.confirm(`${id}번 상품을 삭제하실래요?`)) return;
    await axios.post('/best/delete',{id:id, url:url})
    history.push('/best/list')
}
if(!product) return <h1>데이터를 불러오는 중입니다.</h1>
  return (
    <div style={{width:'100%'}}>
        <h1>Best Infomation</h1>
        <h3>Title: [{product.id}]{product.title}</h3>
    <h3>price:${product.fprice}</h3>
    <h3>Regsister Date: ${product.fdate}</h3>
    <div><img src={product.linkImg} width={300}/></div>
    <hr/>
    <button onClick={()=>onDelete(product.linkImg)}>Delete</button>

        

    </div>
  )
}

export default BestRead