import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "../config";
import { LoginScreen, RegisterScreen, WelcomeScreen } from "../screens";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.WELCOME}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
}
