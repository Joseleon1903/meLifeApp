/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/two` | `/_sitemap` | `/components/EditScreenInfo` | `/components/ExternalLink` | `/components/StyledText` | `/components/Themed` | `/components/__tests__/StyledText-test` | `/components/icons/BackIcon` | `/components/icons/DrawerMenuIcon` | `/components/icons/ExploreIcon` | `/components/icons/ProfileIcon` | `/components/icons/RestaurantIcon` | `/components/useClientOnlyValue` | `/components/useColorScheme` | `/constants/Colors` | `/modal` | `/navigation/AppDrawerNavigator` | `/navigation/AppTabNavigator` | `/screen/DailyScreen` | `/screen/ProfileScreen` | `/two`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
