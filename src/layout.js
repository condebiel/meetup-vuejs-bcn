import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Footer = styled.footer`
  font-size: 14px;
  color: white;
  padding: 1rem 100px;
  text-align: right;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #f5a623 0%, #e6007d 100%);
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <h2>@CondeBiel</h2>
      <h2>@HolaluzEng</h2>
    </Footer>
  </Fragment>
)

export default Layout
