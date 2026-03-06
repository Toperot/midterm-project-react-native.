import React, { useContext } from "react"
import { View, Text, Pressable, ScrollView, Alert } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { JobContext } from "../context/JobContext"
import { ThemeContext } from "../context/ThemeContext"
import { getJobFingerprint } from "../utils/jobIdentity"
import styles from "../styles/JobDetailsStyles"

const stripEmojis = (value: string) =>
  value
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")
    .replace(/[\u{2600}-\u{27BF}]/gu, "")

const normalizeText = (value: string) =>
  stripEmojis(value)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|ul|ol|h1|h2|h3|h4|h5|h6)>/gi, "\n")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<[^>]*>/g, " ")
    .replace(/^\s*[^a-zA-Z0-9]*\s*description\s*:?\s*/i, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim()

const getSectionText = (fullText: string, section: "description" | "requirements" | "benefits") => {
  const pattern = new RegExp(
    `(?:^|\\s)${section}\\s*:?\\s*([\\s\\S]*?)(?=(?:\\s(?:description|requirements|benefits)\\s*:?)|$)`,
    "i"
  )
  const match = fullText.match(pattern)
  return match ? match[1].trim() : ""
}

const getLeadingDescription = (fullText: string) => {
  const split = fullText.split(/\b(?:requirements|benefits)\s*:?/i)
  return split[0]?.trim() || ""
}

export default function JobDetailsScreen({ navigation, route }: any) {
  const job = route?.params?.job
  const source = route?.params?.source === "saved" ? "saved" : "finder"
  const jobContext = useContext(JobContext)
  const themeContext = useContext(ThemeContext)
  const darkMode = Boolean(themeContext?.darkMode)

  if (!jobContext || !job) return null

  const { savedJobs, saveJob } = jobContext
  const currentFingerprint = getJobFingerprint(job)
  const isSaved = savedJobs.some((savedJob) => getJobFingerprint(savedJob) === currentFingerprint)

  const cleanText = normalizeText(String(job.description || ""))
  const descriptionSection = getSectionText(cleanText, "description")
  const requirementsSection = getSectionText(cleanText, "requirements")
  const benefitsSection = getSectionText(cleanText, "benefits")
  const leadingDescription = getLeadingDescription(cleanText)

  const descriptionText =
    descriptionSection ||
    leadingDescription ||
    cleanText ||
    "No description available."

  const toBulletItems = (sectionText: string, fallback: string) => {
    const source = sectionText.trim()
    if (!source) return [fallback]

    const newlineItems = source
      .split(/\n+/)
      .map((item) => item.replace(/^(?:\u2022|•|[-*]|\d+[.)])\s*/, "").trim())
      .filter(Boolean)

    if (newlineItems.length > 1) return newlineItems

    const markerNormalized = source.replace(/\s*(?:\u2022|•|[-*]|\d+[.)])\s+/g, "\n")
    const splitItems = markerNormalized
      .split(/\n+/)
      .map((item) => item.trim())
      .filter(Boolean)

    if (splitItems.length > 1) return splitItems

    const semicolonItems = source
      .split(/\s*;\s+/)
      .map((item) => item.trim())
      .filter(Boolean)

    if (semicolonItems.length > 1) return semicolonItems

    return [source]
  }

  const requirementsItems = toBulletItems(requirementsSection, "No requirements specified.")
  const benefitsItems = toBulletItems(benefitsSection, "No benefits specified.")
  const handleSavePress = () => {
    if (!isSaved) {
      saveJob(job)
      return
    }

    Alert.alert(
      "Remove saved job?",
      `"${job.title}" will be removed from your saved list.`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", style: "destructive", onPress: () => saveJob(job) },
      ]
    )
  }

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={[styles.card, darkMode && styles.cardDark]}>
          <Text style={[styles.title, darkMode && styles.titleDark]}>{job.title}</Text>
          <Text style={[styles.company, darkMode && styles.companyDark]}>{job.company}</Text>

          <View style={styles.metaBlock}>
            <View style={styles.metaRow}>
              <Ionicons
                name="location-outline"
                size={16}
                color={darkMode ? "#a8bdd8" : "#486486"}
              />
              <Text style={[styles.metaText, darkMode && styles.metaTextDark]}>{job.location}</Text>
            </View>

            <View style={styles.metaRow}>
              <Ionicons name="cash-outline" size={16} color={darkMode ? "#a8bdd8" : "#486486"} />
              <Text style={[styles.metaText, darkMode && styles.metaTextDark]}>{job.salary}</Text>
            </View>
          </View>

          <Text style={[styles.sectionTitle, darkMode && styles.sectionTitleDark]}>Description</Text>
          <Text style={[styles.description, darkMode && styles.descriptionDark]}>{descriptionText}</Text>

          <Text style={[styles.sectionTitle, darkMode && styles.sectionTitleDark]}>Requirements</Text>
          {requirementsItems.map((item, index) => (
            <Text key={`requirement-${index}`} style={[styles.description, darkMode && styles.descriptionDark]}>
              {`\u2022 ${item}`}
            </Text>
          ))}

          <Text style={[styles.sectionTitle, darkMode && styles.sectionTitleDark]}>Benefits</Text>
          {benefitsItems.map((item, index) => (
            <Text key={`benefit-${index}`} style={[styles.description, darkMode && styles.descriptionDark]}>
              {`\u2022 ${item}`}
            </Text>
          ))}
        </View>
      </ScrollView>

      <View style={[styles.footer, darkMode && styles.footerDark]}>
        <Pressable
          style={[styles.actionBtn, styles.secondaryBtn, darkMode && styles.secondaryBtnDark]}
          onPress={handleSavePress}
        >
          <Ionicons
            name={isSaved ? "bookmark" : "bookmark-outline"}
            size={16}
            color={darkMode ? "#c0d0e5" : "#26476f"}
          />
          <Text style={[styles.secondaryText, darkMode && styles.secondaryTextDark]}>
            {isSaved ? "Unsave" : "Save Job"}
          </Text>
        </Pressable>

        <Pressable
          style={styles.actionBtn}
          onPress={() =>
            navigation.navigate("ApplicationForm", {
              job,
              source,
            })
          }
        >
          <Ionicons name="paper-plane-outline" size={16} color="#ffffff" />
          <Text style={styles.primaryText}>Apply</Text>
        </Pressable>
      </View>
    </View>
  )
}
