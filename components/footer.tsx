import styled from "styled-components"
import Link from "next/link"

import * as React from "react"

export const Footer = styled.section`
  display: flex;
  justify-content: space-between| space-evenly;
  align-items: flex-start;
  background-color: #01bc7d;
  padding: 10px;
  color: #ffffff;
  flex-wrap: nowrap;
  font-family: rubik;
  align-items: baseline;
  letter-spacing: 0.02em;
  width: 100%;
`

export const LeftFooter = styled.div`
  display: flex;
  justify-content: space-between | flex-start;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 20px;
  flex-basis: 10%;
`

export const TopLeftFooter = styled.h1`
  font-size: 35px;
  text-transform: uppercase;
  align-self: flex-start;
`
export const TopRightFooter = styled.h2`
  font-size: 19px;
  text-transform: uppercase;
`
export const RightFooter = styled.div`
  display: flex;
  justify-content: space-between | flex-start;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 20px;
  padding-left: 50px;
  font-size: calc(-0.12vw + 1rem);
`
//for troubleshooting
export const RightBottomFooter = styled.div``
export const LeftBottomFooter = styled.div``

export const BottomLeftFont = styled.h3`
  font-family: rubik;
  font-weight: 400;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0.02em;
  font-size: calc(0vw + 1rem);
`

export const BottomLinksFooter = styled.h3`
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
  font-family: rubik;
`

export function PageFooter() {
  return (
    <Footer>
      <LeftFooter>
        <TopLeftFooter>Gratefulness</TopLeftFooter>
        <BottomLeftFont>What are you grateful for?</BottomLeftFont>
        <BottomLeftFont>© Gratefulness Tracker</BottomLeftFont>
      </LeftFooter>
      <RightFooter>
        <TopRightFooter>More</TopRightFooter>
        <RightBottomFooter>
          <BottomLinksFooter>
            <Link href="https://www.linkedin.com/in/jeanne-sauve-wong-9a9b6b132/">
              <a>LinkedIn</a>
            </Link>
          </BottomLinksFooter>
          <BottomLinksFooter>
            <Link href="https://github.com/jsauvewong">
              <a>GitHub</a>
            </Link>
          </BottomLinksFooter>
          <BottomLinksFooter>
            <Link href="https://www.jeanne-sauve.com/">
              <a>About Coder</a>
            </Link>
          </BottomLinksFooter>
        </RightBottomFooter>
      </RightFooter>
    </Footer>
  )
}
