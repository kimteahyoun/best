import React, { useEffect, useState } from 'react'
import {data, dataBest} from './Data';
import Slider from "react-slick";
import axios from 'axios';
const SlickBest = () => {
    const [products, setProducts] = useState();
    const callAPI = async() =>{
        const result =await axios.get('/best');
        setProducts(result.data)
    }


    useEffect(()=>{
    callAPI();
},)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    if(!products) return <h1>데이터를 불러오는 중입니다...</h1>
  return (
    <Slider {...settings}>
        
            {products.map(p=>
                    <div key={p.id} className="card">
                            <div className='card-top'>
                                    <img src={p.linkImg} alt={p.title}/>
                                    <h1>{p.title}</h1>


                            </div>
                            <div className='card-bottom'>
                                <h3>${p.fprice}</h3>
                                <span className='category'>
                                    {p.category}
                                </span>



                            </div>

                        </div>
               
               
               
               )}
               </Slider>
    
        

   
  )
}

export default SlickBest