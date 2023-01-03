import React from 'react'
import "./index.css"

function Header() {
  return (
    <div className='header'>
    <div className='button-container'>
    <button className='buy-pass-button'>Buy Pass</button>
    <button className='connect_wallet_button'>Connect Wallet</button>
    </div>
  </div>
  )
}

export default Header