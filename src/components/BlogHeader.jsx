import React from 'react'
import { Link } from 'react-router-dom'

const BlogHeader = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Blog App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Post</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  active" to="/mypost">View my post </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  active" to="/delete">delete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  active" to="/view">View All</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default BlogHeader