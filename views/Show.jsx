import React from 'react'

function Show(props) {
    const fruit = props.fruit
  return (
    <div>
        <h1>ShowPage</h1>
        <h3> The {fruit.name} is {fruit.color} </h3>
        <h1 style={{color:'greenyellow'}}>{fruit.readyToEat ? "It's ripe":"It's not ripe"}</h1>
    </div>
  )
}

export default Show