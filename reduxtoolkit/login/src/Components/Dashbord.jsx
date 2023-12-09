import { useState } from 'react';
import Dashslide from './Dashslide';
// import DashroundImg from './DashroundImg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../css/Dashboard.css'
import Data from '../data/Data';
import Dashslide2 from './Dashslide2';
import { useDispatch, useSelector } from 'react-redux';
import { dashStore } from './store/Cartslice';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Dashbord(props) {
  const [Datas, setData] = useState(Data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputData = useSelector(state => state.searchQuery.inputQuery);


  const addTocart = (Datas) => {
    dispatch(dashStore(Datas));

  }
  const cards = Datas.filter((el) => {
    if (el === '') {
      return el
    }
    else {
      return (el.title.includes(inputData))
    }
  }).map((item, index) => (    //fetch product data
    <div key={index} className='col-md-3 col-sm-12' style={{ marginBottom: '10px' }} >
      <Card style={{ width: '100%', textAlign: 'center' }}>
        <Card.Img variant="top" src={item.image} style={{ width: '100%', height: '10rem', objectfit: 'contain' }} />
        <Card.Body>
          <Card.Title style={{ width: '100%', height: '90px', overflow: 'hidden' }} >{item.title}</Card.Title>
          <Card.Text>$:{item.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant="primary" style={{ marginTop: "1%" }} onClick={() => addTocart(item)}>Buy Now</Button>
        </Card.Footer>
      </Card>
    </div>

  ));


  const ShowMore = () => {
    navigate("/Product");
  };



  return (
    <>
      <Dashslide />
      {/* <DashroundImg /> */}
      <h1 className=' text-center fs-2 mb-4'>Top Products</h1>
      <div className='container-fluid '>
        <div className='row ' >
          {cards}
        </div>
      </div>
      <Button variant="success" style={{ margin: '5% 35%', height: '15%', width: "30%" }} onClick={ShowMore}>
        Show More Product  <FontAwesomeIcon icon={faAngleDown} />

      </Button>
      <Dashslide2 />
      <Footer/>
    </>
  );
}

export default Dashbord;