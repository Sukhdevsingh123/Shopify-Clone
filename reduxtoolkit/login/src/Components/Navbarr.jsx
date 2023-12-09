import { useNavigate } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";
import Images from '../Images/Images';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { IoIosHeartEmpty } from 'react-icons/io';
import { BsFillBagFill } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa6';

import '../css/Navbarr.css'
import { setInputQuery } from '../Components/store/Searchslice'
import { useDispatch, useSelector } from 'react-redux';



function Navbarr(props) {
    const cartProducts = useSelector(state => state.cart);
    const {user, loginWithRedirect,isAuthenticated,isLoading,logout } = useAuth0();
    // console.log('user',user)

  

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        const inputValue = (e.target.value);
        dispatch(setInputQuery(inputValue));
    }
    if(isLoading){
        <div>Loading...</div>
    }
    return (
        <>
            <div className='Nav d-flex justify-content-between align-items-center' style={{ height: '55px', width: "100%", marginBottom: '1%', marginTop: '1%' }}>
                <div className='logo'>
                    <div className='main_header d-none d-lg-block '>
                        <img src={Images.ShoppyLogo} alt='logo' style={{ height: '100px', width: '150px' }} />
                    </div>
                </div>
                <div className='Search' >
                    <div>
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="search"

                                        placeholder="Search Products..."
                                        className=" mr-sm-2"
                                        onChange={handleSearch}
                                    />
                                </Col>

                            </Row>
                        </Form>
                    </div>
                </div>
                {/* ///cart and like symbol */}
                <div className='like-cart '>
                    <div>
                        {
                            isAuthenticated ?   <button onClick={() => loginWithRedirect()} style={{border:'none',outline:'none',backgroundColor:'transparent'}}>
                    {/* <span>Hi,{user.given_name}</span> */}
                    <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{fontWeight:'bold',color:'blue'}}>Log Out</span>
                    <img src={user.picture} alt='user.name' style={{width:'30px',height:'30px',borderRadius:'50%'}}/>
                    
                        </button>
                      
                        :
                        <button onClick={() => loginWithRedirect()} style={{border:'none',outline:'none',backgroundColor:'transparent'}}>
                            <FaRegUser  size={'25px'} />
                        </button>
                        }
                        
                    </div>
                    {/* <div>
                        <IoIosHeartEmpty size={'25px'} />
                    </div> */}
                    <div> <button className='cartbutton' onClick={() => navigate('./Shop')}>
                        <BsFillBagFill size={'30px'} /><sup className='superScript '>{cartProducts.length}</sup>
                    </button>
                    </div>
                </div>
            </div>

   
        </>
    );
}

export default Navbarr;