import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { colors } from "../config";

interface NewListingButtonProps {
  onPress: () => void;
}

export default function NewListingButton({ onPress }: NewListingButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus" color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 5,
    bottom: 30,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});
