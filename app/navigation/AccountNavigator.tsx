import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen, MessagesScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT_STACK_NAV}
        component={AccountScreen}
        options={{ title: "My Account" }}
      />

      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
}
