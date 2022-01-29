import React from 'react';
import styled from 'styled-components';

import Send from '@material-ui/icons/Send';



const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`

const Desc = styled.div`
  font-size: 24px;
  font-family: 'CaviarBold', sans-serif;
  margin-bottom: 20px;
  text-align: center;
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 0px 16px;
  
  &:focus {
      outline: none;
  }
`

const Button = styled.button`
  cursor: pointer;
  padding: 8px 10px;
  font-size: 20px;
  background-color: #ea398c;
  color: #fff;
  border: 1px solid #ea398c;
  transition: 0.3s;
`


const Newsletter = () => {
  return(
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        Subscribe to our newsletter and <br />
        keep in touch with our latest products
      </Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send style={{ marginBottom: "-6px"}} />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
