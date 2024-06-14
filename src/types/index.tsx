export type TData = {
  id: number;
  ip: string;
  location: string;
  timezone: string;
  isp: string;
};

export type TLocationInfo = {
  ip: string;
  location: string;
  utc: string;
  isp: string;
};

export type TContext = {
  info: TLocationInfo | undefined;
  image: number | undefined;
  changeInfo: (newInfo: TLocationInfo) => void;
  changeImage: (newImage: number) => void;
};
