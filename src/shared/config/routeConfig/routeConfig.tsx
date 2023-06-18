import { MainPage } from "pages/MainPage"
import { SecondPage } from "pages/SecondPage"

import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  Main = 'main',
  Second = 'second'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.Second]: '/second'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.Second]: {
    path: RoutePath.second,
    element: <SecondPage />
  }
}