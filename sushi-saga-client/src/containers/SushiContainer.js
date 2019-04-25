import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div className="belt">
        {props.map((sushi, index) => {
          <Sushi key={index} sushiData={sushi} />
        })
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
