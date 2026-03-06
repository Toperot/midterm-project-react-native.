import React, { useContext } from "react"
import { View, Text, FlatList, Alert } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { JobContext } from "../context/JobContext"
import { ThemeContext } from "../context/ThemeContext"
import JobCard from "../components/JobCard"
import styles from "../styles/SavedJobsStyles"

export default function SavedJobsScreen({ navigation }: any) {
  const jobContext = useContext(JobContext)
  const themeContext = useContext(ThemeContext)
  const darkMode = Boolean(themeContext?.darkMode)

  if (!jobContext) return null

  const { savedJobs, removeJob } = jobContext

  const confirmRemove = (id: string, title: string) => {
    Alert.alert(
      "Remove saved job?",
      `"${title}" will be removed from your saved list.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => removeJob(id),
        },
      ]
    )
  }

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <View style={[styles.hero, darkMode && styles.heroDark]}>
        <Text style={[styles.heroTitle, darkMode && styles.heroTitleDark]}>
          Saved Opportunities
        </Text>
        <Text style={[styles.heroSubtitle, darkMode && styles.heroSubtitleDark]}>
          {savedJobs.length} role{savedJobs.length === 1 ? "" : "s"} ready to apply
        </Text>
      </View>

      {savedJobs.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Ionicons
            name="bookmark-outline"
            size={36}
            color={darkMode ? "#9fb4ce" : "#6582a3"}
          />
          <Text style={[styles.empty, darkMode && styles.textDark]}>No saved jobs yet.</Text>
          <Text style={[styles.emptySub, darkMode && styles.textMutedDark]}>
            Save jobs from Discover Roles to keep them here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={savedJobs}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <JobCard
              job={item}
              navigation={navigation}
              darkMode={darkMode}
              showRemove
              onRemove={() => confirmRemove(item.id, item.title)}
            />
          )}
        />
      )}
    </View>
  )
}
