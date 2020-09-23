import Head from "next/head"
//import styles from "../styles/Home.module.css"
import Link from "next/link"
import * as React from "react"

import {
  Div,
  EntirePage,
  Button,
  TopThirdBody,
  BodyDiv,
} from "../components/styled-components"

import {
  MushroomPicture,
  MushroomOverlay,
  MushroomTopFont,
  MushroomDiv,
  MushroomMiddleFont,
  MushroomBottomFont,
} from "../components/indexcss"

import {
  BigDGFont,
  SmallDGFont,
  MedMGFont,
  MedDGFont,
} from "../components/font"

import {
  PageHeader
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
        <PageHeader />

        {/*Body*/}

        <BodyDiv>
          <Div>
            <SmallDGFont>Check Out Gratefulness</SmallDGFont>
            <BigDGFont style={{ marginTop: "0px" }}>Start Free Today</BigDGFont>
            <Button>Sign Up</Button>
          </Div>

          <MushroomDiv>
            <MushroomOverlay>
              <MushroomPicture />
            </MushroomOverlay>
            <MushroomTopFont>I'm grateful for...</MushroomTopFont>
            <MushroomMiddleFont>
              the crackers I just ate.
              <br /> the water I just had.
              <br /> my friends, who makes me laugh.
              <br /> the opportunity to create this app.
              <br /> my #1 supporter and partner who has been patient with all
              my questions.
            </MushroomMiddleFont>
            <MushroomBottomFont>It's that simple.</MushroomBottomFont>
          </MushroomDiv>

          <TopThirdBody>
            {" "}
            <MedDGFont style={{ padding: "5px" }}>Check out </MedDGFont>
            <MedMGFont>
              <a style={{ textDecoration: "underline" }}>Grateful Features</a>
            </MedMGFont>
          </TopThirdBody>
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
