import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BestItem from './BestItem';

const BestList = ({history}) => {
    const [products, setProducts] = useState();
    const [items, setItems] = useState([]);

    const callAPI = async()=>{
        const result = await axios.get('/best/list')
        setProducts(result.data);
    }
    useEffect(()=>{
    callAPI();
},[]);
const onSingle = (id, checked) =>{
    if(checked){
        setItems(items.concat(id));
    }else{
        setItems(items.filter(item=> item !== id));

    }
    }
    
const onAll = (checked)=> {
    if(checked){
        const all=[]
        products.forEach(p =>all.push(p.id))
            setItems(all)
    }else{
        setItems([]);
    
    }
}
const onClickToggle = async(show)=>{
    const message= show===1 ? '보이기':'숨기기';
    if(items.length===0) {
        alert(`${message}할 항목들을 선택하세요`)
        return;
    
    }

    if(!window.confirm(`${items.length}개 항목을 ${message}하실래요?`)) return;
    
    
    for(let i=0; i<items.length; i++){
    const data={id:items[i],isShow:show};
    await axios.post('/best/toggle',data);
}
    callAPI();
    setItems([]);

};


const onClickRow = (id) =>{
    history.push(`/best/read/${id}`)

}
if(!products) return <h1>데이터를 불러오는 중입니다</h1> 
  return (
    <div>


        <h1>Best product List</h1>
        <div>
            <button onClick={()=>onClickToggle(1)}>보이기</button>
            <button onClick={()=>onClickToggle(0)}>숨기기</button>
        </div>
        <table>
            <tbody>
                <tr>
                    
                   
                    <td>
                        <input type="checkbox"
                        onChange={(e)=>onAll(e.target.checked)}
                        checked={products.length===items.length && true}/>
                        </td>
                    <td>id</td>
                    <td>Title</td>
                    <td>category</td>
                    <td >price</td>
                    <td >Show</td>
                </tr>
            {products.map(p=>
            <tr key={p.id}  
            className={!p.isShow ? 'linethrough': 'row'
            }>
                <BestItem items={items} onClickRow={onClickRow}
                 product={p} onSingle={onSingle}/>
                </tr>

                                    )}

            </tbody>
        </table>
       

    </div>
  )
}

export default BestList