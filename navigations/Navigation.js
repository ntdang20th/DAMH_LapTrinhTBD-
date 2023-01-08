import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Welcome,
  LoginAdmin,
  LoginDoctor,
  LoginUser,
  SignUpUser,
  SignUpAdmin,
  SignUpDoctor,
} from "../screens";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
      <Stack.Screen name="LoginUser" component={LoginUser} />
      <Stack.Screen name="LoginDoctor" component={LoginDoctor} />
      <Stack.Screen name="SignUpAdmin" component={SignUpAdmin} />
      <Stack.Screen name="SignUpDoctor" component={SignUpDoctor} />
      <Stack.Screen name="SignUp" component={SignUpUser} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
