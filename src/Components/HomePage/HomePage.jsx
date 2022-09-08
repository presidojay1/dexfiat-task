import React from 'react'
import NavigationBar from '../Navigation/NavigationBar'
import Body from './Body'
import SecondBody from './SecondBody'

const HomePage = () => {
  return (
    <>
    <div>
        <NavigationBar />
    </div>
    <div className="body">
        <Body />
    </div>
    <div className="secondBody">
        <SecondBody />
    </div>
    </>
  )
}

export default HomePage