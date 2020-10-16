// template to create a new component
import React from "react"

// import Fade
import Fade from "react-reveal/Fade"

export const AnimateAppear = props => {
    const duration = 700;
    const delay = 300;

    return (
        <Fade duration={duration} delay={delay}>
            { props.children }
        </Fade>
    )
}



export default AnimateAppear
