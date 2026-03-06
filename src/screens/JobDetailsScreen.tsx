import React, { useContext } from "react"
import { View, Text, Pressable, ScrollView } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { JobContext } from "../context/JobContext"
import { ThemeContext } from "../context/ThemeContext"
import { getJobFingerprint } from "../utils/jobIdentity"
import styles from "../styles/JobDetailsStyles"

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
  const cleanDescription = String(job.description || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/^\s*📋?\s*description\s*:?\s*/i, "")
    .replace(/\s+/g, " ")
    .trim()

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
          <Text style={[styles.description, darkMode && styles.descriptionDark]}>
            {cleanDescription || "No description available."}
          </Text>
        </View>
      </ScrollView>

      <View style={[styles.footer, darkMode && styles.footerDark]}>
        <Pressable
          style={[styles.actionBtn, styles.secondaryBtn, darkMode && styles.secondaryBtnDark]}
          onPress={() => saveJob(job)}
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
