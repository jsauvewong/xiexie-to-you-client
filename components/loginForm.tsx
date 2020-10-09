import styled from "styled-components"
import * as React from "react"

import { Button } from "../components/styled-components"
import { LoginLWhiteFont, LoginMWhiteFont } from "../components/font"

//Picture
export const LoginPictureDiv = styled.div`
  color: #ffffff;
  object-fit: cover;
  text-transform: none;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 950px;
  width: 950px;
  text-align: center;
`

export const LoginPicture = styled.div`
  background-image: url("/green-trees.jpg");
  width: 750px;
  height: 750px;
  background-size: cover;
  opacity: 0.8;
  text-align: center;
  border-radius: 20px;
  align-self: center;
  margin: auto;
`
export const BackgroundOverlay = styled.div`
  border-radius: 20px;
  width: 950px;
  height: 950px;
  background: #3f7863;
  background-size: cover;
  align-self: center;
  overflow: hidden;
  display: flex;
`
export const LoginBody = styled.section`
  display: flex;
  height: 600px;
  width: 350px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

//Login Form
export const LoginCenterBody = styled.section`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
`
export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`
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
  width: 300px;
  height: 27px;
  border: none;
  font-size: 15px;
  font-family: rubik;
`
export const LoginButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`
export const LoginCenterDiv = styled.div``
export const LoginFormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`

export function LoginForm() {
  return (
    <LoginBody>
      <LoginCenterDiv>
        <LoginLWhiteFont>Login</LoginLWhiteFont>
      </LoginCenterDiv>

      <LoginCenterBody>
        <LoginSection>
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
        </LoginSection>
      </LoginCenterBody>
    </LoginBody>
  )
}
