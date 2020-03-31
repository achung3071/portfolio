import React from "react";
import { Row, Col, Card } from "antd";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
import { ParallaxBanner } from "react-scroll-parallax";
import { projects } from "../utils/ProjectData";
import "../styles/Projects.css";
const { Meta } = Card;

const importAll = r => {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

const Projects = ({ projectRef }) => {
  const layers = [
    {
      image:
        "https://www.ecopetit.cat/wpic/mpic/43-437293_2560x1600-black-abstract-wallpaper-for-iphone-data-high.jpg",
      amount: 0.55
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
            <Row gutter={[30, 30]} style={{ position: "relative" }}>
              {projects.map(project => (
                <Col xs={24} md={12} lg={8} xl={6}>
                  <Card
                    cover={
                      <img
                        alt=""
                        src={images[project.imageName]}
                        style={{ height: "250px", objectFit: "contain" }}
                      />
                    }
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
