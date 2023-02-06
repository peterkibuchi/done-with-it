import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";

interface IconProps {
  backgroundColor?: string;
  iconColor?: string;
  name: ComponentProps<typeof MaterialCommunityIcons>["name"];
  size?: number;
}

export default function Icon({
  backgroundColor = "#000",
  iconColor = "#fff",
  name,
  size = 40,
}: IconProps) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}
