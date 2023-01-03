import { Image } from "antd";
import React from "react";
import "./index.css";
import Logo from "../../asset/logo.png";
import List from "./menu";

function Left() {
  return (
    <div>
      <div className="logo">
        <Image src={Logo} alt="Logo" width={150} preview={false} />
      </div>
      <div className="menu">
<List/>
      </div>
    </div>
  );
}

export default Left;
