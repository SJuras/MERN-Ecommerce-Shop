import React from 'react';
import styled from 'styled-components';

import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Pinterest from '@material-ui/icons/Pinterest';


const Container = styled.div`
  display: flex;

`

const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h2`
  font-size: 30px;
`

const Desc = styled.p`
  font-size: 18px;
  font-family: 'CaviarBold', sans-serif;
  margin: 10px 0px 20px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ea398c;
  }
`


const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 10px;
`

const List = styled.ul`
  list-style-type: none;
`

const ListItem = styled.li`
  font-family: 'CaviarBold', sans-serif;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #ea398c;
  }
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`


const Footer = () => {
  return(
    <Container>
      <Left>
        <Logo>neos.</Logo>
        <Desc>
          Sports wear of the future
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms of Service</ListItem>
          <ListItem>Disclaimer</ListItem>
        </List>
      </Center>
      <Right>

      </Right>
    </Container>
  );
}

export default Footer;
