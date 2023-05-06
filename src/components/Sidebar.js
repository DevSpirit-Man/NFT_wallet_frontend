import React from "react";

import MenuItem from "./subcomponents/MenuItem";
import Accordion from "./subcomponents/Accordion";
import BottomBox from "./subcomponents/BottomBox";

const Sidebar = () => {
  const collectiblesSvg = (
    <svg
      width="28"
      height="28"
      className="mr-3"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_851_503)">
        <path
          d="M10.5 4.66669H5.83335C5.18902 4.66669 4.66669 5.18902 4.66669 5.83335V10.5C4.66669 11.1444 5.18902 11.6667 5.83335 11.6667H10.5C11.1444 11.6667 11.6667 11.1444 11.6667 10.5V5.83335C11.6667 5.18902 11.1444 4.66669 10.5 4.66669Z"
          stroke="#9A9FA5"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.1666 4.66669H17.5C16.8556 4.66669 16.3333 5.18902 16.3333 5.83335V10.5C16.3333 11.1444 16.8556 11.6667 17.5 11.6667H22.1666C22.811 11.6667 23.3333 11.1444 23.3333 10.5V5.83335C23.3333 5.18902 22.811 4.66669 22.1666 4.66669Z"
          stroke="#9A9FA5"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 16.3333H5.83335C5.18902 16.3333 4.66669 16.8556 4.66669 17.5V22.1666C4.66669 22.811 5.18902 23.3333 5.83335 23.3333H10.5C11.1444 23.3333 11.6667 22.811 11.6667 22.1666V17.5C11.6667 16.8556 11.1444 16.3333 10.5 16.3333Z"
          stroke="#9A9FA5"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.1666 16.3333H17.5C16.8556 16.3333 16.3333 16.8556 16.3333 17.5V22.1666C16.3333 22.811 16.8556 23.3333 17.5 23.3333H22.1666C22.811 23.3333 23.3333 22.811 23.3333 22.1666V17.5C23.3333 16.8556 22.811 16.3333 22.1666 16.3333Z"
          stroke="#9A9FA5"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  const exchangeSvg = (
    <svg
      width="28"
      height="28"
      className="mr-3"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_851_548)">
        <path
          d="M24.5 19.8333H3.5"
          stroke="#9A9FA5"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11.6667L3.5 8.16669L7 4.66669"
          stroke="#9A9FA5"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 8.16669H24.5"
          stroke="#9A9FA5"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 23.3333L24.5 19.8333L21 16.3333"
          stroke="#9A9FA5"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  const collectiblesSubs = [
    { title: "sports", count: 31 },
    { title: "Fashion", count: 12 },
    { title: "Art", count: 61 },
  ];

  const collectiblesCnt = collectiblesSubs.reduce(
    (accumulator, item) => accumulator + item.count,
    0
  );

  const exchangeSubs = [
    { title: "Send", count: 0 },
    { title: "Receive", count: 0 },
    { title: "History", count: 8 },
  ];

  const exchangeCnt = exchangeSubs.reduce(
    (accumulator, item) => accumulator + item.count,
    0
  );

  return (
    <div className="hidden md:block sm:min-w-[300px] lg:min-w-[350px] min-h-screen p-6 bg-[#F2F2F2] border-r-[2px] border-[#E8E8E8]">
      <img src="assets/images/logo.svg" alt="" />
      <div className="mt-12">
        <div className="mb-2">
          <div className="flex p-3 hover:bg-[#fff] rounded-[12px] cursor-pointer">
            <svg
              width="28"
              height="28"
              className="mr-3"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_851_494)">
                <path
                  d="M22.1667 10.1617L15.9448 5.32233C15.3988 4.89755 14.7268 4.66693 14.035 4.66693C13.3432 4.66693 12.6712 4.89755 12.1252 5.32233L5.90216 10.1617C5.52818 10.4525 5.2256 10.8249 5.01754 11.2506C4.80948 11.6762 4.70144 12.1437 4.70166 12.6175V21.0175C4.70166 21.6363 4.94749 22.2298 5.38508 22.6674C5.82266 23.105 6.41616 23.3508 7.03499 23.3508H21.035C21.6538 23.3508 22.2473 23.105 22.6849 22.6674C23.1225 22.2298 23.3683 21.6363 23.3683 21.0175V12.6175C23.3683 11.6573 22.925 10.7508 22.1667 10.1617Z"
                  stroke="#9A9FA5"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.6666 17.5C16.0883 19.0552 11.9093 19.0552 9.33331 17.5"
                  stroke="#9A9FA5"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <MenuItem url="/" title="Home" />
          </div>
        </div>
        <div className="mb-2">
          <Accordion
            url="/collection"
            svg={collectiblesSvg}
            title="Collectibles"
            count={collectiblesCnt}
            subTitle={collectiblesSubs}
          />
        </div>
        <div className="mb-2">
          <Accordion
            url="/exchange"
            svg={exchangeSvg}
            title="Exchange"
            count={exchangeCnt}
            subTitle={exchangeSubs}
          />
        </div>
        <div className="mb-2">
          <div className="flex p-3 hover:bg-[#fff] rounded-[12px] cursor-pointer">
            <svg
              width="28"
              height="28"
              className="mr-3"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_851_588)">
                <path
                  d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
                  stroke="#9A9FA5"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 15.1666C15.933 15.1666 17.5 13.5996 17.5 11.6666C17.5 9.73363 15.933 8.16663 14 8.16663C12.067 8.16663 10.5 9.73363 10.5 11.6666C10.5 13.5996 12.067 15.1666 14 15.1666Z"
                  stroke="#9A9FA5"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.19598 21.9905C7.48474 21.0294 8.07561 20.187 8.88094 19.5883C9.68626 18.9895 10.6631 18.6663 11.6667 18.6666H16.3333C17.3381 18.6663 18.3162 18.9903 19.1221 19.5904C19.928 20.1905 20.5187 21.0347 20.8063 21.9975"
                  stroke="#9A9FA5"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <MenuItem url="/profile" title="Profile" />
          </div>
        </div>
        <div className="mb-2">
          <div className="flex p-3 hover:bg-[#fff] rounded-[12px] cursor-pointer">
            <svg
              width="28"
              height="28"
              className="mr-3"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_851_588)">
                <path
                  d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
                  stroke="#9A9FA5"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 15.1666C15.933 15.1666 17.5 13.5996 17.5 11.6666C17.5 9.73363 15.933 8.16663 14 8.16663C12.067 8.16663 10.5 9.73363 10.5 11.6666C10.5 13.5996 12.067 15.1666 14 15.1666Z"
                  stroke="#9A9FA5"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.19598 21.9905C7.48474 21.0294 8.07561 20.187 8.88094 19.5883C9.68626 18.9895 10.6631 18.6663 11.6667 18.6666H16.3333C17.3381 18.6663 18.3162 18.9903 19.1221 19.5904C19.928 20.1905 20.5187 21.0347 20.8063 21.9975"
                  stroke="#9A9FA5"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <MenuItem url="/test" title="WalletTEST" />
          </div>
        </div>
      </div>
      <BottomBox notificationCnt="8" />
    </div>
  );
};

export default Sidebar;
