import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`

const Button = styled.button`
  font-family: 'CaviarBold', sans-serif;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  background-color: #ea398c;
  color: #fff;
  border: 1px solid #ea398c;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`


const CategoryItem = ({ item }) => {
  return(
    <Container>
      <Image />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
