import React from 'react'
import { Link ,useLocation} from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div id='backyofp'>

        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="#" class="btn btn-primary">See more</Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="#" class="btn btn-primary">See more</Link>
              </div>
            </div>
          </div>
        </div><div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="#" class="btn btn-primary">See more</Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Project 4</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="#" class="btn btn-primary">See more</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Projects
