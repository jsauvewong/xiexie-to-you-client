import styled from "styled-components"
import * as React from "react"
import Link from "next/link"

import { Button } from "./styled-components"

export const Header = styled.section`
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  width: 100%;
  letter-spacing: 0.02em;
  height: 100px;
`
export const LeftNavBar = styled.h1`
  margin: 20px;
  justify-content: left;
  padding: 10px;
  color: #01bc7d;
  font-size: 35px;
`
export const RightNavBarTabs = styled.div`
  display: flex;
  justify-content: space-between | space-evenly;
  flex-wrap: nowrap;
  margin: 10px;
  flex-direction: row;
  align-items: baseline;
  padding: 20px;
`

export const RightNavBar = styled.h1`
  color: #224437;
  flex-shrink: 1;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
`
export function PageHeader() {
  return (
    <Header>
      <LeftNavBar>Gratefulness</LeftNavBar>
      <RightNavBarTabs>
        <RightNavBar>Sign Up</RightNavBar>
        <RightNavBar>FAQ</RightNavBar>
        <RightNavBar>Donate</RightNavBar>

        <Link href="/signUp">
          <Button style={{ marginLeft: "30px" }}>Login</Button>
        </Link>
      </RightNavBarTabs>
    </Header>
  )
}
