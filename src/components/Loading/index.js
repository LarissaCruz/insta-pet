import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { styles } from "./styles";

export function Loading({ loading }) {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={"black"} />
      </View>
    </View>
  );
}
