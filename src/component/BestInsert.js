
import axios from 'axios';
import React, { useState } from 'react'


const BestInsert = ({history}) => {
    const [image, setImage] = useState('https://dummyimage.com/300x200');
    const [form,setForm] = useState({
        title:'',
        category:'play station',
        price:'',
        file:null,
        filename:''


    })
    const {title, category, price,file,filename} = form;

    //form Data값이 바뀐경우
    const onChange=(e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    

    //미리보기 함수
    const onChangeFile = (e) =>{
        const render=new FileReader();
        render.onload = (e) => {
            setImage(e.target.result);
        }
        render.readAsDataURL(e.target.files[0]);
        setForm({
            ...form,
            file:e.target.files[0],
            filename: e.target.value
        })
    }

    //Register 버튼 클릭
   const onSubmit = async(e) =>{
    e.preventDefault();
    if(title==='' || price===''|| filename===''){
        alert('모든 항목을 입력하세요')
        return;
    }
    console.log('form.....',form)
    if(!window.confirm('새로운 상품을 등록하실래요?')) return;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title',title);
    formData.append('category', category);
    formData.append('price',price);
    const config={
        headers: {'content-type': 'multipart/form-data'}


    }
    await axios.post('/best/insert',formData, config);
    history.push('/best/list');

   }
  return (
    <div className='form_best'>
        <h1>Best  Regsister</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange}value={title} name="title"placeholder='Title'/>
            <select onChange={onChange}name="category" value={category}>
                <option>Nintendo Switch</option>
                <option>Play Station</option>
                <option>X-box</option>
            </select>
            <input onChange={onChange}value={price} placeholder='Price' name="price"/>
            <img src={image} width={300}/>

            <input type="file" onChange={onChangeFile} name="file"/>
            <button>Best Regsister</button>

        </form>
    </div>
  )
}

export default BestInsert