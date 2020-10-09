import Head from "next/head"
//import styles from "../styles/Home.module.css"
import Link from "next/link"
import * as React from "react"

import { EntirePage, BodyDiv } from "../components/styled-components"

import { PageHeader } from "../components/header"

import { PageFooter } from "../components/footer"

import {
  BackgroundOverlay,
  LoginPicture,
  LoginPictureDiv,
  LoginForm,
} from "../components/loginForm"

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

            <LoginForm />
          </LoginPictureDiv>
        </BodyDiv>

        {/*Footer*/}
        <PageFooter />
      </EntirePage>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
    </div>
  )
}
