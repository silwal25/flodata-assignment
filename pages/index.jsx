import Head from "next/head"
import Image from "next/image"
import styles from "../styles/pages/Home.module.scss"

// Importing Components
import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
import Map from "../components/Map/Map"
import Tooltip from "../components/Tooltip/Tooltip"
import { useStateContext } from "../components/Context/Context"

export default function Home() {
  const appState = useStateContext()
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <Map />
      {appState.isHovered && <Tooltip title="germany" paragraph="lorem ipsum" />}
    </div>
  )
}
