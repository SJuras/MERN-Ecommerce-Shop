import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data.js';


import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px" };
  right: ${props => props.direction === "right" && "10px" };
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: 0.3s;
  &:hover {
    background-color: #ea398c;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
  width: auto;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
  font-family: 'CaviarBold', sans-serif;
`

const Desc = styled.p`
  margin: 6px 0px 6px;
  font-size: 20px;
  font-family: 'CaviarBold', sans-serif;
`

const Desc2 = styled.p`
  margin: 0px 0px 30px;
  font-size: 20px;
  font-family: 'CaviarBold', sans-serif;
`

const Button = styled.button`
  font-family: 'CaviarBold', sans-serif;
  cursor: pointer;
  padding: 16px;
  font-size: 20px;
  background-color: #ea398c;
  color: #fff;
  border: 1px solid #ea398c;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return(
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide>
            <ImgContainer>
              <Image src={item.image} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Desc2>{item.desc2}</Desc2>
              <Button>{item.buttonText}</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
