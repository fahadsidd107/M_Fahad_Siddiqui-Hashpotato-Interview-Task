import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faSliders } from "@fortawesome/free-solid-svg-icons";
import Dashboard from '../../asset/dashboard.png'
import Analytics from '../../asset/analytics.png'
import Stake from '../../asset/stake.png'
import Band from '../../asset/band.png'
import BuyPass from '../../asset/buypass.png'
import PriceChart from '../../asset/pricechart.png'
import Documentation from '../../asset/documentation.png'

export const upperList = [
  {
    icon: Dashboard,
    label: "Dashboard",
  },
  {
    icon: Analytics,
    label: "Analytics",
  },
  {
    icon: Stake,
    label: "Stake",
  },
  {
    icon: Band,
    label: "Band",
  },
];

export const lowerList = [
    {
        icon: BuyPass,
        label: "Buy PASS",
      },
      {
        icon: PriceChart,
        label: "Price Chart",
      },  {
        icon: Documentation,
        label: "Documentation",
      }
  ];

export const bandDiscount =[
    {
        coin: "XIV-BNB LP",
        percentage: "-16.28%",
      },
      {
        coin: "PASS-BNB LP",
        percentage: "-16.28%",
      },
      {
        coin: "XIV",
        percentage: "-16.28%",
      },
      {
        coin: "BNB",
        percentage: "-16.28%",
      },
      {
        coin: "BUSD",
        percentage: "-16.28%",
      },

]
