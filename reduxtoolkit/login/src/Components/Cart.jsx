import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './store/Cartslice';
import Footer from './Footer';

function Cart(props) {
  const product = useSelector(state => state.cart);//data come fro redux in product

  const dispatch = useDispatch();
  const removetoCart = (id) => {
    // console.log('id is:',id);
    dispatch(remove(id));
  }
  if(product.length==0){
    <h1>Cart is empty</h1>
  }
  
  
  const cards = product.map((product, index) => (    //fetch product data

    <div key={index} className='col-md-3 col-sm-6 ' style={{ marginBottom: '10px' }} >
      <Card style={{ width: '100%', textAlign: 'center' }}>
        <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '10rem', objectFit:'contain' }} />
        <Card.Body>
          <Card.Title style={{ width: '100%', height: '90px', overflow: 'hidden' }} >{product.title}<br/>{product.description}</Card.Title>
          <Card.Text>$:{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button onClick={() => removetoCart(product.id)} variant="light" style={{ marginTop: "1%" }}>Remove To Cart</Button>
          
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className=' text-center  fs-2  mb-4'>Buying Product</h1>
      <div className='container-fluid'>
        <div className='row ' >
          {
          cards.length==0 ?<h6 className='text-center text-danger'>Cart is empty</h6>:<p></p>
          }
          {cards}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Cart;