import React from "react";
import { Tooltip, Button } from "antd";
import {
  LinkedinFilled,
  GithubFilled,
  MailOutlined,
  MediumOutlined
} from "@ant-design/icons";
import "../styles/Footer.css";

const Footer = ({ footerRef }) => {
  return (
    <div className="footer" ref={footerRef}>
      <h2>Feel free to reach out!</h2>
      <div className="social-media-btn-group">
        <Tooltip title="LinkedIn">
          <Button
            shape="circle"
            type="ghost"
            size="large"
            icon={<LinkedinFilled style={{ color: "white" }} />}
          />
        </Tooltip>
        <Tooltip title="GitHub">
          <Button
            shape="circle"
            type="ghost"
            size="large"
            icon={<GithubFilled style={{ color: "white" }} />}
          />
        </Tooltip>
        <Tooltip title="Medium">
          <Button
            shape="circle"
            type="ghost"
            size="large"
            icon={<MediumOutlined style={{ color: "white" }} />}
          />
        </Tooltip>
        <Tooltip title="Email">
          <Button
            shape="circle"
            type="ghost"
            size="large"
            icon={<MailOutlined style={{ color: "white" }} />}
          />
        </Tooltip>
      </div>
      <div className="copyright">© 2020 Andrew Chung</div>
    </div>
  );
};

export default Footer;
