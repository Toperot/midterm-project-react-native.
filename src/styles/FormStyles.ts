import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f7fd",
    padding: 16,
  },

  containerDark: {
    backgroundColor: "#0d141f",
  },

  formCard: {
    borderRadius: 18,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d8e4f1",
    padding: 16,
    marginBottom: 16,
  },

  formCardDark: {
    backgroundColor: "#172130",
    borderColor: "#2b3a4f",
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0e2d52",
  },

  titleDark: {
    color: "#e5eef9",
  },

  subtitle: {
    marginTop: 4,
    marginBottom: 14,
    fontSize: 13,
    color: "#4d6787",
  },

  subtitleDark: {
    color: "#9fb4ce",
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#2f4d70",
    marginBottom: 6,
  },

  labelDark: {
    color: "#c7d7eb",
  },

  inputWrap: {
    minHeight: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d2e0ee",
    backgroundColor: "#f9fbff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 12,
    columnGap: 8,
  },

  inputWrapDark: {
    borderColor: "#31465f",
    backgroundColor: "#1f2d41",
  },

  input: {
    flex: 1,
    color: "#10233b",
    fontSize: 14,
    paddingVertical: 10,
  },

  textAreaWrap: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d2e0ee",
    backgroundColor: "#f9fbff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 14,
  },

  textarea: {
    minHeight: 110,
    color: "#10233b",
    fontSize: 14,
  },

  inputDark: {
    color: "#e6eef8",
  },

  submitBtn: {
    borderRadius: 12,
    minHeight: 44,
    backgroundColor: "#1f7aff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 8,
  },

  submitBtnText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 14,
  },

  errorText: {
    color: "#d13c3c",
    fontSize: 12,
    marginTop: -8,
    marginBottom: 10,
  },
})
