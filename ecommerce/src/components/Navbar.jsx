import React from 'react';
import styled from 'styled-components';

import MenuIcon from '@material-ui/icons//Menu';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';


const Container = styled.div`
  height: 60px;
  border-bottom: 0.5px solid lightgray;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const MobileMenuIcon = styled.div`
  cursor: pointer;
  margin-right: 18px;
  display: none;

  @media (max-width: 991.98px) {
    display: block;
  }
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-top: -4px;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  @media (max-width: 991.98px) {
    display: none;
  }
`

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const TitleLogo = styled.h2`
  font-size: 36px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  transition: 0.4s;
  &:hover {
    color: #ea398c;
  }
`


const Navbar = () => {
  return(
    <Container>
      <Wrapper>
        <Left>
          <MobileMenuIcon>
            <MenuIcon style={{ fontSize: "36px"}} />
          </MobileMenuIcon>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <TitleLogo>neos.</TitleLogo>
        </Center>
        <Right>

          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
