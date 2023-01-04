import { Menu } from 'antd'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faSliders } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

export const items = [
  {
    key: "Dashboard",
    icon: <FontAwesomeIcon icon={faSliders} />,
    label: "Dashboard",
  },
  {
    key: "Analytics",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    label: "Analytics",
  },
  {
    key: "Stake",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    label: "Stake",
  },
  {
    key: "Band",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    label: "Band",
  },
    {
    key: "BandDiscount",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    label: "Stake",
    children: [
      {
        key: "users",
        label: (
          <div className='list-children'>
           <p>XIV-BNB LP</p>
           <p>-16.28%</p>
          </div>
        ),
      },

      {
        key: "products",
        label: "Products",
      },
      {
        key: "roles",
        label: "Roles And Permission",
      },
    ],
    // {
      // XIV-BNB LP  -16.28%
      // PASS-BNB LP -16.28%
      // XIV -16.28%
      // BNB -16.28%
      // BUSD -16.28%
    // }
  },
  {
    key: "Buy PASS",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    label: "Buy PASS",
  },
  {
    key: "Price Chart",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    label: "Stake",
  },  {
    key: "Documentation",
    icon: <FontAwesomeIcon icon={faChartLine} />,
    label: "Stake",
  }


];

function List() {
  return (
    <div>
      <div>

        <Menu items={items} className="list" />
      </div>

    </div>
  )
}

export default List