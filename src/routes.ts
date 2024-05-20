export enum ROUTES {
  DASHBOARD = 'DASHBOARD',
  IMAGINARIUM = 'IMAGINARIUM',
}

export type RootStackParamList = {
  [ROUTES.DASHBOARD]: undefined;
} & TabBarStackParamList

export type TabBarStackParamList = {
  [ROUTES.IMAGINARIUM]: undefined;
}

