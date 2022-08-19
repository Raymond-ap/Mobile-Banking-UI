import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <TailwindProvider>
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Onboarding' component={Onboarding} />
      </Stack.Navigator>
     </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
