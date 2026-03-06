import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f7fd",
  },

  containerDark: {
    backgroundColor: "#0d141f",
  },

  content: {
    padding: 16,
    paddingBottom: 120,
  },

  card: {
    borderRadius: 18,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d7e2ef",
    padding: 16,
  },

  cardDark: {
    backgroundColor: "#172130",
    borderColor: "#2b3a4f",
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#10233b",
  },

  titleDark: {
    color: "#e6eef9",
  },

  company: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: "700",
    color: "#3d5c80",
  },

  companyDark: {
    color: "#b7cae2",
  },

  metaBlock: {
    marginTop: 14,
    rowGap: 10,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },

  metaText: {
    flex: 1,
    fontSize: 14,
    color: "#4d6787",
  },

  metaTextDark: {
    color: "#9fb4ce",
  },

  sectionTitle: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "800",
    color: "#0f2d4f",
  },

  sectionTitleDark: {
    color: "#d7e4f4",
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#2e4867",
  },

  descriptionDark: {
    color: "#b2c5dd",
  },

  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    columnGap: 10,
    padding: 12,
    paddingBottom: 18,
    backgroundColor: "#f2f7fd",
    borderTopWidth: 1,
    borderTopColor: "#d7e2ef",
  },

  footerDark: {
    backgroundColor: "#0d141f",
    borderTopColor: "#2b3a4f",
  },

  actionBtn: {
    flex: 1,
    minHeight: 44,
    borderRadius: 12,
    backgroundColor: "#1f7aff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 8,
  },

  secondaryBtn: {
    backgroundColor: "#edf3fb",
  },

  secondaryBtnDark: {
    backgroundColor: "#233247",
  },

  primaryText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
  },

  secondaryText: {
    color: "#27456b",
    fontSize: 14,
    fontWeight: "700",
  },

  secondaryTextDark: {
    color: "#c0d0e5",
  },
})

