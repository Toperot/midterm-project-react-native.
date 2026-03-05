import React, { useContext } from "react"
import { Pressable } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import JobFinderScreen from "../screens/JobFinderScreen"
import SavedJobsScreen from "../screens/SavedJobsScreen"
import ApplicationFormScreen from "../screens/ApplicationFormScreen"
import { ThemeContext } from "../context/ThemeContext"

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  const themeContext = useContext(ThemeContext)
  const darkMode = Boolean(themeContext?.darkMode)

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: darkMode ? "#111b2a" : "#f8fbff",
        },
        headerTintColor: darkMode ? "#e7f0fb" : "#0f2d4f",
        headerTitleStyle: {
          fontWeight: "700",
        },
        headerRight: () => (
          <Pressable
            onPress={() => themeContext?.toggleTheme()}
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: darkMode ? "#233247" : "#e5eef8",
            }}
          >
            <Ionicons
              name={darkMode ? "sunny-outline" : "moon-outline"}
              size={18}
              color={darkMode ? "#f8d96e" : "#234b7a"}
            />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="JobFinder" component={JobFinderScreen} />
      <Stack.Screen name="SavedJobs" component={SavedJobsScreen} />
      <Stack.Screen name="ApplicationForm" component={ApplicationFormScreen} />
    </Stack.Navigator>
  )
}

