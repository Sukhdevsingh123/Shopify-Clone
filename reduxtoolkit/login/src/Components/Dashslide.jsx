import React from 'react';
import Images from '../Images/Images'
import Button from 'react-bootstrap/Button'
function Dashslide(props) {
    // const img='../Images/shoes.png';
    return (
        <>
             <div className='container-fluid'>
                <div className='row dashboard d-flex align-items-center justify-content-between' >
                    <div className='col col-lg-6  col-sm-4 col-md-6'>
                        <h3 className='mt-5 mb-3'>New Year Sale</h3>
                        <h1 className='mb-5'> <span className='fs-3'>upto</span> 70% OFF</h1>
                        <Button variant="dark">Explore Now</Button>
                    </div>
                    <div className='col col-lg-6 col-sm-8 col-md-6'>
                        <img className='img-fluid' src={Images.two} alt='img' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashslide;