import React from 'react'

export const Definition = ({ display }) => {
  return (
    <div className="definition">
      <p>{display[0].meanings[0].definitions[0].definition}</p>
    </div>
  )
}
