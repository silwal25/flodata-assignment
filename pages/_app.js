import "../styles/globals.scss"

// Importing Components
import { StateProvider } from "../components/Context/Context"

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
