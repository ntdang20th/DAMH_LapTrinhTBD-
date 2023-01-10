import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Welcome,
  LoginDoctor,
  LoginUser,
  SignUpUser,
  SignUpAdmin,
  SignUpDoctor,
  AdminDoctor,
  ListViewDoctor,
  AdminFamiliar,
} from "../screens";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LoginUser" component={LoginUser} />
      <Stack.Screen name="LoginDoctor" component={LoginDoctor} />
      <Stack.Screen name="SignUpAdmin" component={SignUpAdmin} />
      <Stack.Screen name="SignUpDoctor" component={SignUpDoctor} />
      <Stack.Screen name="SignUp" component={SignUpUser} />
      <Stack.Screen name="AdminDoctor" component={AdminDoctor} />
      <Stack.Screen name="ListViewDoctor" component={ListViewDoctor} />
      <Stack.Screen name="AdminFamiliar" component={AdminFamiliar} />
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
