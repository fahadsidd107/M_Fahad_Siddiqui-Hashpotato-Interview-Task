import React from 'react'
import './index.css'
import Header from './header'
import { left, right } from './constant'

function Right() {
  return (
    <div className='right'>
<Header/>
<div className='heading'>
  <h2>EPOCH STAKING</h2>
</div>

  {/* // right.map(item=>{ */}
  {/* // <>
  // <div className='box'>
  //       <p>PASS Price</p>
  //       <h2>$1520.33</h2>
  //   </div>
  // </>   */}


{left?.map((item) => {
    const box = (
      <>
     <div className='box'>
         <p>{item.title}</p>
         <h2>{item.cost}</h2>
     </div>
      </>
    );
    return box;
  })}


  {right?.map((item) => {
    const box = (
      <>
     <div className='box'>
         <p>{item.title}</p>
         <h2>{item.cost}</h2>
     </div>
      </>
    );
    return box;
  })}


    </div>
  )
}

export default Right