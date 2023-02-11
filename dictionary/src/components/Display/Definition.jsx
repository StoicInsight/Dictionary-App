import React from 'react'

export const Definition = ({ display }) => {
  return (
    <div className="">
      {display[0].meanings.map((def) => {
        return (
          <div className='definition'>
            <h1>{def.partOfSpeech}</h1>
            <div className="meaning-wrap">
              <h5>Meaning</h5>
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
