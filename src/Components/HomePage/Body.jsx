import React from 'react'
import './Body.css';
const Body = () => {
  return (
    <section className='bodycenter'>
        <div className="borderdiv">
            <div className="totalbalanceflex">
                <h5>Total balance</h5>
                <div className="baconnected">
                <i class="fa-solid fa-circle-plus"></i>
                    <span>BA connected</span>
                </div>
            </div>

            <h1>500,002.46 USDT</h1>

            <div className="p2pbutton">
                <div className="p2pbuttons">
                <i class="fa-solid fa-people-arrows"></i>
                    <h5>P2P DEX</h5>
                </div>
                <div className="p2pbuttons">
                <i class="fa-regular fa-credit-card"></i>
                    <h5>buy with card</h5>
                </div>
                <div className="p2pbuttons">
                    <h5>Cross border</h5>
                </div>
                <div className="p2pbuttons">
                <i class="fa-solid fa-desktop"></i>
                    <h5>Affiliate ref</h5>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Body