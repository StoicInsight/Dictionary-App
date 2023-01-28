import React from 'react'
import './search-input.css'
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg'

const SeachInput = () => {
  return (
    <div className='search-input'>
      <form action="submit">
        <input 
        type="text" 
        placeholder='Search dictionary...'
        />
        <button type='submit'> <img src='../../assets/images/icon-search.svg' alt="" /> </button>
      </form>
              <img src='../../assets/images/icon-search.svg' alt="" className='img'/>

    </div>
  )
}

export default SeachInput