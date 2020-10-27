// template to create a new component
import React from "react"

// import Fade
import Fade from "react-reveal/Fade"

export const AnimateAppearFrom = props => {
    const { duration, delay, direction } = props
    const distance = "30px"

    return (
        <Fade 
            bottom={direction === "bottom"}
            left={direction === "left"}
            right={direction === "right"}
            top={direction === "top"}
            distance={distance}
            duration={duration} 
            delay={delay}>
            { props.children }
        </Fade>
    )
}

AnimateAppearFrom.defaultProps = {
    direction: "bottom",
    duration: 700,
    delay: 300
}


export default AnimateAppearFrom
