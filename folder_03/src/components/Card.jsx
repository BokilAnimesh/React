import React from 'react'

const Card = (props) => {
    console.log(props.user, props.age)
  return (
    <div>
      <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user} Bokil, {props.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, rem.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
