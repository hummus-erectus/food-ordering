/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(admin)` | `/(admin)/` | `/(admin)/menu` | `/(admin)/menu/` | `/(admin)/two` | `/(user)` | `/(user)/` | `/(user)/menu` | `/(user)/menu/` | `/(user)/two` | `/_sitemap` | `/cart` | `/menu` | `/menu/` | `/two`;
      DynamicRoutes: `/(admin)/menu/${Router.SingleRoutePart<T>}` | `/(user)/menu/${Router.SingleRoutePart<T>}` | `/menu/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(admin)/menu/[id]` | `/(user)/menu/[id]` | `/menu/[id]`;
    }
  }
}
