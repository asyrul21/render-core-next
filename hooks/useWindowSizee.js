import React, { useLayoutEffect, useState } from "react"

// this is a hook to listen to window size changes
function useWindowSize() {
  const [windowWidthHeight, setWidthHeight] = useState([0, 0])
  useLayoutEffect(() => {
    function updateWidthHeight() {
      setWidthHeight([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateWidthHeight)
    updateWidthHeight()
    return () => window.removeEventListener("resize", updateWidthHeight)
  }, [])
  return windowWidthHeight
}

export default useWindowSize
