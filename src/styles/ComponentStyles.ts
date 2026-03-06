import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d7e2ef",
    shadowColor: "#0a2342",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 14,
    elevation: 3,
  },

  cardDark: {
    backgroundColor: "#172130",
    borderColor: "#2b3a4f",
    shadowOpacity: 0.2,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#10233b",
    marginBottom: 8,
  },

  infoArea: {
    marginBottom: 2,
  },

  textDark: {
    color: "#f2f6fb",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    marginBottom: 4,
  },

  metaText: {
    fontSize: 13,
    color: "#50627a",
    flexShrink: 1,
  },

  textMutedDark: {
    color: "#9db2cc",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    columnGap: 10,
  },

  actionBtn: {
    flex: 1,
    minHeight: 38,
    borderRadius: 12,
    backgroundColor: "#1f7aff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 6,
  },

  actionText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
  },

  actionSecondary: {
    backgroundColor: "#edf3fb",
  },

  actionSecondaryDark: {
    backgroundColor: "#233247",
  },

  actionSecondaryText: {
    color: "#27456b",
    fontSize: 13,
    fontWeight: "700",
  },

  actionSecondaryTextDark: {
    color: "#b8c6db",
  },

  searchContainer: {
    marginBottom: 14,
    minHeight: 46,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d7e2ef",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  searchContainerDark: {
    backgroundColor: "#172130",
    borderColor: "#2b3a4f",
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    color: "#10233b",
    fontSize: 14,
    paddingVertical: 10,
  },

  searchInputDark: {
    color: "#f2f6fb",
  },
});
