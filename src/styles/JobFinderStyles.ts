import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
    backgroundColor: "#f2f7fd",
  },

  containerDark: {
    backgroundColor: "#0d141f",
  },

  hero: {
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#e6f0ff",
    borderWidth: 1,
    borderColor: "#cadefa",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heroDark: {
    backgroundColor: "#142033",
    borderColor: "#2b3a4f",
  },

  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0e2d52",
  },

  heroTitleDark: {
    color: "#e5eef9",
  },

  heroSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#47678c",
  },

  heroSubtitleDark: {
    color: "#9cb4d1",
  },

  savedBtn: {
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f4f8ff",
    borderWidth: 1,
    borderColor: "#c8daf6",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },

  savedBtnDark: {
    backgroundColor: "#1f2d41",
    borderColor: "#314863",
  },

  savedBtnText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0f2d4f",
  },

  savedBtnTextDark: {
    color: "#d5e2f3",
  },

  metricsRow: {
    flexDirection: "row",
    marginBottom: 10,
    columnGap: 8,
  },

  metricChip: {
    borderRadius: 999,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d5e2f2",
    paddingVertical: 7,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },

  metricChipDark: {
    backgroundColor: "#172130",
    borderColor: "#2b3a4f",
  },

  metricText: {
    fontSize: 12,
    color: "#355171",
    fontWeight: "600",
  },

  metricTextDark: {
    color: "#b9cce4",
  },

  listContent: {
    paddingBottom: 20,
  },

  stateWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 8,
  },

  stateText: {
    color: "#51657f",
    fontSize: 14,
  },

  stateTextDark: {
    color: "#9fb4ce",
  },
})
