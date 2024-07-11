import React from 'react'
import "./loginpage.css";
import { useState } from 'react';
import Header from "./Header";
import axios from "axios"
import Sidebar from "./Sidebar";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom";
function LoginPage() {
    // <div>
    //     <Header></Header> 
    //   <Sidebar></Sidebar> 

    // </div>
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate('/dashboard');
    };

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        // const response = await axios.post('http://localhost:3000/login', {
        //   email,
        //   password,
        // });
        // console.log('Server response:', response.data);
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/dashboard');
        // Handle success, e.g., show a success message to the user
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, e.g., show an error message to the user
      }

    
    
    // Add your login logic here
    // console.log('Email:', email);
    // console.log('Password:', password);
    // navigate('/dashboard');
  };

    return (
        <div>
            <div class="tab-content">
                    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        {/* <form> */}
                            <div class="text-center mb-3">
                                <p>Sign in with:</p>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-google"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-github"></i>
                                </button>
                            </div>

                            <p class="text-center">or:</p>

                            {/* <div>
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="email" id="loginName" class="form-control" required />
                                <label class="form-label" for="loginName">Email or username</label>
                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="password" id="loginPassword" class="form-control" required />
                                <label class="form-label" for="loginPassword">Password</label>
                            </div>


                            <button onClick={goToDashboard}>Login</button>
                            </div>
                             */}


<form onSubmit={handleLogin}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginName"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="loginName">
            Email or username
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
        </div>
        <button  type="submit" className="btn btn-primary btn-block mb-4" >
          Login
        </button>
      </form>












                            <div class="row mb-4">
                                <div class="col-md-6 d-flex justify-content-center">

                                    <div class="form-check mb-3 mb-md-0">
                                        <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                        <label class="form-check-label" for="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div class="col-md-6 d-flex justify-content-center">

                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>


                            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>


                            <div class="text-center">
                                <p>Not a member? <a href="#!">Register</a></p>
                            </div>
                        {/* </form> */}
                    </div>
                    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form>
                            <div class="text-center mb-3">
                                <p>Sign up with:</p>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-google"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-github"></i>
                                </button>
                            </div>

                            <p class="text-center">or:</p>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="text" id="registerName" class="form-control" />
                                <label class="form-label" for="registerName">Name</label>
                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="text" id="registerUsername" class="form-control" />
                                <label class="form-label" for="registerUsername">Username</label>
                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="email" id="registerEmail" class="form-control" />
                                <label class="form-label" for="registerEmail">Email</label>
                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="password" id="registerPassword" class="form-control" />
                                <label class="form-label" for="registerPassword">Password</label>
                            </div>


                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="password" id="registerRepeatPassword" class="form-control" />
                                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                            </div>


                            <div class="form-check d-flex justify-content-center mb-4">
                                <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                    aria-describedby="registerCheckHelpText" />
                                <label class="form-check-label" for="registerCheck">
                                    I have read and agree to the terms
                                </label>
                            </div>

                            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>
                </div>
            

        </div>
    )
}

export default LoginPage