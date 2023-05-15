
import React from 'react'
import { ReactComponent as Play } from '../../assets/images/icon-play.svg'


export const Heading = ({display}) => {

  const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div>
      <div className='heading'>
        <div className="word">
          <h1>{capitalizeString(display[0].word)}</h1>
          <p>{display[0].phonetic}</p>
        </div>
        <Play/>
      </div>
    </div>
  )
}
