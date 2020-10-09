import styled from "styled-components"
import React, { useState, useEffect, useCallback } from "react"
import { Router, useRouter } from "next/router"

import {
  LoginLWhiteFont,
  LoginMWhiteFont,
  SmallDGNoBoldFont,
} from "../components/font"
import { Input } from "./styled-components"
import Axios from "axios"

//Login Form

export const LoginFormBody = styled.section`
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
`
export const LoginInputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
`
export const LoginInput = styled.input`
  background: #eeeeee;

  height: 27px;
  border: none;
  font-size: 15px;
  font-family: rubik;
  color: black;
`
export const LoginButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const LoginFormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`

export const SignUpButton = styled.button`
  color: #01bc7d;
  text-align: center;
  background-color: #ffffff;
  border-radius: 50px;
  font-size: 18px;
  font-family: rubik;
  border: none;
  width: 150px;
  height: 50px;
  text-transform: uppercase;
  font-weight: 450;
`
export const Page = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
`
export const Background = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 850px;
  height: 700px;
  background: #01bc7d;
  margin-bottom: 100px;
  margin-top: 100px;
  border-radius: 20px;
`
export const Picture = styled.div`
  display: flex;
  background-image: url("/plants.jpg");
  width: 50%;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  height: 100%;
  background-size: cover;
`
export const RightDiv = styled.section`
  display: flex;
  justify-content: center;
  width: 50%;
`

export const SignUpBody = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`
export const LoginCenterBody = styled.section`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
`
export const LoginLabel = styled.div``

//different functions

function Login() {
  return <LoginLWhiteFont>Login</LoginLWhiteFont>
}

function SignUp() {
  return <LoginLWhiteFont>Sign Up</LoginLWhiteFont>
}

function VerificationNumber() {
  const [verificationNumber, setVerificationNumber] = useState()

  const handleVerificationChange = (e) => {
    setVerificationNumber(e.target.value)
  }
  return (
    <LoginInputDiv>
      <LoginMWhiteFont>Verification Number:</LoginMWhiteFont>
      <LoginInput
        type="text"
        name="verification"
        onChange={handleVerificationChange}
      />
    </LoginInputDiv>
  )
}

// const router = useRouter()
//   const handleSubmit = useCallback((e) => {
//     console.log("handleSubmit")
//     e.preventDefault()
//     fetch("/signUp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         /*Form Data */
//       }),
//     }).then((res) => {
//       if (res.ok) router.push("/entries")
//     })
//   }, [])

//   useEffect(() => {
//     router.prefetch("/entries")
//   }, [])

enum Stage {
  PhoneNumberStage,
  VerificationStage,
}

const requestVerification = async (phoneNumber: string) => {
  await Axios.post("http://localhost:4000/auth/requestVerification", {
    phoneNumber: phoneNumber,
  })
}

const verify = async (phoneNumber: string, code: string) => {
  await Axios.post("http://localhost:4000/auth/verify", {
    phoneNumber: phoneNumber,
    code: code,
  })
}

export function SigningUp() {
  const [currentStage, setCurrentStage] = useState(Stage.PhoneNumberStage)
  const [phoneNumber, setPhoneNumber] = useState()

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleClick = () => {
    
  }

  return (
    // Page Div
    <Page name="actual page">
      <Background name="background green div">
        <Picture name="picture" />

        <RightDiv name="right">
          <SignUpBody name="signUpBody">
            {/* Login */}
            <LoginLabel name="loginLabel">
              <Login />
            </LoginLabel>

            <LoginCenterBody name="loginCenterBody">
              <LoginFormSection name="loginFormSection">
                {/* <LoginFormSection onSubmit={handleSubmit}> */}
                <LoginFormBody name="LoginFormBody">
                  {" "}
                  <LoginInputDiv>
                    <LoginMWhiteFont>Phone Number:</LoginMWhiteFont>
                    <LoginInput
                      type="text"
                      name="phoneNumber"
                      onChange={handlePhoneChange}
                    />
                  </LoginInputDiv>
                </LoginFormBody>

                {/* Button */}
                <LoginButtonDiv name="LoginButtonDiv">
                  <SignUpButton
                    name="SignUpButton"
                    style={{ marginTop: "20px" }}
                    type="submit"
                    onClick={handleClick}
                  >
                    Ready!
                  </SignUpButton>
                </LoginButtonDiv>
              </LoginFormSection>
            </LoginCenterBody>
          </SignUpBody>
        </RightDiv>
      </Background>
    </Page>
  )
}
