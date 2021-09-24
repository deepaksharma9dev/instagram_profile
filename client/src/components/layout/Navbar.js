import React,{Fragment} from 'react'

const Navbar = () => {
    return (
      <Fragment>
        <div className="row pt-1 border-bottom">
          <div className="col-12">
            <div className="container">
              <div className="row align-items-center justify-content-between navbar_sec">
                <div className="col-4">
                  <img
                    className="navbar-brand"
                    id="logo"
                    src={
                      "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    }
                    alt="Instagram logo"
                  />
                </div>
                <div className="col-4 d-flex border border-dark rounded p-0 text-center">
                  <div className="input-group rounded border-0">
                    <i className="fas fa-search search-icon"></i>
                    <input
                      type="search"
                      className="form-control rounded border-0"
                      placeholder="What are you looking ?"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <div className="col-auto">
                    <i className="fas fa-house-user"></i>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comment-dots"></i>
                  </div>
                  <div className="col-auto">
                    <i className="far fa-plus-square"></i>
                  </div>
                  <div className="col-auto">
                    <i className="far fa-compass"></i>
                  </div>
                  <div className="col-auto">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Navbar;;
