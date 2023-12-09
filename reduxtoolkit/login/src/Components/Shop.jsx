import { useSelector, useDispatch } from 'react-redux';
import { remove } from './store/Cartslice';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


function Shop(props) {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(0);

    const product = useSelector(state => state.cart);//data come fro redux in product

    const dispatch = useDispatch();
    const removetoCart = (id) => {
        // console.log('id is:',id);
        dispatch(remove(id));
    }
    const navigate = useNavigate();
    const ShowMore = () => {
        navigate("/Product");
    };

    const increaseCount = (price) => {
        setCount(count + 1)
        setPrice(price * (count + 1))

    }

    const decreaseCount = (price, originalPrice) => {
        console.log(price);
        setCount(count - 1)
        setPrice(price - originalPrice)

    }
    const cards = product.map((product, index) => (

        <div className="card my-4">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={product.image} alt="Product Image" className="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">$:{product.price}</p>
                        <p className="card-text">In stock</p>

                        <div className="form-group">
                            <label htmlFor="size">Size:</label>
                            <select className="form-control" id="size">
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                        </div>

                        <div className="row mt-2 mb-2">
                            <div className="col-md-6 mb-2">
                                <button className="btn btn-dark btn-block" >
                                    Pay now
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-outline-secondary bg-primary text-white btn-block" onClick={() => removetoCart(product.id)} >
                                    Remove
                                </button>
                            </div>
                        </div>

                        {/* <button className="btn btn-outline-secondary mt-2 btn-block" type="button" aria-label="Like">
                            Like
                        </button> */}

                        <button className="btn btn-outline-none   btn-block fs-2" type="button" onClick={() => increaseCount(product.price)} >
                            +
                        </button>
                        <span className='p-3 text-center'>{count}</span>

                        <button className="btn btn-outline-none  btn-block fs-2" type="button" onClick={() => decreaseCount(price, product.price)} >
                            -
                        </button>
                        {
                            count <= 1 ?
                                <p className='p-3 mt-1 text-primary fs-4 font-weight-bold '>SubTotal= ${product.price}</p>
                                :
                                <p className='p-3 mt-1 text-primary fs-4 font-weight-bold '>SubTotal= ${price}</p>

                        }





                        <p className="mt-2 text-secondary  ">Free shipping on all continental US orders.</p>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <div className="container mt-4">

                {
                    cards.length == 0 ? <div>
                        <h6 className='text-center text-danger'>Cart is empty</h6>
                        <Button variant="success" style={{ margin: '5% 35%', height: '15%', width: "30%" }} onClick={ShowMore}>
                            Shop Now

                        </Button>
                    </div>
                        : <p></p>
                }
                {cards}

            </div>
            <Footer/>


        </>
    );
}

export default Shop;