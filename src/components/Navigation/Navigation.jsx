import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as Moon } from '../../assets/images/icon-moon.svg'


const Navigation = () => {
  return (
    <div className='navigation'>
      <Logo/>
      <div className='font'>
        <h1>Sanserif</h1>
      </div>
      <div className='color-mode'>
        <Moon/>
      </div>
    </div>
  )
}

export default Navigation