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

<div className='boxes-parent-container'>
<div  className='box-container'>
{left?.map((item) => {
    const box = (
      <>
     <div className='box'>
         <p className='title'>{item.title}</p>
         <h2 className='cost'>{item.cost}</h2>
     </div>
      </>
    );
    return box;
  })}
</div>

<div   className='box-container'>
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
</div>








    </div>
  )
}

export default Right