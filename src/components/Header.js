import React from "react";
import { Row, Col, Button } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
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
    border: "none",
    padding: 0
  };

  return (
    <div className="header">
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
    </div>
  );
};

export default Header;
