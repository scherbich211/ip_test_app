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

export type TImage = {
  image: string
}

export type TInfo = TLocationInfo & TImage;

export type TContext = {
  info: TInfo | undefined;
  changeInfo: (newInfo: TInfo) => void;
};
