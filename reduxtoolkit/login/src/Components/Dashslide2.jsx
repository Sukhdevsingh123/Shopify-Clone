import React from 'react';
import Button from 'react-bootstrap/Button'
import Shoes from './Shoes';

function Dashslide2(props) {
    
    return (
        <>
             <div className='container-fluid'>
                <div className='row dashboard2 d-flex align-items-center justify-content-between' >
                    <div className='col col-lg-12  col-sm-12 col-md-12'>
                        <h4 className='mt-5 mb-3'>Top Selling</h4>
                        <h1 className='mb-5'>  Brands Shoes Will<br/> Be Here</h1>
                        <Button variant="danger" >Show More</Button>
                    </div>
                </div>
            </div>
            <Shoes/>

        </>
    );
}

export default Dashslide2;