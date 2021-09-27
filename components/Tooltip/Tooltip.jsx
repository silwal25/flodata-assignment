import styles from "./Tooltip.module.scss"

import { useStateContext, useDispatchContext } from "../Context/Context"
import { useEffect, useRef, useState } from "react"

export default function Tooltip({ title, paragraph }) {
  const appState = useStateContext()
  const appDispatch = useDispatchContext()
  const [number, setNumber] = useState("")
  const tooltipRef = useRef(null)
  useEffect(() => {
    if (!appState.countryHovered) return
    appState.countryData.map((item) => {
      if (Boolean(appState.countryHovered == item.id)) {
        setNumber(item.data)
      }
    })
  }, [appState.countryHovered])
  useEffect(() => {
    if (!appState.mousePosition) return
    console.log(tooltipRef.current)
    tooltipRef.current.style.left = `${appState.mousePosition.x - 120}px`
    tooltipRef.current.style.top = `${appState.mousePosition.y - 120}px`
  }, [appState.mousePosition])
  return (
    <div
      className={styles.tooltip}
      id="tooltip"
      ref={tooltipRef}
      onMouseLeave={() => appDispatch({ type: "hideTooltip" })}
      //style={{ left: `${appState.mousePosition.x}px`, top: `${appState.mousePosition.y}px` }}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>
        Jobs in {appState.countryHovered} supported by {appState.countrySelected} exports outside
        of the EU: {number}
      </p>
      <div className={styles.instructions}>Click on the country to see more data!</div>
    </div>
  )
}
