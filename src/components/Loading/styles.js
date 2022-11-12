import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  },
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    borderRadius: 8,
  },
});
