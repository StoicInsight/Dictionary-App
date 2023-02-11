import React from 'react'

export const Definition = ({ display }) => {
  return (
    <div className="">
      {display[0].meanings.map((def) => {
        return (
          <div className='definition'>
            <div className="part">
              <h1>{def.partOfSpeech}</h1>
              <div className="line"></div>
            </div>
            <div className="meaning-wrap">
              <p>Meaning</p>
              <ul>
                <li>{def.definitions[0].definition}</li>
              </ul>
            </div>
          </div>

        )
      })}
    </div>
  )
}
