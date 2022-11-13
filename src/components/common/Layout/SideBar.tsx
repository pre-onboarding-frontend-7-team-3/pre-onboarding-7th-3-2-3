import React, { ReactNode } from 'react'
import styled from 'styled-components'

const SideBar = () => {
  return (
    <Wrapper>
      <Logo>
        PREFACE
      </Logo>
      <NavList>
      <li>대시보드</li>
        <li>계좌 목록</li>
        <li>사용자</li>
        <li>로그아웃</li>
      </NavList>
    </Wrapper>
  )
}

export default SideBar
const Logo = styled.div`
  margin: 30px;
  font-size: xx-large;
  font-weight: 800;
`
const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100vh;
  background-color: ${props => props.theme.color.deepblue};
`

const NavList = styled.ul`
  list-style: none;
  width:inherit;
  font-size: larger;
  font-weight: 700;
  li{
    padding:20px 40px;
    width:inherit;
  }

  li:hover{
    background-color: ${props=> props.theme.color.skyblue};
  }
`