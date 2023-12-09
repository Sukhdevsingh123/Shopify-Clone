
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Login_Img from './Login_Img';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

function SignIn(props) {
    const navigate = useNavigate();
    // const history = useHistory();
    const [inputValue, setInpVal] = useState({
        name: '',
        email: '',
        date: '',
        password: '',


    })
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
        const getItems = localStorage.getItem('userData');
        const { email, password } = inputValue;
        // console.log(name,email,date,password);

        if (!(email.includes("@"))) {
            alert("please enter valid email");
        }

        else if (password.length < 5) {
            alert("password too short")
        }
        else {
            console.log("data match");
            const userData = JSON.parse(getItems)
            // console.log(userData);
            const newArray = [];
            userData.map((e) => {
                newArray.push(e)
            });
            for (var a in newArray) {
                // console.log(newArray[a].email);
                if (email === newArray[a].email && password === newArray[a].password) {
                    alert("your data is successfully match ");
                    navigate("/") ;
                }
                else {
                    alert("your data is not match ");
                }
            }
            // console.log(inputValue);
            // const match=inputValue.map((e)=>{

            // })
        }
    }

    return (
        <>
            <div className="container">

                <section className='row  justify-content-evenly'>
                    <div className='col-md-6'>
                        <div className="left_content mt-5 " style={{ width: "100%", }} >
                            <h3 className='text-center'>Sign In</h3>
                            <Form>


                                <Form.Control type="Email" className='col-lg-6 mt-2' name='email' onChange={getData} placeholder="Enter Email" />
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
                <p className='text-danger  p-3' style={{ fontSize: "22px", }}>Don't have an account ?  <NavLink to='/Sign'><span> Create New Account</span></NavLink></p>
            </div>



        </>
    );
}

export default SignIn;