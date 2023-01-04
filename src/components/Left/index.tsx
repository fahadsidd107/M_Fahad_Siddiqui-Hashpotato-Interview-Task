import { Image } from "antd";
import React from "react";
import "./index.css";
import Logo from "../../asset/logo.png";
import List from "./menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faDiscord,faTelegram } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";


function Left() {
  const Twitter = faTwitter as IconProp;
  const Discord = faDiscord as IconProp
  const Telegram = faTelegram as IconProp
  return (
    <div className="left-panel-main-div">
      <div className="logo">
        <Image src={Logo} alt="Logo" width={150} preview={false} />
      </div>
      <div className="menu">
<List/>
      </div>
      <div className="footer">
      <FontAwesomeIcon icon={Twitter} className="footer-icons" />
      <FontAwesomeIcon icon={Discord} className="footer-icons" />
      <FontAwesomeIcon icon={Telegram} className="footer-icons" />
      </div>
    </div>
  );
}

export default Left;
