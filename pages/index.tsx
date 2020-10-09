import Head from "next/head"

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

import { PageHeader } from "../components/header"

import { PageFooter } from "../components/footer"

export default function HomePage() {
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

            <Link href="/signUp">
              <Button>Sign Up</Button>
            </Link>
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
