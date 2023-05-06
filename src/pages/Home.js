import React, { useRef } from "react";
import 'react-multi-carousel/lib/styles.css';

import SectionTitle from "../components/SectionTitle";
import Carousel from 'react-multi-carousel';
import LatestCard from "../components/LatestCard";
import ProgressBox from "../components/ProgressBox";
import FriendItem from "../components/FriendItem";
import ClaimedItem from "../components/ClaimedItem";
import Navigation from "../components/Navigation";
import { useThemeValue } from "../contexts";
import Sidebar from "../components/Sidebar";
import { darkTheme } from "../styles/theme";

const collectionList = [
  {collectionUrl: "assets/images/basketball.jpeg", collectionName: "2000 Olympics", collectionInfo: "NBA"},
  {collectionUrl: "assets/images/superfan.jpeg", collectionName: "Super Fan", collectionInfo: "Superbowl2023"},
  {collectionUrl: "assets/images/basketball.jpeg", collectionName: "Athelete Pass", collectionInfo: "Under Armour"},
  {collectionUrl: "assets/images/roland_garros.jpeg", collectionName: "Roland Garros 2020", collectionInfo: "Roland Garros"},
  {collectionUrl: "assets/images/athelete.jpeg", collectionName: "Athelete Pass", collectionInfo: "Under Armour"},
  {collectionUrl: "assets/images/roland.jpeg", collectionName: "Roland Garros 2020", collectionInfo: "Roland Garros"}
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

const claimedList = [
  {claimedName: "Starbucks Odyssey", claimedInfo: "The Siren Collection"},
  {claimedName: "Starbucks Odyssey", claimedInfo: "The Siren Collection"},
  {claimedName: "Starbucks Odyssey", claimedInfo: "The Siren Collection"},
  {claimedName: "Starbucks Odyssey", claimedInfo: "The Siren Collection"},
  {claimedName: "Starbucks Odyssey", claimedInfo: "The Siren Collection"},
  {claimedName: "Starbucks Odyssey", claimedInfo: "The Siren Collection"}
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1500 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1500, min: 1100 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1100, min: 768 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 768, min: 450 },
    items: 3.15
  },
  minimobile: {
    breakpoint: { max: 450, min: 0 },
    items: 3.15
  }
};

const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1500 },
    items: 9
  },
  desktop: {
    breakpoint: { max: 1500, min: 1200 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
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

const Home = () => {
  const ref = useRef(null);
  const { theme } = useThemeValue();

  return (
    <div className="md:flex">
      <Sidebar/>
      <div className="py-[30px] md:px-12 xl:px-16 flex-1">
        <div className="">
        <div className="pb-[12px]">
          {/* <div className="absolute top-[55px] left-[20px]">
            <BackButton/>
          </div> */}
          <div className="md:flex">
            <img 
              src="assets/images/veronica.png" 
              className="w-10 h-10 md:w-20 md:h-20 md:mr-8 md:mt-10 rounded-full absolute top-[50px] right-[20px] md:static" 
              alt="Avatar"
            />
            <div>
              <div className={`title-font pt-[25px] md:pt-[30px] md:text-[32px] xl:text-[40px] text-center md:text-left text-[${theme.textColor}]`}>
                Hello Verica
              </div>
              <div className="mt-4 hidden md:block">
                <span className="text-[#9A9FA5] bg-[#E8E8E8] gap-[10px] rounded-[6px] text-[12px] md:text-[15px] xl:text-[18px] leading-[16px] py-1 px-2">
                  💎 104 Collectibles
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`px-4 md:px-0 ${JSON.stringify(theme)===JSON.stringify(darkTheme) && "rectangle"}`}>
          <div className="pt-2 text-center md:text-left">
            <span className="text-[#9A9FA5] bg-[#E8E8E8] gap-[10px] rounded-[6px] text-[12px] md:hidden leading-[16px] py-1 px-2">
              💎 104 Collectibles
            </span>
          </div>
          <div className="mt-10 mb-2"></div>
          <div className="px-6">
            <SectionTitle sectionTitle="Latest Collected" />
          </div>
          <div className="my-2 py-3">
            <div className="carousel-width">
              <Carousel
                ref={ref}
                swipeable={true}
                draggable={false}
                showDots={false}
                arrows={true}
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
                {collectionList.map((item, index) => 
                  <div key={index} className="px-[6px]">
                    <LatestCard 
                      collectionUrl={item.collectionUrl}
                      collectionName={item.collectionName}
                      collectionInfo={item.collectionInfo}
                    />
                  </div>
                )}
              </Carousel>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-start-1 lg:col-end-6 xl:col-end-5">
                <ProgressBox/>
              </div>
              <div className="lg:col-start-6 xl:col-start-5 lg:col-end-13 lg:ml-8">
                <div className="pt-4   px-6">
                  <SectionTitle sectionTitle="Friends" />
                </div> 
                <div className={`mt-2 p-4 rounded-[20px] bg-[${theme.sectionBg}] friend-carousel-width`}>
                  <Carousel
                    ref={ref}
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    arrows={false}
                    responsive={responsive1}
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
              </div>
            </div>
            <div className="pt-4 px-6">
              <SectionTitle sectionTitle="Claimed Recently" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {claimedList.map((obj,k) =>
                <ClaimedItem
                  key={k}
                  claimedName={obj.claimedName}
                  claimedInfo={obj.claimedInfo}
                />
              )}
            </div>
          </div>
        </div>
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[24px]">
          <Navigation/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
