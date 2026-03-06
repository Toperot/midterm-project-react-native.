import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Job } from "../types/Job";
import { JobContext } from "../context/JobContext";
import { getJobFingerprint } from "../utils/jobIdentity";
import styles from "../styles/ComponentStyles";

interface Props {
  job: Job;
  navigation: any;
  darkMode?: boolean;
  showRemove?: boolean;
  onRemove?: () => void;
}

export default function JobCard({
  job,
  navigation,
  darkMode = false,
  showRemove = false,
  onRemove,
}: Props) {
  const jobContext = useContext(JobContext);

  if (!jobContext) return null;

  const { savedJobs, saveJob } = jobContext;

  const currentFingerprint = getJobFingerprint(job);
  const isSaved = savedJobs.some((savedJob) => getJobFingerprint(savedJob) === currentFingerprint);

  return (
    <View style={[styles.card, darkMode && styles.cardDark]}>
      <Pressable
        style={styles.infoArea}
        onPress={() =>
          navigation.navigate("JobDetails", {
            job,
            source: showRemove ? "saved" : "finder",
          })
        }
      >
        <Text style={[styles.title, darkMode && styles.textDark]}>{job.title}</Text>

        <View style={styles.row}>
          <Ionicons
            name="business-outline"
            size={14}
            color={darkMode ? "#9db2cc" : "#50627a"}
          />
          <Text style={[styles.metaText, darkMode && styles.textMutedDark]}>{job.company}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={14}
            color={darkMode ? "#9db2cc" : "#50627a"}
          />
          <Text style={[styles.metaText, darkMode && styles.textMutedDark]} numberOfLines={1}>
            {job.location}
          </Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="cash-outline"
            size={14}
            color={darkMode ? "#9db2cc" : "#50627a"}
          />
          <Text style={[styles.metaText, darkMode && styles.textMutedDark]}>{job.salary}</Text>
        </View>
      </Pressable>

      <View style={styles.buttonRow}>
        {showRemove ? (
          <Pressable
            style={[styles.actionBtn, styles.actionSecondary, darkMode && styles.actionSecondaryDark]}
            onPress={onRemove}
          >
            <Ionicons name="trash-outline" size={14} color={darkMode ? "#ffb5b5" : "#bf3636"} />
            <Text style={[styles.actionSecondaryText, darkMode && styles.actionSecondaryTextDark]}>
              Remove
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={[styles.actionBtn, styles.actionSecondary, darkMode && styles.actionSecondaryDark]}
            onPress={() => saveJob(job)}
          >
            <Ionicons
              name={isSaved ? "bookmark" : "bookmark-outline"}
              size={14}
              color={darkMode ? "#b8c6db" : "#27456b"}
            />
            <Text style={[styles.actionSecondaryText, darkMode && styles.actionSecondaryTextDark]}>
              {isSaved ? "Unsave" : "Save Job"}
            </Text>
          </Pressable>
        )}

        <Pressable
          style={styles.actionBtn}
          onPress={() =>
            navigation.navigate("ApplicationForm", {
              job,
              source: showRemove ? "saved" : "finder",
            })
          }
        >
          <Ionicons name="paper-plane-outline" size={14} color="#ffffff" />
          <Text style={styles.actionText}>Apply</Text>
        </Pressable>
      </View>
    </View>
  );
}

