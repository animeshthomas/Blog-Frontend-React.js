import axios from 'axios'
import React, { useState } from 'react'
import BlogHeader from './BlogHeader'

const ViewMyPost = () => {

    const [inputField, changeInputField] = useState(
        {
            "userid": ""
        }


    )

    const [result, changeresult] = useState([])
    const InputHandler = (event) => {
        changeInputField({ ...inputField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/blog/mypost/", inputField).then(
            (response) => {
                changeresult(response.data)

            }
        )


    }
    return (
        <div>
<BlogHeader/>
            <div className="container">

                <h2><center>View my Post</center></h2>
                <div className="row">
                    <div>
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">user id</label>
                                <input type="text" className="form-control " name='userid' value={inputField.userid} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-success">View</button>
                            </div>
                        </div>
                    </div>
                </div>


                {result.map(
                    (value,index)=>{
                        return <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
                            <div class="card mb-3">
                                <img src="" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Title:{value.title}</h5>
                                    <p class="card-text">{value.userid}</p>
                                    <p class="card-text">{value.message}</p>
    
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
    
    
    
    
                            </div>
    
    
    
                        </div>
                    </div>

                    }
                )}
            
            
            </div>

        </div>
    )
}

export default ViewMyPost