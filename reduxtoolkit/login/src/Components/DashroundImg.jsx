import RoundImg from '../data/RoundImg'
import { useState } from 'react';
import '../css/Dashboard.css'
function DashroundImg(props) {
    // const [img,setImg]=useState(RoundImg)
    // console.log(img)
const Img=RoundImg.map((data)=>(
    <div className='main-round'>
       <div className='main-img'>
         <img src={data.img} alt='img' style={{}}/>
         </div>
         </div>

));
// console.log('img',data)

    return (
        <>
            
            <div className='container ' >
                <div className='row '>
                    <div className='col' >      
                <div className='main col-lg-8 col-sm-6 col-md-4'> 
                    {Img}
                </div>
            
                    
                           </div>
                        </div>
                    </div>
               
        </>
    );
}

export default DashroundImg;