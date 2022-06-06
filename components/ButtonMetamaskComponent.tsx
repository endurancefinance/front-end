import { useState } from "react"
import { BigNumber, BigNumberish, ethers } from "ethers"

const ButtonMetamaskComponent= () => {
    
  
    return (
    <div>
        <button onClick={connectMMWalletHandler}>{connectionButtonText}</button>
        <div><h3>Address: {defaultAccount}</h3></div>
        <div><h3>Balance: {userBalance}</h3></div>
    </div>
  )
}

export default ButtonMetamaskComponent