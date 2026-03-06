import React, { useState, useContext } from "react"
import { View, Text, TextInput, Alert, Pressable, ScrollView } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemeContext } from "../context/ThemeContext"
import styles from "../styles/FormStyles"

type FormField = "name" | "email" | "contact" | "reason"

interface FieldErrors {
  name: string
  email: string
  contact: string
  reason: string
}

const EMPTY_ERRORS: FieldErrors = {
  name: "",
  email: "",
  contact: "",
  reason: "",
}

export default function ApplicationFormScreen({ navigation, route }: any) {
  const themeContext = useContext(ThemeContext)
  const darkMode = Boolean(themeContext?.darkMode)
  const source = route?.params?.source === "saved" ? "saved" : "finder"

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [reason, setReason] = useState("")
  const [errors, setErrors] = useState<FieldErrors>(EMPTY_ERRORS)

  const validateName = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return "Full name is required."
    if (trimmed.length < 2) return "Full name must be at least 2 characters."
    if (trimmed.length > 60) return "Full name must not exceed 60 characters."
    if (!/^[a-zA-Z .'-]+$/.test(trimmed)) {
      return "Full name can only include letters, spaces, apostrophes, dots, and hyphens."
    }
    return ""
  }

  const validateEmail = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return "Email is required."
    if (trimmed.length > 254) return "Email must not exceed 254 characters."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) return "Enter a valid email address."
    return ""
  }

  const validateContact = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return "Contact number is required."
    const normalized = trimmed.replace(/[\s-]/g, "")
    if (!/^\+?\d+$/.test(normalized)) return "Contact number must contain only digits."
    const digitCount = normalized.replace("+", "").length
    if (digitCount < 10 || digitCount > 15) {
      return "Contact number must be 10 to 15 digits."
    }
    return ""
  }

  const validateReason = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return "Reason is required."
    if (trimmed.length < 30) return "Reason must be at least 30 characters."
    if (trimmed.length > 500) return "Reason must not exceed 500 characters."
    return ""
  }

  const validateField = (field: FormField, value: string) => {
    switch (field) {
      case "name":
        return validateName(value)
      case "email":
        return validateEmail(value)
      case "contact":
        return validateContact(value)
      case "reason":
        return validateReason(value)
      default:
        return ""
    }
  }

  const setFieldValue = (field: FormField, value: string) => {
    if (field === "name") setName(value)
    if (field === "email") setEmail(value)
    if (field === "contact") setContact(value)
    if (field === "reason") setReason(value)
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
  }

  const validate = () => {
    const nextErrors: FieldErrors = {
      name: validateName(name),
      email: validateEmail(email),
      contact: validateContact(contact),
      reason: validateReason(reason),
    }
    setErrors(nextErrors)
    const hasErrors = Object.values(nextErrors).some((message) => Boolean(message))
    if (hasErrors) {
      Alert.alert("Validation Error", "Please fix the highlighted fields before submitting.")
      return false
    }
    return true
  }

  const submitApplication = () => {
    if (!validate()) return

    Alert.alert("Application Submitted", "Your application has been sent successfully!", [
      {
        text: "Okay",
        onPress: () => {
          if (source === "saved") {
            navigation.reset({
              index: 0,
              routes: [{ name: "JobFinder" }],
            })
            return
          }
          navigation.goBack()
        },
      },
    ])

    setName("")
    setEmail("")
    setContact("")
    setReason("")
    setErrors(EMPTY_ERRORS)
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
              onChangeText={(text) => setFieldValue("name", text)}
            />
          </View>
          {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

          <Text style={[styles.label, darkMode && styles.labelDark]}>Email Address</Text>
          <View style={[styles.inputWrap, darkMode && styles.inputWrapDark]}>
            <Ionicons name="mail-outline" size={16} color={darkMode ? "#9eb5d2" : "#567092"} />
            <TextInput
              style={[styles.input, darkMode && styles.inputDark]}
              placeholder="name@email.com"
              placeholderTextColor={darkMode ? "#9eb0c6" : "#798ca7"}
              value={email}
              onChangeText={(text) => setFieldValue("email", text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          <Text style={[styles.label, darkMode && styles.labelDark]}>Contact Number</Text>
          <View style={[styles.inputWrap, darkMode && styles.inputWrapDark]}>
            <Ionicons name="call-outline" size={16} color={darkMode ? "#9eb5d2" : "#567092"} />
            <TextInput
              style={[styles.input, darkMode && styles.inputDark]}
              placeholder="09123456789"
              placeholderTextColor={darkMode ? "#9eb0c6" : "#798ca7"}
              value={contact}
              onChangeText={(text) => setFieldValue("contact", text)}
              keyboardType="phone-pad"
            />
          </View>
          {errors.contact ? <Text style={styles.errorText}>{errors.contact}</Text> : null}

          <Text style={[styles.label, darkMode && styles.labelDark]}>Why should we hire you?</Text>
          <View style={[styles.textAreaWrap, darkMode && styles.inputWrapDark]}>
            <TextInput
              style={[styles.textarea, darkMode && styles.inputDark]}
              placeholder="Share your strengths and achievements..."
              placeholderTextColor={darkMode ? "#9eb0c6" : "#798ca7"}
              value={reason}
              onChangeText={(text) => setFieldValue("reason", text)}
              multiline
              textAlignVertical="top"
            />
          </View>
          {errors.reason ? <Text style={styles.errorText}>{errors.reason}</Text> : null}

          <Pressable style={styles.submitBtn} onPress={submitApplication}>
            <Ionicons name="paper-plane-outline" size={16} color="#fff" />
            <Text style={styles.submitBtnText}>Submit Application</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

