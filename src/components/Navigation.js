import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="md:hidden w-[164px] py-[10px] px-4 bg-[#0A141C] flex justify-between rounded-full">
      <Link to="/home">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3" clipPath="url(#clip0_104_4114)">
          <path d="M22.1667 10.1617L15.9448 5.32233C15.3988 4.89755 14.7268 4.66693 14.035 4.66693C13.3432 4.66693 12.6712 4.89755 12.1252 5.32233L5.90216 10.1617C5.52818 10.4525 5.2256 10.8249 5.01754 11.2506C4.80948 11.6762 4.70144 12.1437 4.70166 12.6175V21.0175C4.70166 21.6363 4.94749 22.2298 5.38508 22.6674C5.82266 23.105 6.41616 23.3508 7.03499 23.3508H21.035C21.6538 23.3508 22.2473 23.105 22.6849 22.6674C23.1225 22.2298 23.3683 21.6363 23.3683 21.0175V12.6175C23.3683 11.6573 22.925 10.7508 22.1667 10.1617Z" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.6666 17.5C16.0883 19.0552 11.9093 19.0552 9.33325 17.5" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </Link>
      <Link to="/collection">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_104_4122)">
            <path d="M10.5001 4.66669H5.83341C5.18908 4.66669 4.66675 5.18902 4.66675 5.83335V10.5C4.66675 11.1444 5.18908 11.6667 5.83341 11.6667H10.5001C11.1444 11.6667 11.6667 11.1444 11.6667 10.5V5.83335C11.6667 5.18902 11.1444 4.66669 10.5001 4.66669Z" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.1666 4.66669H17.4999C16.8556 4.66669 16.3333 5.18902 16.3333 5.83335V10.5C16.3333 11.1444 16.8556 11.6667 17.4999 11.6667H22.1666C22.8109 11.6667 23.3333 11.1444 23.3333 10.5V5.83335C23.3333 5.18902 22.8109 4.66669 22.1666 4.66669Z" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5001 16.3333H5.83341C5.18908 16.3333 4.66675 16.8556 4.66675 17.5V22.1666C4.66675 22.811 5.18908 23.3333 5.83341 23.3333H10.5001C11.1444 23.3333 11.6667 22.811 11.6667 22.1666V17.5C11.6667 16.8556 11.1444 16.3333 10.5001 16.3333Z" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.1666 16.3333H17.4999C16.8556 16.3333 16.3333 16.8556 16.3333 17.5V22.1666C16.3333 22.811 16.8556 23.3333 17.4999 23.3333H22.1666C22.8109 23.3333 23.3333 22.811 23.3333 22.1666V17.5C23.3333 16.8556 22.8109 16.3333 22.1666 16.3333Z" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </Link>
      <Link to="/exchange">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3" clipPath="url(#clip0_104_4128)">
            <path d="M24.5 19.8333H3.5" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 11.6667L3.5 8.16669L7 4.66669" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 8.16669H24.5" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 23.3333L24.5 19.8333L21 16.3333" stroke="#48E5C2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default Navigation;