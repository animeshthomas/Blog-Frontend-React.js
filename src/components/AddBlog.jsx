import axios from 'axios'
import React, { useState } from 'react'
import BlogHeader from './BlogHeader'

const AddBlog = () => {

    const [inputfield, changeInputfield] = useState(
        { 
        
            "userid": "",
            "title": "",
            "message": ""
           
            
        
         }
    )

const inputHandler=(event)=>{
    changeInputfield({...inputfield,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(inputfield)
    axios.post("http://127.0.0.1:8000/blog/addblog/",inputfield).then(
        (response)=>{
            alert(response.data.status)
        }
    )
    
}
  return (
    <div>
        <BlogHeader/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <label htmlFor="" className="form-label">user id</label>
                    <input type="text" className="form-control" name='userid' value={inputfield.userid} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">title</label>
                    <input type="text" className="form-control" name='title' value={inputfield.title} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">message</label>
                    <input type="text" className="form-control" name='message' value={inputfield.message} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button onClick={readValue} className="btn btn-success">Add</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddBlog