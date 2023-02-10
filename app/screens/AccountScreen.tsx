import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, StyleSheet, View } from "react-native";

import { useAuth } from "../auth";
import { Icon, ListItem, ListItemSeparator, Screen } from "../components";
import { colors, routes } from "../config";

interface MenuItem {
  id: number;
  title: string;
  icon: {
    name: string;
    backgroundColor: string;
  };
  targetScreen: string;
}

type AccountNavigatorParamList = {
  Account: undefined;
  Messages: undefined;
};

type AccountScreenNavigationProp = StackNavigationProp<
  AccountNavigatorParamList,
  "Account"
>;

interface AccountScreenProps {
  navigation: AccountScreenNavigationProp;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "",
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

export default function AccountScreen({ navigation }: AccountScreenProps) {
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/user.png")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logout()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: { backgroundColor: colors.extralight },
});
