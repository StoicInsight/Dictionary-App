import React from 'react'
import './search-input.css'
import searchIcon from '../../assets/images/icon-search.svg'

const SeachInput = ({ search, submit }) => {
  return (
    <div className='search-input'>
      <form action="submit" onSubmit={submit}>
        <input 
        type="text" 
        placeholder='Search dictionary...'
        onChange={search}
        />
        <img src={searchIcon} className='search-img' alt="" />
      </form>

    </div>
  )
}

export default SeachInput
