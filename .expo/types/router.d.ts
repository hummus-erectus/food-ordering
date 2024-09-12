/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/two` | `/(tabs)\` | `/(tabs)\menu\` | `/(tabs)\menu\[id]` | `/(tabs)\menu\_layout` | `/_sitemap` | `/modal` | `/two`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
