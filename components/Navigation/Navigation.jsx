import styles from "./Navigation.module.scss"
import { useEffect } from "react"
import { countries } from "../../data/data"

// Importing Components
import { useStateContext, useDispatchContext } from "../Context/Context"
import { AT, BE } from "../../data/data"

export default function Navigation() {
  const appState = useStateContext()
  const appDispatch = useDispatchContext()

  const chooseCountry = (id, e) => {
    appDispatch({ type: "setCountry", data: id })
    appDispatch({ type: "setCountryData", data: id === "AT" ? AT : BE })

    const listItems = Array.from(document.querySelectorAll(".list-item"))
    listItems.map((item) => item.classList.remove(styles.selected))
    e.target.classList.add(styles.selected)
  }
  useEffect(() => {
    document.querySelector(".list-item").classList.add(styles.selected)
  }, [])
  return (
    <nav className={styles.navigation}>
      <h4 className={styles.navHeading}>choose an exporting country</h4>
      <ul>
        {countries.map((item) => (
          <li onClick={(e) => chooseCountry(item.id, e)} key={item.id} className="list-item">
            <img src={item.flag} alt={item.flag} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
