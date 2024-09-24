// import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import ProfileIcon from './icons/ProfileIcon';
// // import ExploreIcon from './icons/ExploreIcon';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// import DailyScreen from '../screen/DailyScreen';
// import ProfileScreen from '../screen/ProfileScreen';

// export type RootStackParams = {
//   DailyStack: NavigatorScreenParams<DailyStackParams>;
//   Profile: undefined;
// };

// const RootStack = createDrawerNavigator<RootStackParams>();

// export type DailyStackParams = {
//   Day: {
//     name: string;
//   };
// };

// const DailyStack = createNativeStackNavigator<DailyStackParams>();

// const DailyScreenStack = () => {
//   return (
//     <DailyScreenStack.Navigator initialRouteName="DailyScreen" screenOptions={{
//       headerShown: false,
//     }}>
//       <DailyStack.Screen
//         name="DailyScreen"
//         component={DailyScreen}
//       />
//     </DailyScreenStack.Navigator>
//   );
// };

// export type ExploreStackParams = {
//   Explore: undefined;
//   Restaurant: {
//     name: string;
//   };
// };

// // const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

// // const ExploreScreenStack = () => {
// //   return (
// //     <ExploreStack.Navigator initialRouteName="Explore" screenOptions={{
// //       headerShown: false,
// //     }}>
// //       <ExploreStack.Screen name="Explore" component={ExploreScreen} />
// //       <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
// //     </ExploreStack.Navigator>
// //   );
// // };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator initialRouteName="ExploreStack" screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: '#e67a15',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//         <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} options={{
//           drawerIcon: ({ color, size }) => <ExploreIcon color={color} size={size} />,
//           drawerLabel: "Explore"
//         }} />
//         <RootStack.Screen
//           name="RestaurantsStack"
//           component={RestaurantScreenStack}
//           options={{
//             drawerIcon: ({ color, size }) => <RestaurantIcon color={color} size={size} />,
//             drawerLabel: "Restaurants"
//           }}
//         />
//         <RootStack.Screen name="Profile" component={ProfileScreen} options={{
//           drawerIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />,
//           drawerLabel: "Profile"
//         }} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// function createDrawerNavigator<T>() {
//     throw new Error('Function not implemented.');
// }

