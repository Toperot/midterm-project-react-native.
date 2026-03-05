import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./src/navigation/AppNavigator"
import { JobProvider } from "./src/context/JobContext"
import { ThemeProvider } from "./src/context/ThemeContext"

export default function App() {
  return (
    <ThemeProvider>
      <JobProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </JobProvider>
    </ThemeProvider>
  )
}