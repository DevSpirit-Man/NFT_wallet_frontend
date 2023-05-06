import React, { useRef } from "react";
import Carousel from 'react-multi-carousel';

import BalanceBox from "../components/BalanceBox";
import Navigation from "../components/Navigation";
import TransactionItem from "../components/TransactionItem";
import FriendItem from "../components/FriendItem";
import Topbar from "../components/Topbar";
import { useThemeValue } from "../contexts";
import { darkTheme } from "../styles/theme";
import Sidebar from "../components/Sidebar";
import ExchangeSectionTitle from "../components/ExchangeSectionTitle";

const cryptoList = [
  {amount: "160", cryptoType: "SOL", percentage: "+12%"},
  {amount: "$4,508", cryptoType: "USDC", percentage: "+12%"}
]

const transactionList = [
  {
    date: "Mar 11, 2023", 
    history: [
      {
        imgUrl: "assets/images/solana.svg", transactionType: "Receive", itemName: "Fd82...9fk1 ", itemType: "$343.12", itemAmount: "16 SOL"
      }
    ]
  }, 
  {
    date: "Mar 10, 2023", 
    history: [
      {
        imgUrl: "assets/images/basketball.jpeg", transactionType: "Receive", itemName: "NBA", itemType: "Collectible", itemAmount: "NBA 2000 Olympics"
      }
    ]
  },
  {
    date: "Mar 9, 2023", 
    history: [
      {
        imgUrl: "assets/images/roland.jpeg", transactionType: "Receive", itemName: "Athelete", itemType: "Collectible", itemAmount: "Athelete Pass"
      }
    ]
  },
  {
    date: "Mar 9, 2023", 
    history: [
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      },
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      },
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      }
    ]
  },
  {
    date: "Mar 9, 2023", 
    history: [
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      },
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      },
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      },
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      }
    ]
  },
  {
    date: "Mar 9, 2023", 
    history: [
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      },
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      },
      {
        imgUrl: "assets/images/usdc.svg", transactionType: "Sent", itemName: "Fd82...9fk1", itemType: "", itemAmount: "250 USDC"
      }
    ]
  }
]

const friendList = [
  {avatarUrl: "assets/images/andrew.jpeg", friendName: "Andrew"},
  {avatarUrl: "assets/images/veronica1.jpeg", friendName: "Lucy"},
  {avatarUrl: "assets/images/ed.jpeg", friendName: "Ed Jr"},
  {avatarUrl: "assets/images/whaler.jpeg", friendName: "Whaler"},
  {avatarUrl: "assets/images/rosa.jpeg", friendName: "Rosa"},
  {avatarUrl: "assets/images/roland.jpeg", friendName: "Matthew"},
  {avatarUrl: "assets/images/ed.jpeg", friendName: "Ed Jr"},
  {avatarUrl: "assets/images/whaler.jpeg", friendName: "Whaler"},
  {avatarUrl: "assets/images/rosa.jpeg", friendName: "Rosa"},
  {avatarUrl: "assets/images/roland.jpeg", friendName: "Matthew"}
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1500 },
    items: 9
  },
  desktop: {
    breakpoint: { max: 1500, min: 900 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 900, min: 768 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 768, min: 450 },
    items: 5.2
  },
  minimobile: {
    breakpoint: { max: 450, min: 0 },
    items: 5.2
  }
};

const Exchange = () => {
  const { theme } = useThemeValue();
  const ref = useRef(null);

  return (
    <div className="md:flex">
      <Sidebar/>
      <div className="py-[30px] flex-grow md:px-12 xl:px-16">
        <Topbar
          backBtnStatus={true}
          pageTitle={"Exchange"}
          confirmBtnStatus={false}
        />
        <div className={`px-4 md:px-0 md:grid md:grid-cols-1 xl:grid-cols-12 gap-8 ${JSON.stringify(theme)===JSON.stringify(darkTheme) && "rectangle"}`}>
          <div className="xl:col-start-1 xl:col-end-8">
            <ExchangeSectionTitle title="Balance"/>
            <div className="grid grid-cols-2 gap-4">
              {cryptoList.map((item, i) =>
                <div className="mx-2 mt-[5px] gap-4 md:gap-6" key={i}>
                  <BalanceBox
                    amount={item.amount}
                    cryptType={item.cryptoType}
                    percentage={item.percentage}
                  />
                </div>
              )}
            </div>
            <div className="mt-4 px-4 flex">
              <button className={`border border-[${theme.textColor}] rounded-full text-[14px] text-[${theme.textColor}] flex justify-center py-2 px-[20px] mr-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={theme.textColor} className="bi bi-send mr-2" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg> Send
              </button>
              <button className={`border border-[${theme.textColor}] rounded-full text-[14px] text-[${theme.textColor}] flex justify-center py-2 px-[20px]`}>
                <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipath="url(#clip0_104_7052)">
                    <path d="M4 20H20" stroke={theme.textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14V4" stroke={theme.textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14L16 10" stroke={theme.textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14L8 10" stroke={theme.textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
                Receive
              </button>
            </div>
            <hr className="border-[#262A34] my-6 md:hidden"/>
            <ExchangeSectionTitle title="Transacted last with"/>
            <div className={`p-4 rounded-[20px] bg-[${theme.sectionBg}]`}>
              <Carousel
                ref={ref}
                swipeable={true}
                draggable={false}
                showDots={false}
                arrows={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {friendList.map((e, i) => 
                  <div key={i} className="px-[6px]">
                    <FriendItem 
                      avatarUrl={e.avatarUrl}
                      friendName={e.friendName}
                    />
                  </div>
                )}
              </Carousel>
            </div>
            <hr className="border-[#262A34] my-6 md:hidden"/>
          </div>
          <div className={`xl:col-start-8 xl:col-end-13 rounded-[20px] bg-[${theme.sectionBg}]`}>
            <ExchangeSectionTitle title="History"/>
            {transactionList.map((obj, k) => 
              <div key={k} className="px-4">
                <TransactionItem
                  date={obj.date}
                  history={obj.history}
                />
              </div>
            )}
          </div>
        </div>
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[24px]">
          <Navigation/>
        </div>
      </div>
    </div>
  );
};

export default Exchange;