import React from 'react'
import './Display.css'

const Display = ({display}) => {
  console.log(display[0].word)
  if( display.length > 0  ) {
    return (
      <div>
        { display.map((item) => {
          // console.log(item.length)
          return (
            <>
              <h1>{item.word}</h1>
            </>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='start-search '>
        <h1>Start by searching the dictionary</h1>
      </div>
    )
  }
}

export default Display