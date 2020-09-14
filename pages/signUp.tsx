import Head from "next/head"
//import styles from "../styles/Home.module.css"
import Link from "next/link"
import * as React from "react"

import {
  Body,
  EntirePage,
  Button,
  TopThirdBody,
} from "../components/styled-components"

import {
  BigDGFont,
  SmallDGFont,
  MedMGFont,
  SmallDGNoBoldFont,
  SMGFont,
  LMGFont,
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
  LeftBottomFooter,
} from "../components/footer"

// export default function Buttons() {
//   function handleClick(e) {
//     console.log("I clicked the button")
//   }
function Mushroom() {
  return <img src="/small-mushroom.jpg" alt="small mushroom on moss" />
}

export default function Login() {
  return (
    <div>
      <EntirePage>
        {/*Header*/}

        <Header>
          <LeftNavBar>Gratefulness</LeftNavBar>
          <RightNavBarTabs>
            <RightNavBar>Login</RightNavBar>
            <RightNavBar>Donate</RightNavBar>
            <Button>Sign Up</Button>
          </RightNavBarTabs>
        </Header>

        {/*Body*/}

        <Body>
          <SmallDGFont>A Simple Gratefulness Tracker</SmallDGFont>
          <BigDGFont>Gratefulness' Features</BigDGFont>
          <SmallDGNoBoldFont>
            Simple journal tracking. Start tracking entries directly from your
            messages. Sign up today!
          </SmallDGNoBoldFont>
          <LMGFont>Sign Up</LMGFont>
          <SMGFont>Name:</SMGFont>
          <SMGFont>Phone Number:</SMGFont>
          <Button>Ready!</Button>
        </Body>

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

          {/* <LeftFooter>
            <AlignFooter>
              <TopFooter>Gratefulness</TopFooter>
            </AlignFooter>

            <MiddleFooter>What are you grateful for today?</MiddleFooter>
            <MiddleFooter> c Gratefulness Tracker</MiddleFooter>
          </LeftFooter>
          <RightFooter>
            <AlignFooter>
              <TopSmallFooter>More</TopSmallFooter>
            </AlignFooter>
            <MiddleLinkFooter>Linkedin</MiddleLinkFooter>
            <MiddleLinkFooter>Github</MiddleLinkFooter>
            <MiddleLinkFooter>About Us</MiddleLinkFooter>
            <MiddleLinkFooter>About the App</MiddleLinkFooter>
            <MiddleLinkFooter>Privacy Policy</MiddleLinkFooter>
          </RightFooter> */}
        </Footer>
      </EntirePage>
    </div>
  )
}
