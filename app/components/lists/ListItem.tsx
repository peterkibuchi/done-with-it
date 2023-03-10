import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { colors } from "../../config";
import AppText from "../AppText";

interface ListItemProps {
  IconComponent?: ReactNode;
  image?: number;
  onPress?: () => void;
  renderRightActions?: () => ReactNode;
  showChevrons?: boolean;
  subtitle?: string;
  title: string;
}

export default function ListItem({
  IconComponent,
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
}: ListItemProps) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.extralight} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>

          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  subtitle: {
    color: colors.medium,
    fontSize: 16,
  },
  title: {
    fontWeight: "500",
  },
});
