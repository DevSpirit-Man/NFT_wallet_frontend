import React from "react";

import { useThemeValue } from '../../contexts';
import { lightTheme, darkTheme } from "../../styles/theme";

const BottomBox = ({notificationCnt}) => {
  const { theme, setTheme } = useThemeValue();

  const changeTheme = (e, val) => {
    e.preventDefault()
    localStorage.setItem('theme', JSON.stringify(val));
    setTheme(val)
  }

  return (
    <div className="fixed w-[250px] lg:w-[300px] bottom-6 p-3">
      <div className="flex justify-between">
        <div className="flex">
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#9A9FA5"/>
            <circle cx="12" cy="18" r="1" fill="#9A9FA5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 8C11.1307 8 10.3886 8.5551 10.1135 9.33325C9.92948 9.85396 9.35815 10.1269 8.83744 9.94284C8.31672 9.75879 8.0438 9.18747 8.22784 8.66675C8.77648 7.11451 10.2568 6 12 6C14.2091 6 16 7.79086 16 10C16 11.8638 14.7252 13.4299 13 13.874V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13C11 12.4477 11.4477 12 12 12C13.1045 12 14 11.1046 14 10C14 8.89543 13.1045 8 12 8Z" fill="#9A9FA5"/>
          </svg>
          <div className="text-[15px] font-[700] text-[#9A9FA5]">Help & getting started</div>
        </div>
        <div className='text-[15px] px-[6px] rounded-[6px] leading-6 text-[#fff] bg-[#FE5F55]'>{notificationCnt}</div>
      </div>
      <div className="bg-[#D6D8DB] rounded-[40px] p-1 mt-9 grid grid-cols-2">
        <button 
          className={`rounded-[32px] flex justify-center font-[700] py-2 bg-[${theme.toggleLight}]`}
          onClick={(e) => changeTheme(e, lightTheme)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-sun-fill mr-2" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
          </svg>
          Light
        </button>
        <button 
          className={`rounded-[32px] flex justify-center font-[700] text-[#9A9FA5] text-[15px] leading-6 py-2 bg-[${theme.toggleDark}]`}
          onClick={(e) => changeTheme(e, darkTheme)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon mr-2" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
          </svg>
          Dark
        </button>
      </div>
    </div>
  );
};

export default BottomBox;