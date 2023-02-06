import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

interface AppTextInputProps extends TextInputProps {
  icon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  width?: string;
}
export default function AppTextInput({
  icon,
  width = "100%",
  ...otherProps
}: AppTextInputProps) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} width={width} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.extralight,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    alignSelf: "center",
    marginRight: 10,
  },
});
