declare module "react-infinite-ticker" {
  export interface HorizontalTickerProps {
    duration?: number;
    reverse?: boolean;
    children: React.ReactNode;
    className?: string;
  }
  
  export const HorizontalTicker: React.FC<HorizontalTickerProps>;
} 