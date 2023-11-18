import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogHeader from './BlogHeader'

const ViewBlog = () => {

    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.post("http://127.0.0.1:8000/blog/viewblog/").then(
            (response) => {
                changedata(response.data)
            }
        )
    }
    useEffect(() => { fetchData() }, [])

    return (
        <div>

            <BlogHeader/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            
                            {data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


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
                                }
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewBlog