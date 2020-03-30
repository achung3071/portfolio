import React from "react";
import { Row, Col, Button } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ParallaxBanner } from "react-scroll-parallax";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/Header.css";

const Header = () => {
  const codeString = `describe("Andrew Chung", () => {
  it("should be a developer", () => {
    expect(developerName)
      .toBe("Andrew Chung");
  });

  it("should have a GitHub", () => {
    expect(githubLink)
      .toBe("https://github.com/achung3071");
  });

  it("should have these skills", () => {
    expect(skills).toEqual([
      "nodejs",
      "python",
      "express",
      "flask",
      "mysql",
      "mongodb",
      "aws",
      "react",
      "redux",
    ]);
  });
});`;

  const codeStyle = {
    backgroundColor: "transparent",
    border: 0,
    boxShadow: 0,
    padding: 0
  };

  const layers = [
    {
      image:
        "https://iammagnus.com/wp-content/uploads/2016/05/website-design-background-1.jpg",
      amount: 0.55
    }
  ];

  return (
    <ParallaxBanner layers={layers} style={{ height: "auto" }}>
      <Row className="header" align="middle">
        <Col md={24} lg={12}>
          <div className="header-text">
            <h1>Andrew Chung</h1>
            <h2>Software Developer</h2>
            <div className="button-group">
              <Button type="ghost" size="large">
                About
              </Button>
              <Button type="ghost" size="large">
                Projects
              </Button>
              <Button type="ghost" size="large">
                Contact
              </Button>
            </div>
          </div>
        </Col>
        <Col md={24} lg={12}>
          <div className="code-container">
            <SyntaxHighlighter
              language="javascript"
              style={dark}
              customStyle={codeStyle}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </Col>
      </Row>
    </ParallaxBanner>
  );
};

export default Header;
