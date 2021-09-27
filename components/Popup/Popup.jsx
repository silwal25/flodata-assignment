import styles from "./Popup.module.scss"
import { PieChart } from "react-minimal-pie-chart"

// Importing Components
import { countryData } from "../../data/data"
import { useStateContext, useDispatchContext } from "../Context/Context"
import { useEffect, useState } from "react"

export default function Popup() {
  const [data, setData] = useState("")
  const [code, setCode] = useState("")
  const appState = useStateContext()
  const appDispatch = useDispatchContext()
  useEffect(() => {
    setData(countryData[appState.countrySelectedOnMap])
    setCode(appState.countrySelectedOnMap)
    return () => {
      setData("")
      setCode("")
    }
  }, [])
  console.log(data)
  return (
    data && (
      <div className={styles.popup}>
        <div className={styles.closeButton} onClick={() => appDispatch({ type: "togglePopup" })}>
          <img src="/assets/closebtn.png" alt="close button" />
        </div>
        <div className={styles.left}>
          <h2 className={styles.heading}>{data.Name}</h2>
          <img src={`/assets/flags/${code}.png`} alt="" className={styles.flag} />
          <ul className={styles.countryInfo}>
            <li>
              <h4 className={styles.infoHeading}>Joined to eu</h4>
              <p>{data.JoinedEU}</p>
            </li>
            <li>
              <h4 className={styles.infoHeading}>population</h4>
              <p>{data.Population} inhabitants</p>
            </li>
            <li>
              <h4 className={styles.infoHeading}>people employed</h4>
              <p>{data.Employed} persons</p>
            </li>
            <li>
              <h4 className={styles.infoHeading}>gdp</h4>
              <p>{data.GDP} million EUR</p>
            </li>
            <li>
              <h4 className={styles.infoHeading}>extra eu exports</h4>
              <p>{data.Exports} million EUR</p>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <div>
            <div className={styles.figure}>
              <span>{data.A2["1995"]}K</span>
              <span>JOBS</span>
            </div>
            <h4 className={styles.year}>1995</h4>
            <p className={styles.text}>Jobs in EU due to {code} exports</p>
          </div>
          <div>
            <div className={styles.figure}>
              <span>{data.A8["1995"]}K</span>
              <span>JOBS</span>
            </div>
            <h4 className={styles.year}>1995</h4>
            <p className={styles.text}>Jobs in {code} due to EU exports</p>
          </div>
          <div>
            <div className={styles.figure}>
              <PieChart
                data={[
                  { title: "Product", value: data.A10["1995"].P, color: "#A2E7F9" },
                  { title: "Service", value: data.A10["1995"].S, color: "#37ACDE" },
                  { title: "Manufacturing", value: data.A10["1995"].M, color: "#0B6192" }
                ]}
                lineWidth={45}
                //segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
                //segmentsShift={(index) => (index === selected ? 6 : 1)}
                //style={{ height: "100px" }}
              />
            </div>
            <h4 className={styles.year}>1995</h4>
            <p className={styles.text}>Jobs by sector due to EU exports</p>
          </div>
          <div>
            <div className={styles.figure}>
              <PieChart
                data={[
                  { title: "High", value: data.A12["1995"].H, color: "#A2E7F9" },
                  { title: "Medium", value: data.A12["1995"].M, color: "#37ACDE" },
                  { title: "Low", value: data.A12["1995"].L, color: "#0B6192" }
                ]}
                lineWidth={45}
                //segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
                //segmentsShift={(index) => (index === selected ? 6 : 1)}
                //style={{ height: "100px" }}
              />
            </div>
            <h4 className={styles.year}>1995</h4>
            <p className={styles.text}>Jobs by education level due to EU exports</p>
          </div>
          <div>
            <div className={styles.figure}>
              <span>{data.B2["1995"]}bn</span>
              <span>JOBS</span>
            </div>
            <h4 className={styles.year}>1995</h4>
            <p className={styles.text}>Income in EU due to {code} exports</p>
          </div>
          <div>
            <div className={styles.figure}>
              <span>{data.B8["1995"]}bn</span>
              <span>JOBS</span>
            </div>
            <h4 className={styles.year}>1995</h4>
            <p className={styles.text}>Income in {code} due to EU exports</p>
          </div>
          <div>
            <div className={styles.figure}>
              <PieChart
                data={[
                  { title: "Product", value: data.B10["1995"].P, color: "#A2E7F9" },
                  { title: "Service", value: data.B10["1995"].S, color: "#37ACDE" },
                  { title: "Manufacturing", value: data.B10["1995"].M, color: "#0B6192" }
                ]}
                lineWidth={45}
                //segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
                //segmentsShift={(index) => (index === selected ? 6 : 1)}
                //style={{ height: "100px" }}
              />
            </div>
            <h4 className={styles.year}>1995</h4>
            <p className={styles.text}>Income by sector due to EU exports</p>
          </div>
          <div>
            <div className={styles.figure}>
              <PieChart
                data={[
                  { title: "High", value: data.B12["1995"].H, color: "#A2E7F9" },
                  { title: "Capital", value: data.B12["1995"].C, color: "#37ACDE" },
                  { title: "Medium", value: data.B12["1995"].M, color: "#0B6192" },
                  { title: "Medium", value: data.B12["1995"].L, color: "#125B1A" }
                ]}
                lineWidth={45}
                //segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
                //segmentsShift={(index) => (index === selected ? 6 : 1)}
                //style={{ height: "100px" }}
              />
            </div>
            <h4 className={styles.year}>1995</h4>
            <p className={styles.text}>
              Income by capital and educational level due to EU exports
            </p>
          </div>
        </div>
      </div>
    )
  )
}
