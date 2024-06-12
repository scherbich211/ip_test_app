export enum ROUTES {
  DASHBOARD = 'DASHBOARD',
  MARKET = 'MARKET',
  DATA = 'DATA',
  CHART = 'CHART',
}

export type RootStackParamList = {
  [ROUTES.DASHBOARD]: undefined;
} & TabBarStackParamList

export type TabBarStackParamList = {
  [ROUTES.MARKET]: undefined;
  [ROUTES.DATA]: undefined;
  [ROUTES.CHART]: undefined;
}

