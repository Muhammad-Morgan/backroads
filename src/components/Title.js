import React from 'react'

const Title = ({first,last}) => {
  return (
    <div className="section-title">
    <h2>{first} 
      <span>{last}</span>
      </h2>
  </div>
  )
}

export default Title
