import React from 'react'

export const GifGridItem = (props) => {

    console.log(props)

  return (
    <div className='card animate__animated  animate__backInUp '>
        <img src={props.url} alt={props.title}></img>
        <p>{props.title}</p>
    </div>
  )
}
