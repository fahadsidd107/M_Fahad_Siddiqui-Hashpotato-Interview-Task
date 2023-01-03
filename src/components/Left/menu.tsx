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
   
  ];

function List() {
  return (
    <div>
      <div>
       
      <Menu items={items}  className="list" />
      </div>

    </div>
  )
}

export default List