import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Shoesdata from '../data/Shoesdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { shoesStore } from './store/Cartslice';

function Shoes(props) {
  const [shoesData,setShoes]=useState(Shoesdata)
  const dispatch=useDispatch();
const navigate=useNavigate();
  const ShowMore = () => {
    navigate("/Product");
  };


  const addtoCart=(shoesData)=>{
    dispatch(shoesStore(shoesData));
  }

    const cards = Shoesdata.map((item, index) => (    //fetch product data
    <div key={index} className='col-md-3 col-sm-12' style={{ marginBottom: '10px' }} >
      <Card style={{ width: '100%', textAlign: 'center' }}>
        <Card.Img variant="top" src={item.image} style={{ width: '100%', height: '11rem',  objectFit:'contain'}} />
        <Card.Body>
          <Card.Title style={{ width: '100%', height: '90px', overflow: 'hidden' }} >{item.title}<br/><span className='text-secondary'>{item.description}</span></Card.Title>
         
          <Card.Text>$:{item.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant="primary" style={{ marginTop: "1%" }}  onClick={()=>addtoCart(item)}>Buy Now</Button>
        </Card.Footer>
      </Card>
    </div>


    ));
    return (
        <>
            <div className='container-fluid'>
        <div className='row ' >
          {cards}
        </div>
      </div>
      <Button  variant="success" style={{ margin: '5% 35%', height: '15%', width: "30%" }} onClick={ShowMore}>
        Go Product Page <FontAwesomeIcon icon={faAngleDown} />

      </Button>
      
        </>
    );
}

export default Shoes;