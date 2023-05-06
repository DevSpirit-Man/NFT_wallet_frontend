import React, { useState } from "react";

import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";
import { useThemeValue } from "../contexts";
import { darkTheme } from "../styles/theme";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const { theme } = useThemeValue();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex">
      <Sidebar/>
      <div className="py-[30px] md:px-12 xl:px-16 w-[800px]">
        <Topbar
          backBtnStatus={true}
          pageTitle={"Edit Profile"}
          confirmBtnStatus={true}
        />
        <div className={`px-4 md:px-0 ${JSON.stringify(theme)===JSON.stringify(darkTheme) && "rectangle"}`}>
          <div className="flex justify-center md:justify-start pt-[32px] avatar-container">
            <div className="relative flex mb-8">
              <img 
                src="assets/images/veronica.png" 
                className="image rounded-full object-cover cursor-pointer md:cursor-default w-[136px] h-[136px] md:w-[96px] md:h-[96px]" 
                alt="Avatar"
              />
              <div className="hover-bg"></div>
              <div className="hover-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
              </div>
              <button className="hidden md:flex justify-center bg-[#FE5F55] rounded-[12px] text-[#fff] text-[15px] py-3 px-4 my-6 ml-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg mr-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg> Upload new picture
              </button>
              <button className="hidden md:flex justify-center bg-[#FCFCFC] border-[2px] border-[#EFEFEF] rounded-[12px] text-[#0D1821] text-[15px] py-3 px-4 my-6 ml-3">
                Remove
              </button>
            </div>
          </div> 
          <div>
            <div className="mt-[35px]">
              <label className="text-[12px] text-[#3A3D46] uppercase">your name</label>
              <input 
                placeholder="First & Last Name" 
                className={`bg-transparent border-b-[1px] w-full text-[16px] font-[700] py-[12px] placeholder-[#5E6272] text-[${theme.textColor}] focus:outline-none border-[#262A34] focus:border-[#FE5F55] mt-[10px]`}
              />
            </div>
            <div className="mt-[35px]">
              <label className="text-[12px] text-[#3A3D46] uppercase">your email</label>
              <input 
                placeholder="Email" 
                className={`bg-transparent border-b-[1px] w-full text-[16px] font-[700] py-[12px] placeholder-[#5E6272] text-[${theme.textColor}] focus:outline-none border-[#262A34] focus:border-[#FE5F55] mt-[10px]`}
              />
            </div>
            <div className="mt-[35px] relative">
              <label className="text-[12px] text-[#3A3D46] uppercase">your password</label>
              <input 
                placeholder="Password" 
                type={showPassword ? "text" : "password"} 
                className={`bg-transparent border-b-[1px] w-full text-[16px] font-[700] py-[12px] placeholder-[#5E6272] text-[${theme.textColor}] focus:outline-none border-[#262A34] focus:border-[#FE5F55] mt-[10px]`}
              />
              <button className="absolute right-2 bottom-[14px]" onClick={toggleShowPassword}>
                {showPassword ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E6272" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                  </svg> : 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E6272" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                  </svg>
                }
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mt-[35px] relative">
                <label className="text-[12px] text-[#3A3D46] uppercase">New passowrd</label>
                <input 
                  placeholder="Password"
                  type={showPassword ? "text" : "password"} 
                  className={`bg-transparent border-b-[1px] w-full text-[16px] font-[700] py-[12px] placeholder-[#5E6272] text-[${theme.textColor}] focus:outline-none border-[#262A34] focus:border-[#FE5F55] mt-[10px]`}
                />
                <button className="absolute right-2 bottom-[14px]" onClick={toggleShowPassword}>
                  {showPassword ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E6272" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                    </svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E6272" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                  }
                </button>
              </div>
              <div className="mt-[35px] relative">
                <label className="text-[12px] text-[#3A3D46] uppercase">confirm new password</label>
                <input 
                  placeholder="Password"
                  type={showPassword ? "text" : "password"} 
                  className={`bg-transparent border-b-[1px] w-full text-[16px] font-[700] py-[12px] placeholder-[#5E6272] text-[${theme.textColor}] focus:outline-none border-[#262A34] focus:border-[#FE5F55] mt-[10px]`}
                />
                <button className="absolute right-2 bottom-[14px]" onClick={toggleShowPassword}>
                  {showPassword ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E6272" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                    </svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E6272" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[24px]"><Navigation/></div>
      </div>
    </div>
  );
};

export default Profile;