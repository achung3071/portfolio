import React from "react";
import { Row, Col, Card } from "antd";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
import { ParallaxBanner } from "react-scroll-parallax";
import "../styles/Projects.css";
const { Meta } = Card;

const Projects = ({ projectRef }) => {
  const layers = [
    {
      image:
        "https://www.ecopetit.cat/wpic/mpic/43-437293_2560x1600-black-abstract-wallpaper-for-iphone-data-high.jpg",
      amount: 0.55
    }
  ];

  const projects = [
    {
      name: "Find Your Fit",
      repository: "https://github.com/cs394-w20/find-your-fit",
      url: "https://rinserepeat-1292e.firebaseapp.com/",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0ad19755840289.5995550634375.jpg",
      description:
        "A mobile-friendly web app for trialing and purchasing athletic gear."
    }
  ];

  const actions = [
    <div>
      <LinkOutlined style={{ marginRight: "8px" }} />
      Website
    </div>,
    <div>
      <GithubOutlined style={{ marginRight: "8px" }} />
      Repository
    </div>
  ];

  return (
    <div ref={projectRef}>
      <ParallaxBanner layers={layers} style={{ height: "auto" }}>
        <Row className="projects-container">
          <Col span={24} style={{ marginBottom: "30px" }}>
            <h1>projects</h1>
          </Col>
          <Col style={{ width: "100%" }}>
            <Row>
              {projects.map(project => (
                <Col xs={24} md={12} lg={8} xl={6}>
                  <Card
                    cover={<img alt="" src={project.image} />}
                    actions={actions}
                  >
                    <Meta
                      title={project.name}
                      description={project.description}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </ParallaxBanner>
    </div>
  );
};

export default Projects;
