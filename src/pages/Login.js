import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import BackButton from "../components/BackButton";
import { useThemeValue } from "../contexts";


const Login = () => {
  const navigate = useNavigate();
  const { theme } = useThemeValue();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  }

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        console.log("result-->", result.user)
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        navigate("/home")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="onboarding px-6 md:px-0">
      <div className="pt-[60px] md:hidden"><BackButton/></div>
      <div className="flex items-baseline md:items-center flex-col justify-end md:justify-center h-[75vh] md:h-full">
        <div className="w-full md:w-[330px]">
          <div className={`font-[700] text-[${theme.textColor}] text-[32px]`}>Login</div>
          <div className="mt-3">
            {/* <label className="text-[12px] text-[#3A3D46] uppercase">your email</label> */}
            <input 
              placeholder="Email" 
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#F2F2F2] border-[2px] w-full text-[16px] font-[700] px-4 py-3 placeholder-[#9A9FA5] text-[#9A9FA5] focus:outline-none border-[#E8E8E8] rounded-[12px] focus:border-[#FE5F55]"
            />
          </div>
          <div className="mt-3 relative">
            {/* <label className="text-[12px] text-[#3A3D46] uppercase">your password</label> */}
            <input 
              placeholder="Password" 
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"} 
              className="bg-[#F2F2F2] border-[2px] w-full text-[16px] font-[700] px-4 py-3 placeholder-[#9A9FA5] text-[#9A9FA5] focus:outline-none border-[#E8E8E8] rounded-[12px] focus:border-[#FE5F55]"
            />
            <button className="absolute right-2 bottom-[16px]" onClick={toggleShowPassword}>
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
          <div className="text-right">
            <Link className={`text-[${theme.textColor}] text-[12px] mt-[8px]`}>Forgot Password?</Link>
          </div>
          <button 
            onClick={onLogin}
            className="w-full bg-[#FE5F55] text-[#fff] py-[15px] rounded-full mt-[24px]"
          >
            Log In
          </button>
          {/* <button className="text-center" onClick={signInWithGoogle}>
            Sign in with Google
          </button> */}
          <div className={`text-center mt-[30px] text-[${theme.textColor}]`}>
            No account? <Link className={`border-none bg-transparent underline`} to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;