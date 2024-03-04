import React from 'react'

const Card = (props) => {
  return (
    <img className='h-96 mt-9 mb-3 border border-yellow-950' src={props.url} alt="img_url" />
  )
}

export default Card