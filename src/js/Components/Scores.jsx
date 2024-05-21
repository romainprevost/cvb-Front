import React from 'react'

export default function Scores( { id, height, src, style }) {
  return (
    <>
        <div className="scores">
          <iframe 
            id={id }
            height={height} 
            src={src}
            style={style}>
          </iframe>
        </div>
    </>
  )
}
