import React,{Fragment,useState,useEffect} from 'react'
import axios from 'axios';

 const Photos = () => {
   const [userMedia, setUserMedia] = useState([]);
     useEffect(()=>{
      const res = axios
      .get("http://localhost:4000/api/mediaRoutes/get-user-pictures")
      .then((res) => {
          setUserMedia([...res.data.data]);
        })
        .catch((err) => {
        console.log(err);
  });
     },[])

     console.log(userMedia);
     

    
      
    // setUserMedia(data);
    // console.log(data)
    return (
      <Fragment>
        <div className="row">
          <div className="col-12">
            <div className="container"></div>
            <div className="row">
              {userMedia.map((userData) => (
                <div className="col-4">
                  <div
                    className="card profile-image my-3 rounded-0 border-0"
                    style={{
                      backgroundImage: `url(${userData.media_url})`,
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
                                {userData.username}
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
                            <div className="modal-body">{userData.caption}</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
}
export default Photos;
