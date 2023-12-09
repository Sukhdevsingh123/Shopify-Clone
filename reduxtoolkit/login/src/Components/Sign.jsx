import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Login_Img from './Login_Img';
import { useState } from 'react';
import SignIn from './SignIn';
import { NavLink,useNavigate } from 'react-router-dom';


function Sign(props) {
    const [inputValue, setInpVal] = useState({
        name: '',
        email: '',
        date: '',
        password: '',
    })
    let navigate=useNavigate();
    function getData(e) {
        // const value=e.target.value;
        // const name=e.target.name;
        // console.log(value,name);

        const { value, name } = e.target;
        setInpVal(() => {
            return {
                ...inputValue, [name]: value
            }
        })
    }

    
    //  console.log(inputValue);
    function SubmitData(e) {
        e.preventDefault();
        const { name, email, date, password } = inputValue;
        // console.log(name,email,date,password);
        if (name === '') {
            alert("please enter name");
        }
        else if (!(email.includes("@"))) {
            alert("plaese enter valid email");
        }
        else if (date === '') {
            alert('date is required');
        }
        else if (password.length < 5) {
            alert("password too short")
        }
        else {
            // console.log(inputValue)
            localStorage.setItem('userData', JSON.stringify([inputValue]));
            navigate('SignIn');

        }
    }

    return (
        <>
            <div className="container">

                <section className='row justify-content-evenly'>
                <div className='col-md-6'>
                <div className="left_content mt-3 " style={{ width: "100%", }} >
                        <h3 className='text-center'>Sign Up</h3>
                        <Form>
                            <Form.Control type="text" className='col-lg-6 mt-2' name='name' onChange={getData} placeholder="Enter Your Name" />
                            <br />
                            <Form.Control type="Email" className='col-lg-6 mt-2' name='email' onChange={getData} placeholder="Enter Email" />
                            <br />
                            <Form.Control className='col-lg-6 mt-2' type="Date" name='date' onChange={getData} />
                            <br />
                            <Form.Control type="Password" className='col-lg-6 mb-3' name='password' onChange={getData} placeholder="Password" />
                        </Form>
                        <Button variant="primary" className='col-lg-6 mt-3 ' onClick={SubmitData} style={{ width: "100%" }}>Submit</Button>
                    </div>
                </div>
                <div className='col-md-4 offset-md-2'>
                <Login_Img />   {/* limg section */}

                </div>
                  

                   
                </section>
<p className='text-danger m-3 p-3' style={{fontSize:"22px",}}>Already have an account ? <NavLink to='SignIn'><span> sign in</span></NavLink></p>
            </div>



        </>



    );
}

export default Sign;