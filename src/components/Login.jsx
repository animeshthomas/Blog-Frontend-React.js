
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate=useNavigate()

    const [inputfield, changeInputfield] = useState(
        {  "email": "",
         "password": ""
         
         }
    )

const inputHandler=(event)=>{
    changeInputfield({...inputfield,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(inputfield)
    if (inputfield.email=="admin@gmail.com"&&inputfield.password=="1234") {
        navigate("/add")
        
    } else {
        alert("invalid credentials")
        
    }
}

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                              <center>  <div class="card">
                                    <h2>Login</h2>
                                    <div class="card-body">
                                        <div className="row g-3">
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <label htmlFor="" className="form-label">email</label>
                                                <input type="text" className="form-control" name='email' value={inputfield.email} onChange={inputHandler}/>
                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <label htmlFor="" className="form-label">password</label>
                                                <input type="password" className="form-control" name='password' value={inputfield.password}  onChange={inputHandler}/>
                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                                <button onClick={readValue} className="btn btn-success">Login</button>
                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                            <p><Link class="link-offset-2 link-underline link-underline-opacity-10" to="/add">new users click here</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login