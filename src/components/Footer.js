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
            shape="circle-outline"
            ghost={true}
            size="large"
            href="https://www.linkedin.com/in/andrew-chung-378879185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled style={{ color: "white" }} />
          </Button>
        </Tooltip>
        <Tooltip title="GitHub">
          <Button
            shape="circle-outline"
            ghost={true}
            size="large"
            href="https://github.com/achung3071"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled style={{ color: "white" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Medium">
          <Button
            shape="circle-outline"
            ghost={true}
            size="large"
            href="https://medium.com/@andrewchung2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MediumOutlined style={{ color: "white" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Email">
          <Button
            shape="circle-outline"
            ghost={true}
            size="large"
            href="mailto:andrewchung2022@u.northwestern.edu"
          >
            <MailOutlined style={{ color: "white" }} />
          </Button>
        </Tooltip>
      </div>
      <div className="copyright">© 2020 Andrew Chung</div>
    </div>
  );
};

export default Footer;
