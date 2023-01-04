import { Image, Menu } from 'antd'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faSliders } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
import { bandDiscount, lowerList, upperList } from './constant';


function List() {
  return (
    <div>
      <div>
      {upperList?.map((item) => {
    const upper = (
      <>
     <div className='parent-list'>
     <Image src={item.icon} alt="Logo" width={18} preview={false} /><h6>{item.label}</h6>
     </div>
      </>
    );
    return upper;
  })}  
      </div>

<div>
<h6 className='bond-discount'>Bond Discount</h6>
{bandDiscount?.map((item) => {
    const upper = (
      <>
     <div className='bond-discount-list'>
     <h6>{item.coin}</h6><h6>{item.percentage}</h6>
     </div>
      </>
    );
    return upper;
  })} 
</div>
    


      <div>
      {lowerList?.map((item) => {
    const lower = (
      <>
     <div className='parent-list'>
     <Image src={item.icon} alt="Logo" width={18} preview={false} /><h6>{item.label}</h6>
     </div>
      </>
    );
    return lower;
  })}  
      </div>

    </div>
  )
}

export default List