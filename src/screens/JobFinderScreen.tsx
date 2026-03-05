import React, { useEffect, useState, useContext } from "react"
import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
  RefreshControl,
} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { fetchJobs } from "../services/jobApi"
import { JobContext } from "../context/JobContext"
import { ThemeContext } from "../context/ThemeContext"
import { Job } from "../types/Job"
import JobCard from "../components/JobCard"
import SearchBar from "../components/SearchBar"
import styles from "../styles/JobFinderStyles"

export default function JobFinderScreen({ navigation }: any) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const jobContext = useContext(JobContext)
  const themeContext = useContext(ThemeContext)
  const darkMode = Boolean(themeContext?.darkMode)
  const savedCount = jobContext?.savedJobs.length || 0

  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = async () => {
    try {
      setLoading(true)
      const data = await fetchJobs()
      setJobs(data)
    } catch (error) {
      console.error("Failed to load jobs:", error)
      setJobs([])
    } finally {
      setLoading(false)
    }
  }

  const onRefresh = async () => {
    setRefreshing(true)
    await loadJobs()
    setRefreshing(false)
  }

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <View style={[styles.hero, darkMode && styles.heroDark]}>
        <View>
          <Text style={[styles.heroTitle, darkMode && styles.heroTitleDark]}>
            Discover Roles
          </Text>
          <Text style={[styles.heroSubtitle, darkMode && styles.heroSubtitleDark]}>
            Curated remote and on-site openings
          </Text>
        </View>
        <Pressable
          style={[styles.savedBtn, darkMode && styles.savedBtnDark]}
          onPress={() => navigation.navigate("SavedJobs")}
        >
          <Ionicons
            name="bookmark-outline"
            size={16}
            color={darkMode ? "#d5e2f3" : "#0f2d4f"}
          />
          <Text style={[styles.savedBtnText, darkMode && styles.savedBtnTextDark]}>
            Saved ({savedCount})
          </Text>
        </Pressable>
      </View>

      <View style={styles.metricsRow}>
        <View style={[styles.metricChip, darkMode && styles.metricChipDark]}>
          <Ionicons
            name="briefcase-outline"
            size={14}
            color={darkMode ? "#b9cce4" : "#355171"}
          />
          <Text style={[styles.metricText, darkMode && styles.metricTextDark]}>
            {jobs.length} Jobs
          </Text>
        </View>
        <View style={[styles.metricChip, darkMode && styles.metricChipDark]}>
          <Ionicons
            name="flame-outline"
            size={14}
            color={darkMode ? "#b9cce4" : "#355171"}
          />
          <Text style={[styles.metricText, darkMode && styles.metricTextDark]}>
            Updated Daily
          </Text>
        </View>
      </View>

      <SearchBar search={search} setSearch={setSearch} darkMode={darkMode} />

      {loading ? (
        <View style={styles.stateWrap}>
          <ActivityIndicator size="large" color={darkMode ? "#b9cce4" : "#1f7aff"} />
          <Text style={[styles.stateText, darkMode && styles.stateTextDark]}>
            Fetching jobs...
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#1f7aff" />
          }
          ListEmptyComponent={
            <View style={styles.stateWrap}>
              <Ionicons
                name="search-outline"
                size={34}
                color={darkMode ? "#9fb4ce" : "#6a7f98"}
              />
              <Text style={[styles.stateText, darkMode && styles.stateTextDark]}>
                No jobs match your search.
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <JobCard job={item} navigation={navigation} darkMode={darkMode} />
          )}
        />
      )}
    </View>
  )
}

