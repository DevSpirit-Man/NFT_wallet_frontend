import React from "react";

import CollectionCard from "../components/CollectionCard";
import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";
import { useThemeValue } from "../contexts";
import Sidebar from "../components/Sidebar";
import { darkTheme } from "../styles/theme";

const collectionList = [
  {collectionUrl: "assets/images/basketball.jpeg", collectionName: "NBA 2000 Olympics", collectionInfo: "NBA"},
  {collectionUrl: "assets/images/superfan.jpeg", collectionName: "Super Fan", collectionInfo: "Superbowl2023"},
  {collectionUrl: "assets/images/basketball.jpeg", collectionName: "Athelete Pass", collectionInfo: "Under Armour"},
  {collectionUrl: "assets/images/roland_garros.jpeg", collectionName: "Roland Garros 2020", collectionInfo: "Roland Garros"},
  {collectionUrl: "assets/images/athelete.jpeg", collectionName: "Athelete Pass", collectionInfo: "Under Armour"},
  {collectionUrl: "assets/images/roland.jpeg", collectionName: "Roland Garros 2020", collectionInfo: "Roland Garros"},
  {collectionUrl: "assets/images/basketball.jpeg", collectionName: "Athelete Pass", collectionInfo: "Under Armour"},
  {collectionUrl: "assets/images/roland_garros.jpeg", collectionName: "Roland Garros 2020", collectionInfo: "Roland Garros"}
]

const Collection = () => {
  const { theme } = useThemeValue();

  return (
    <div className="flex">
      <Sidebar/>
      <div className="py-[30px] md:px-12 xl:px-16">
        <Topbar
          backBtnStatus={true}
          pageTitle={"Your Collectibles"}
          confirmBtnStatus={false}
        />
        <div className={`px-4 md:px-0 ${JSON.stringify(theme)===JSON.stringify(darkTheme) && "rectangle"}`}>
          <div className="pt-2 text-center md:text-left">
            <span className="text-[#9A9FA5] bg-[#E8E8E8] gap-[10px] rounded-[6px] text-[12px] md:text-[15px] xl:text-[18px] leading-[16px] py-1 px-2">
              💎 104 Collectibles
            </span>
          </div>
          <div className="mt-10">
            <button className="bg-[#FE5F55] text-[#fff] text-[14px] font-[700] rounded-full py-2 px-4">Sports (31)</button>
            <button className="text-[#9A9FA5] text-[14px] font-[700] py-2 px-4">Fasion (12)</button>
            <button className="text-[#9A9FA5] text-[14px] font-[700] py-2 px-4">Art (61)</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-[21px]">
            {collectionList.map((item, i) => 
              <div className="pb-[24px]" key={i}>
                <CollectionCard
                  collectionUrl={item.collectionUrl}
                  collectionName={item.collectionName}
                  collectionInfo={item.collectionInfo}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[24px]"><Navigation/></div>
    </div>
  );
};

export default Collection;