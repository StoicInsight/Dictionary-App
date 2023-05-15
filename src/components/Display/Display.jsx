import { useEffect, React } from 'react'
import './Display.css'
import { ReactComponent as Play } from '../../assets/images/icon-play.svg'
import { Heading } from './Heading'
import { Definition } from './Definition'


const Display = ({display}) => {
  console.log(display[0])

  if( display.length > 0  ) {
    console.log("meaning", display[0].meanings)
    return (
      <div>
        <Heading display={display}/>
        <Definition display={display}/>
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