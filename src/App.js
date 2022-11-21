import React from "react";

import styled from "styled-components";
import profilePic from "./profile.png";

import StyledComponent from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  color: #444;
  border: 3px solid #1890ff;
  background: #1890ff;
  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 10px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  padding-top: 0;
  margin-top: 0;
`;

const Title = styled.h1`
  color: white;
  font-weight: 400;
  background: #1890ff;
  margin: 0;
  padding: 0;
`;

const Bio = styled.p`
  color: white;
  text-align: center;
`;

const App = () => (
  <Container>
    <Img src={profilePic} />
    <Title>Bob Bobson</Title>
    <Bio>I'm that Bob that you see all the time in your quests </Bio>
  </Container>
);

export default App;
