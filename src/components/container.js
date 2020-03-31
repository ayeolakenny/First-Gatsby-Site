import React from "react"
import contianerStyles from "./container.module.css"

const Container = ({ children }) => (
    <div className={contianerStyles.container}>
        { children }
    </div>
)

export default Container