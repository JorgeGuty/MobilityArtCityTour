import { createContext } from "react"
export default createContext(
    {
        fontAmplifier: 0,
        increaseFont: () => this.fontAmplifier++
    }
)