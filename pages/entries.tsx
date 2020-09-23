import * as React from "react"

import { EntirePage, Button, BodyDiv } from "../components/styled-components"

import { EntryBoxOverlay } from "../components/entriescss"

import {
  BigDGFont,
  SmallDGFont,
  MedMGFont,
  SmallDGNoBoldFont,
  LMGFont,
  FormSMGFont,
  FormMMGFont,
  LoginMWhiteFont,
  LoginSWhiteFont,
} from "../components/font"

import {
  Header,
  LeftNavBar,
  RightNavBar,
  RightNavBarTabs,
} from "../components/header"

import {
  Footer,
  LeftFooter,
  TopLeftFooter,
  TopRightFooter,
  RightFooter,
  BottomLeftFont,
  RightBottomFooter,
  BottomLinksFooter,
} from "../components/footer"

import {
  // Background,
  CenterParagraph,
  BackgroundOverlay,
} from "../components/logincss"

export default function Login() {
  return (
    <div>
      <EntirePage>
        {/*Header*/}

        <Header>
          <LeftNavBar>Gratefulness</LeftNavBar>
          <RightNavBarTabs>
            <RightNavBar>Sign Up</RightNavBar>
            <RightNavBar>FAQ</RightNavBar>
            <RightNavBar>Donate</RightNavBar>
            <Button style={{ marginLeft: "30px" }}>Login</Button>
          </RightNavBarTabs>
        </Header>

        {/*Body*/}

        <BodyDiv>
          Here's what you've been grateful for the past! I had crackers Entry on
          Sunday August 09, 2020 at 12:52AM I slept in! Entry on Sunday August
          09, 2020 at 12:52AM To add entries, text*********
        </BodyDiv>

        <BodyDiv>
          <EntryBoxOverlay />
        </BodyDiv>
        {/*Footer*/}

        <Footer>
          <LeftFooter>
            <TopLeftFooter>Gratefulness</TopLeftFooter>

            <BottomLeftFont>What are you grateful for?</BottomLeftFont>
            <BottomLeftFont>© Gratefulness Tracker</BottomLeftFont>
          </LeftFooter>
          <RightFooter>
            <TopRightFooter>More</TopRightFooter>
            <RightBottomFooter>
              <BottomLinksFooter>LinkedIn</BottomLinksFooter>
              <BottomLinksFooter>GitHub</BottomLinksFooter>
              <BottomLinksFooter>About Us</BottomLinksFooter>
              <BottomLinksFooter>Privacy Policy</BottomLinksFooter>
            </RightBottomFooter>
          </RightFooter>
        </Footer>
      </EntirePage>
    </div>
  )
}
