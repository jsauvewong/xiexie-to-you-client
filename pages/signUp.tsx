import Head from "next/head"
//import styles from "../styles/Home.module.css"
import Link from "next/link"
import * as React from "react"

import { EntirePage, Button, BodyDiv } from "../components/styled-components"

import { PageHeader } from "../components/header"

import { PageFooter } from "../components/footer"
import { SigningUp } from "../components/signUpForm"

// import { SignUpForm } from "../components/signUpForm"

import Layout from "../components/layout"

export default function SignUp() {
  return (
    <div>
      <EntirePage>
        {/*Header*/}
        <PageHeader />

        {/*Body*/}
        <SigningUp />

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
