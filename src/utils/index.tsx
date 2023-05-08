export const formatNumber = (num: number): string => {
  if (num >= 11000 && num < 1000000) {
    return (num / 1000).toFixed(0) + 'K';
  } else {
    return num.toString();
  }
};


export const getStatsColorClassName = (trend:string) => {
  switch (trend)
  {
    case "up":
      return "stats-green";
    case "down":
      return "stats-red";
    default:
      return "";
  }
};




