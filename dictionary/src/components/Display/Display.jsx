import { useEffect, React } from 'react'
import './Display.css'
import { ReactComponent as Play } from '../../assets/images/icon-play.svg'


const Display = ({display}) => {
  console.log(display[0])

  const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // useEffect(() => {
  //   const word = capitalizeString(display[0].word) 
  //   const phonetic = display[0].phonetic
  // }, [display])


  if( display.length > 0  ) {
    console.log(display[0])
    return (
      <div>
        {/* { display.map((item) => {
          // console.log(item.length)
          return (
            <>
              <h1>{item.word}</h1>
            </>
          )
        })} */}
        <div className='heading'>
          <div className="word">
            <h1>{capitalizeString(display[0].word)}</h1>
            <p>{display[0].phonetic}</p>
          </div>
          <Play/>
        </div>
        <div className="type">
          <h1>{display[0].meanings[0]}</h1>
        </div>
        <div className="definition">
          <p>{display[0].meanings[0].definitions[0].definition}</p>
        </div>
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