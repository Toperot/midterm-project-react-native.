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
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    backgroundColor: "#e7f4ef",
    borderWidth: 1,
    borderColor: "#cae6da",
  },

  heroDark: {
    backgroundColor: "#1a2a2a",
    borderColor: "#2f4a4a",
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#123d37",
  },

  heroTitleDark: {
    color: "#d9f0ec",
  },

  heroSubtitle: {
    marginTop: 4,
    color: "#3f6961",
    fontSize: 13,
  },

  heroSubtitleDark: {
    color: "#9fc5bf",
  },

  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 8,
    paddingHorizontal: 24,
  },

  empty: {
    textAlign: "center",
    fontSize: 18,
    color: "#274a6f",
    fontWeight: "700",
  },

  emptySub: {
    textAlign: "center",
    color: "#5d7795",
    fontSize: 13,
  },

  textDark: {
    color: "#d7e6f8",
  },

  textMutedDark: {
    color: "#9fb4ce",
  },

  listContent: {
    paddingBottom: 20,
  },
})
