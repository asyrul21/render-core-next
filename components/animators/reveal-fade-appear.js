// template to create a new component
import React from "react"

// import Fade
import Fade from "react-reveal/Fade"

export const AnimateAppear = props => {
    const { duration, delay } = props

    console.log("duration:", duration);
    console.log("delay:", delay);
    return (
        <Fade duration={duration} delay={delay}>
            { props.children }
        </Fade>
    )
}

AnimateAppear.defaultProps = {
    duration: 700,
    delay: 300
}



export default AnimateAppear
