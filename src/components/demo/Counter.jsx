import React from 'react'
import { displayCountdown } from './displayCountdown'

function Counter(props){

    const [countdown, setCountdown] = React.useState(props.start)

    function progressCountdown(){
        setCountdown((count) => {
            if(count === 0){
                return 0
            }
            else {
                return count = count - 1
            }
        })
    }

    return(
        <div>
            <h1>{displayCountdown(countdown)}</h1>
            <button onClick={progressCountdown}>Decrement</button>
            <button onClick={()=> setCountdown(props.start)}>Reset </button>
        </div>)
}

export {Counter}