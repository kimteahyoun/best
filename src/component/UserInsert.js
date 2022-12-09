
import axios from 'axios';
import React, { Fragment, useRef, useState } from 'react'
import { Alert, useAccordionButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';



const UserInsert = ({history}) => {
   
    const [image, setImage] = useState('/a1.png')
    const [form,setForm] = useState({
        id:'',
        upass:'',
        uname:'',
      
    })
    const {id,upass,uname} = form;
    
    const [message,setMessage] = useState('');
    
        const onChange = (e) => {
            setForm({
        ...form,
        [e.target.name]:e.target.value
        })
    }
    const onChangeFile = (e)=>{

        setForm({
            ...form,
            file:e.target.files[0],
            fileName:e.target.value
        })
    }
    const onSubmit =async(e)=>{
        e.preventDefault();
        const result= await axios.get(`/users/read/${id}`);
        const user=result.data;
        if(user){
            setMessage('이미사용중인 아이디 입니다.')
            return;
        }
            const formData = new FormData();
           
            formData.append("id",id);
            formData.append("uname",uname);   
            formData.append("upass",upass);
            const config ={
                headers: {'content-type': 'multipart/form-data'},


            }
            await axios.get('/users/insert',formData, config);
        
        alert('회원가입이 완료')
        history.go(-1)

    }


  return (
    <div>
   
    <Card style={{ width: '18rem',margin:'0px auto',marginTop:'5rem' }} >
        <Card.Body>
            <Card.Title>회원가입</Card.Title>
                <Form onSubmit={onSubmit}>
                
                <Form.Control 
                onChange={onChange}

                value={id}
                name="id"
                className="my-3"
                placeholder='User ID'/>
                <Form.Control 
                onChange={onChange}
                value={upass}
                name="upass"
                className="my-3"
                type="password"
                 placeholder='Password'/>
                   {message &&  
          <Alert className='mx-3 text-center'>{message}</Alert>
        
        }
             
            
            <Button variant="danger" 
                
                onClick={onSubmit}
            style={{width:'100%'}}>가입</Button>
            
            </Form>

        </Card.Body>
        {message &&  
                <Alert className='mx-3 text-center'>{message}</Alert>
                


        
        }
    </Card>
    </div>
  )
}

export default UserInsert