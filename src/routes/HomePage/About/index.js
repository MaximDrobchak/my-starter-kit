import React from "react";

import { ConteinerPage, HeaderOfPage } from "../../";

import { Group52, Group53, Group54, Background, ArticleImage } from "./img";
import styled from "styled-components";
import "./styles.css";

const AboutGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid: 1fr / repeat(5, 1fr);
`;

const Article = ({ icon, headline, text, picture, textColor, className }) => (
  <div className={className}>
    <span>
      <img src={icon} alt="" style={{ width: 56, margin: 0 }} />
      <span className="headline">{headline}</span>
      <p className="article-text" style={{ color: textColor }}>
        {text}
      </p>
    </span>
    {picture && <img src={picture} alt="" style={{ width: "100%" }} />}
  </div>
);

const About = () => (
  <ConteinerPage id="about">
    <img className="background-logo" src={Background} alt="" />
    <main>
      <HeaderOfPage text="ABOUT US" />

      <AboutGrid>
        <Article
          className="developmen-article"
          icon={Group53}
          headline="Developmen"
          text={`We transform your ideas 
					into a perfect product and deliver it on time.
					Full software development cycle for all platforms.`}
          picture={ArticleImage}
        />
        <Article
          textColor="white"
          className="strategy-article"
          icon={Group52}
          headline="Strategy"
          text={`Understanding who a company, 
					brand or product is, where they came 
					from and how they got here is
					integral in understanding where to go next.`}
        />
        <Article
          className="consulting-article"
          icon={Group54}
          headline="Consulting"
          text={`Fix, improve, or get insights on
					your website without adding headcount
					to your team. Put our expertise to work.`}
        />
      </AboutGrid>
    </main>
  </ConteinerPage>
);
export default About;
