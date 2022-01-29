import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';


const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 0.5px solid lightgray;
  display: none;

  @media (max-width: 991.98px) {
    display: block;
  }
`

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`


const LowerSearchBar = () => {
  return(
    <Container>
      <Wrapper>
        <SearchContainer>
          <SearchIcon style={{ marginRight: "12px"}} />
          <Input placeholder="Search" />
        </SearchContainer>
      </Wrapper>
    </Container>
  );
}

export default LowerSearchBar;
