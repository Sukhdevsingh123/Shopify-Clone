import React, { useState, useEffect } from 'react';
import '../css/Product.css';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './store/Cartslice';


function Product(props) {
  const [product, getProduct] = useState([]);
  const dispatch = useDispatch();
  const [laoding,setLoading]=useState(true);
  console.log('loading',laoding);
  // console.log(product)

  // ............................. input field data comes from redux ............................
  const inputData = useSelector(state => state.searchQuery.inputQuery);

  // ..................... product api call ..........................................................
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProduct(result));
      setLoading(false)
  }, []);


  // ........................ store api data into redux  .......................................................
  const addtoCart = (product) => {
    dispatch(add(product));
  };

  
  const groupedProduct = product.reduce((acc, curr, index) => {
    if (index % 3 === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);
  
  // ............................ cards make using map of product.concat ........................................
  

  
  const cards = groupedProduct.map((group, rowIndex) => (
    <div key={rowIndex} className="row">
      {/* .........................here i can filter data and map by chaining functionality................................. */}
      {group.filter((el) => {
        if (el === '') {
          return el
        }
        else {
          return (el.title.includes(inputData)) 
        }
      
      })
    .map((product, colIndex) => (
    
        <div key={colIndex} className='col-md-4  ' style={{ marginBottom: '10px', }}>

          <Card className='' style={{ width: '100%', textAlign: 'center' }}>
            <Card.Img className=' hover-zoom' variant="top" src={product.image} style={{ width: '100%', height: '10rem',  objectFit: 'contain' }} />
            <Card.Body>
              <Card.Title style={{ width: '100%', height: '90px', overflow: 'hidden' }}>{product.title}</Card.Title>
              <Card.Text>$:{product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: 'white' }}>
              <Button onClick={() => addtoCart(product)} variant="primary" style={{ marginTop: "1%" }}>Add To Cart</Button>
            </Card.Footer>
          </Card>
        </div>
  
      ))}
      
    </div>
  
  ));
  return (
    <>
      <h1 className=' text-center fs-2  mb-4'>Product Dashboard</h1>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
            {/* ................................. ................. button for filter data............................................... */}
            <div className='catogery d-none d-lg-block'>
              <ul >
                <li ><button onClick={() => alert('work')}>All Products</button></li>
                <li><button>Men</button></li>
                <li><button>Women</button></li>
                <li><button>Shirts</button></li>
                <li><button>SSD</button></li>
              </ul>
            </div>
          </div>
          {/* .................................cards are call here........................................ */}
          
            
            <div className='col col-lg-10 '>
              
              {cards}
              
          </div>
        </div>
      </div>
<Footer/>
    </>
  );
}

export default Product;
