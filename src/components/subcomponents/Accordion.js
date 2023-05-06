import React, { useState } from 'react'
import MenuItem from './MenuItem'
import SubMenuItem from './SubMenuItem'

const AccordionBody = ({subTitle}) => {
  return (
    <div className="menu-item relative">
      <div className="menu-item-vertial-line"></div>
      {subTitle.map((item, i) => 
        <SubMenuItem key={i} subTitle={item} />
      )}
    </div>
  )
}

const Accordion = ({url, svg, title, count, subTitle}) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <div 
        onClick={() => setActive(!active)}
        className="flex justify-between p-3 hover:bg-[#fff] rounded-[12px] cursor-pointer"
      >
        <div className='flex'>
          {svg}
          <MenuItem url={url} title={title}/>
        </div>
        <div className='flex mt-[3px]'>
          {count>0 && <div className='text-[15px] mr-3 px-[6px] rounded-[6px] leading-6 text-[#fff] bg-[#9A9FA5]'>{count}</div>}
          {active? 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9A9FA5" className="bi bi-chevron-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>:
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9A9FA5" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg> 
          }
        </div>
      </div>
      {active && <AccordionBody subTitle={subTitle} />}
    </>
  )
}

export default Accordion
