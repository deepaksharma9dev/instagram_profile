import React,{Fragment,useState,useEffect} from 'react'
import axios from 'axios';

 const Photos = () => {
    //  useEffect(()=>{

    //  },[])
     const [userMedia,setUserMedia] = useState([])
    //  let data = []; 
    // const res = axios
    //   .get("http://localhost:4000/api/mediaRoutes/get-user-pictures")
    //   .then((res) => {
    //     {}
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
      
    // setUserMedia(data);
    // console.log(data)
    return (
      <Fragment>
        <div className="row">
          <div className="col-12">
            <div className="container"></div>
            <div className="row">
              <div className="col-4">
                <div
                  className="card profile-image my-3 rounded-0 border-0"
                  style={{
                    backgroundImage: `url(https://scontent.cdninstagram.com/v/t51.29350-15/236948468_172438838210168_2516845540705834413_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=Kuf07nppIE8AX8-NH8s&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=9ef75259eae532479e4da89070a45147&oe=6151EA69)`,
                  }}
                >
                  <div className="card-body"></div>
                  <div className="card-footer border-0 text-center">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Post Details
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">...</div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}
export default Photos;
