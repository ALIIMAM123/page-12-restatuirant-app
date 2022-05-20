import React from "react";
import "./form.css";
import Image from "../images/your image here.png";
const Form = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="left-section">
            <div className="left-wrapper-top">
              <div className="info-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                >
                  <path
                    id="icon"
                    d="M1759,223.919c0-2.449,3.456-3.059,7.5-3.059,4.068,0,7.5.63,7.5,3.081s-3.455,3.06-7.5,3.06C1762.433,227,1759,226.37,1759,223.919Zm2.537-10.153a4.967,4.967,0,1,1,4.965,4.761h0a4.85,4.85,0,0,1-4.963-4.727Z"
                    transform="translate(-1759 -209.001)"
                    fill="#6149CD"
                  />
                </svg>
                <p className=" my-profile">Basic Information</p>
              </div>
            </div>
            <div className="left-wrapper-bottom">
              <div className="password-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="18.021"
                  viewBox="0 0 15 18.021"
                >
                  <path
                    id="icon"
                    d="M365.234,435.009h-7.467A3.768,3.768,0,0,1,354,431.248V426.8a3.743,3.743,0,0,1,2.627-3.567v-1.378a4.873,4.873,0,0,1,8.314-3.442,4.825,4.825,0,0,1,1.432,3.442v1.378A3.743,3.743,0,0,1,369,426.8v4.448A3.768,3.768,0,0,1,365.234,435.009Zm-3.734-7.763a.78.78,0,0,0-.78.779v1.988a.785.785,0,1,0,1.569,0v-1.988A.785.785,0,0,0,361.5,427.245Zm.009-8.691a3.307,3.307,0,0,0-3.312,3.277v1.206H364.8v-1.184a3.3,3.3,0,0,0-3.3-3.3h0Z"
                    transform="translate(-354 -416.988)"
                    fill="#7a86a1"
                  />
                </svg>
                <p className=" my-password">Password</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="middle-section">
            <div className="form-wrapper-container d-flex flex-column">
              <h1 className="password-info-heading">Password Information</h1>
              <form className="form-container">
                <div className="current-password-container current-password">
                  Current Password{" "}
                  <input
                    type="password"
                    className=" password current-password pass-1"
                  />
                </div>
                <div className="confirm-new-password-container">
                  New Password{" "}
                  <input
                    type="password"
                    className=" password current-password pass-2"
                  />
                </div>
                <div className="current-password-container ">
                  Confirm New Password{" "}
                  <input
                    type="password"
                    className=" password current-password pass-3"
                  />
                </div>

                <div className="save-change-button">
                  <button type="button" className="save-button">
                    Save Change
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="photo-container d-flex justify-content-center align-items-center ">
            <img src={Image} className="image" alt="image1" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="camera"
              width="15"
              height="12.998"
              viewBox="0 0 15 12.998"
            >
              <path
                id="icon_photo_copy"
                data-name="icon photo copy"
                d="M988.73,1009h-8.46a3.212,3.212,0,0,1-3.27-3.145v-4.285a3.212,3.212,0,0,1,3.27-3.145.151.151,0,0,0,.143-.087l.044-.087.062-.126c.2-.4.418-.847.553-1.107A1.831,1.831,0,0,1,982.73,996h3.533a1.837,1.837,0,0,1,1.665,1.017c.118.227.3.592.47.944l.106.217.075.159a.17.17,0,0,0,.15.087A3.213,3.213,0,0,1,992,1001.57v4.285A3.213,3.213,0,0,1,988.73,1009Zm-4.23-8.376a3,3,0,0,0-2.093.839,2.741,2.741,0,0,0-.855,2,2.89,2.89,0,0,0,2.942,2.834h.005a2.984,2.984,0,0,0,2.077-.829,2.753,2.753,0,0,0,.021-4l-.013-.012A2.983,2.983,0,0,0,984.5,1000.624Zm4.207-.173a.65.65,0,1,0,.683.656.662.662,0,0,0-.683-.656h0Zm-4.207,4.762a1.785,1.785,0,0,1-1.823-1.745v-.015a1.656,1.656,0,0,1,.525-1.228,1.873,1.873,0,0,1,2.577-.016,1.709,1.709,0,0,1,.017,2.481A1.857,1.857,0,0,1,984.5,1005.213Z"
                transform="translate(-977 -996.002)"
                fill="#7a86a1"
              />
            </svg>
          </div>
          <h1 className="photo-name text-center">Pizzeria Italiana</h1>
        </div>
      </div>
    </div>
  );
};

export default Form;
