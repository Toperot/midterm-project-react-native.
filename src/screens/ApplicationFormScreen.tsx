import React, { useState, useContext } from "react"
import { View, Text, TextInput, Alert, Pressable, ScrollView } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemeContext } from "../context/ThemeContext"
import styles from "../styles/FormStyles"

export default function ApplicationFormScreen({ navigation }: any) {
  const themeContext = useContext(ThemeContext)
  const darkMode = Boolean(themeContext?.darkMode)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [reason, setReason] = useState("")

  const validate = () => {
    if (!name.trim() || !email.trim() || !contact.trim() || !reason.trim()) {
      Alert.alert("Error", "All fields are required.")
      return false
    }

    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.")
      return false
    }

    const phoneRegex = /^[0-9]{7,15}$/
    if (!phoneRegex.test(contact)) {
      Alert.alert("Invalid Contact Number", "Contact number must contain only digits.")
      return false
    }

    return true
  }

  const submitApplication = () => {
    if (!validate()) return

    Alert.alert("Application Submitted", "Your application has been sent successfully!", [
      {
        text: "Okay",
        onPress: () =>
          navigation.reset({
            index: 0,
            routes: [{ name: "JobFinder" }],
          }),
      },
    ])

    setName("")
    setEmail("")
    setContact("")
    setReason("")
  }

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.formCard, darkMode && styles.formCardDark]}>
          <Text style={[styles.title, darkMode && styles.titleDark]}>Quick Apply</Text>
          <Text style={[styles.subtitle, darkMode && styles.subtitleDark]}>
            Fill out your profile and submit in one tap.
          </Text>

          <Text style={[styles.label, darkMode && styles.labelDark]}>Full Name</Text>
          <View style={[styles.inputWrap, darkMode && styles.inputWrapDark]}>
            <Ionicons
              name="person-outline"
              size={16}
              color={darkMode ? "#9eb5d2" : "#567092"}
            />
            <TextInput
              style={[styles.input, darkMode && styles.inputDark]}
              placeholder="Jane Doe"
              placeholderTextColor={darkMode ? "#9eb0c6" : "#798ca7"}
              value={name}
              onChangeText={setName}
            />
          </View>

          <Text style={[styles.label, darkMode && styles.labelDark]}>Email Address</Text>
          <View style={[styles.inputWrap, darkMode && styles.inputWrapDark]}>
            <Ionicons name="mail-outline" size={16} color={darkMode ? "#9eb5d2" : "#567092"} />
            <TextInput
              style={[styles.input, darkMode && styles.inputDark]}
              placeholder="name@email.com"
              placeholderTextColor={darkMode ? "#9eb0c6" : "#798ca7"}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={[styles.label, darkMode && styles.labelDark]}>Contact Number</Text>
          <View style={[styles.inputWrap, darkMode && styles.inputWrapDark]}>
            <Ionicons name="call-outline" size={16} color={darkMode ? "#9eb5d2" : "#567092"} />
            <TextInput
              style={[styles.input, darkMode && styles.inputDark]}
              placeholder="09123456789"
              placeholderTextColor={darkMode ? "#9eb0c6" : "#798ca7"}
              value={contact}
              onChangeText={setContact}
              keyboardType="phone-pad"
            />
          </View>

          <Text style={[styles.label, darkMode && styles.labelDark]}>Why should we hire you?</Text>
          <View style={[styles.textAreaWrap, darkMode && styles.inputWrapDark]}>
            <TextInput
              style={[styles.textarea, darkMode && styles.inputDark]}
              placeholder="Share your strengths and achievements..."
              placeholderTextColor={darkMode ? "#9eb0c6" : "#798ca7"}
              value={reason}
              onChangeText={setReason}
              multiline
              textAlignVertical="top"
            />
          </View>

          <Pressable style={styles.submitBtn} onPress={submitApplication}>
            <Ionicons name="paper-plane-outline" size={16} color="#fff" />
            <Text style={styles.submitBtnText}>Submit Application</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

