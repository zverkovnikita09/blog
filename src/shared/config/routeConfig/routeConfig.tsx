import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { SecondPage } from 'pages/SecondPage'

import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  Main = 'main',
  Second = 'second',
  NotFound = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.Second]: '/second',
  [AppRoutes.NotFound]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.Second]: {
    path: RoutePath.second,
    element: <SecondPage />
  },
  [AppRoutes.NotFound]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}