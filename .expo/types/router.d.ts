/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/menu` | `/(tabs)/menu/` | `/(tabs)/two` | `/_sitemap` | `/menu` | `/menu/` | `/modal` | `/two`;
      DynamicRoutes: `/(tabs)/menu/${Router.SingleRoutePart<T>}` | `/menu/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(tabs)/menu/[id]` | `/menu/[id]`;
    }
  }
}
