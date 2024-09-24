import React from 'react';
import {NavigationContainer, NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DailyScreen from './app/screen/DailyScreen';
import ProfileScreen from './app/screen/ProfileScreen';
import ProfileIcon from './app/components/icons/ProfileIcon';
import ExploreIcon from './app/components/icons/ExploreIcon';


export type RootStackParams = {
  DailyStack: NavigatorScreenParams<DailyStackParams>;
  Profile: undefined;
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type DailyStackParams = {
  Daily: {
    name: string;
  };
};

const DailyStack = createNativeStackNavigator<DailyStackParams>();

const DailyScreenStack = () => {
  return (
    <DailyStack.Navigator initialRouteName="Daily" screenOptions={{
      headerShown: false,
    }}>
      <DailyStack.Screen
        name="Daily"
        component={DailyScreen}
      />
    </DailyStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="DailyStack" screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#e67a15',
        tabBarInactiveTintColor: 'gray',
      })}>

       <RootStack.Screen name="DailyStack" component={DailyScreenStack} options={{
          tabBarIcon: ({ color, size }) => <ExploreIcon color={color} size={size} />,
          tabBarLabel: "Explore"
        }} />

        <RootStack.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />,
          tabBarLabel: "Profile"
        }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;