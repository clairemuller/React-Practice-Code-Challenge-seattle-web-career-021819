import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <div className="belt">
      {props.sushi.map((sushiData, index) => {
        return <Sushi
          key={index}
          sushi={sushiData}
          sushiClick={props.sushiClick}
          purchasedSushi={props.purchasedSushi} />
      })}
      <MoreButton
        moreButtonClick={props.moreButtonClick} />
    </div>
  )
}

export default SushiContainer
