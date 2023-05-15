import React from 'react'
import './search-input.css'
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg'

const SeachInput = ({ search, submit }) => {
  return (
    <div className='search-input'>
      <form action="submit" onSubmit={submit}>
        <input 
        type="text" 
        placeholder='Search dictionary...'
        onChange={search}
        />
        <SearchIcon className='search-icon'/> 
      </form>

    </div>
  )
}

export default SeachInput
