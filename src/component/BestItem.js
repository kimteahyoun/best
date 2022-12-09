import React from 'react'
import { Link } from 'react-router-dom';

const BestItem = ({product, onSingle,items}) => {
    const {id,title,linkImg,category,fprice,isShow} = product;
  return (
   
        <>
            <td><input type="checkbox"
              onChange={(e)=>onSingle(id,e.target.checked)}

              checked={items.includes(id)}/>
           
            
            </td>
        <td>{id} </td>
        <td>
           <>
           <Link to={`/best/read/${id}`}>
        <div className='title ellipsis'>{title}</div>
        </Link>

        </>
        
        </td>
        <td >{category}</td>
        <td>${fprice}</td>
        <td >{isShow}</td>
        </>

    
  )
}

export default BestItem