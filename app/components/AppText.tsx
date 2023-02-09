import { ReactElement } from "react";
import { Text, TextInputProps } from "react-native";

import { defaultStyles } from "../config";

interface AppTextProps extends TextInputProps {
  children: ReactElement | string;
  style?: Object;
}

export default function AppText({
  children,
  style,
  ...otherProps
}: AppTextProps) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
