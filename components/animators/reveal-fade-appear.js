// template to create a new component
import React from "react"

// import Fade
import Fade from "react-reveal/Fade"

export const AnimateAppear = props => {
    const { duration, delay } = props
    
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
