import { useReducer, useContext, createContext, useState } from "react"

const StateContext = createContext()
const DispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "selectCountryOnMap":
      return { ...state, countrySelectedOnMap: action.data }
    case "togglePopup":
      return { ...state, isPopupVisible: !state.isPopupVisible }
    case "setCountry":
      return { ...state, countrySelected: action.data }
    case "setCountryData":
      return { ...state, countryData: action.data }
    case "setCountryHovered":
      return { ...state, countryHovered: action.data }
    case "setHovered":
      return { ...state, isHovered: !state.isHovered }
    case "setMousePosition":
      return { ...state, mousePosition: action.data }
    case "showTooltip":
      return { ...state, isHovered: true }
    case "hideTooltip":
      return { ...state, isHovered: false }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}
export const StateProvider = ({ children }) => {
  const initialState = useState({
    isPopupVisible: false,
    countrySelected: "AT",
    countrySelectedOnMap: "",
    countryData: {},
    countryHovered: "",
    isHovered: false,
    mousePosition: { x: 0, y: 0 }
  })
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
export const useDispatchContext = () => useContext(DispatchContext)
