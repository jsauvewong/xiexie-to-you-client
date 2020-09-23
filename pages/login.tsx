import Head from "next/head"
//import styles from "../styles/Home.module.css"
import Link from "next/link"
import * as React from "react"

import {
  EntirePage,
  Button,
  LoginFormBody,
  LoginInputDiv,
  LoginInput,
  LoginButtonDiv,
  LoginCenterBody,
  LoginForm,
  BodyDiv,
  LoginBody,
} from "../components/styled-components"

import { LoginLWhiteFont, LoginMWhiteFont } from "../components/font"

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

import {
  // Background,
  BackgroundOverlay,
  LoginPicture,
  LoginPictureDiv,
  PictureDiv,
  LoginCenterDiv,
} from "../components/logincss"

// export default function Buttons() {
//   function handleClick(e) {
//     console.log("I clicked the button")
//   }
// function Mushroom() {
//   return <img src="/small-mushroom.jpg" alt="small mushroom on moss" />
// }

export default function Login() {
  return (
    <div>
      <EntirePage>
        {/*Header*/}

        <PageHeader />

        {/*Body*/}

        <BodyDiv>
          <LoginPictureDiv>
            <BackgroundOverlay>
              <LoginPicture />
            </BackgroundOverlay>

            <LoginBody>
              <LoginCenterDiv>
                <LoginLWhiteFont>Login</LoginLWhiteFont>
              </LoginCenterDiv>

              <LoginCenterBody>
                <LoginForm>
                  <LoginFormBody>
                    {" "}
                    <LoginInputDiv>
                      {" "}
                      <LoginMWhiteFont>Name:</LoginMWhiteFont>
                      <LoginInput defaultValue="" type="text" />
                    </LoginInputDiv>
                    <LoginInputDiv>
                      <LoginMWhiteFont>Verification Number:</LoginMWhiteFont>
                      <LoginInput defaultValue="" type="text" />
                    </LoginInputDiv>
                  </LoginFormBody>
                  <LoginButtonDiv>
                    <Button style={{ marginTop: "20px" }}>Ready!</Button>
                  </LoginButtonDiv>
                </LoginForm>
              </LoginCenterBody>
            </LoginBody>
          </LoginPictureDiv>
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
