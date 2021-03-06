import React from "react";
import "./settingprofile.css";
// import Bold from "../images/bold.svg";
const SettingProfile = () => {
  return (
    <div className="container-fuild mt-5 p-3">
      <div className="row">
        <div className="col-6">
          <div className="left">Setting Profile</div>
        </div>
        <div className="col-6 ml-auto position-relative d-flex justify-content-center">
          <div className="profile-wrapper text-center position-absolute top-0 end-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="profile"
              width="15"
              height="18"
              viewBox="0 0 15 18"
            >
              <path
                id="icon"
                d="M1759,223.919c0-2.449,3.456-3.059,7.5-3.059,4.068,0,7.5.63,7.5,3.081s-3.455,3.06-7.5,3.06C1762.433,227,1759,226.37,1759,223.919Zm2.537-10.153a4.967,4.967,0,1,1,4.965,4.761h0a4.85,4.85,0,0,1-4.963-4.727Z"
                transform="translate(-1759 -209.001)"
                fill="#7a86a1"
              />
            </svg>
            <p className="my-profile ">My Profile </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingProfile;
