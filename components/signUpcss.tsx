import styled from "styled-components"

export const SignUpPicture = styled.div`
  background-image: url("/plants.jpg");
  width: 475px;
  height: 950px;
  background-size: cover;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
`

export const SignUpOverlay = styled.div`
  border-radius: 20px;
  width: 950px;
  height: 950px;
  background: #01bc7d;
  background-size: cover;
  align-self: center;
  overflow: hidden;
  display: flex;
`
export const SignUpBodyDiv = styled.div`
  display: flex;
  text-transform: uppercase;
  flex-direction: row;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 450px;
  text-align: center;
  align-items: center;
  flex: 1;
  margin: 0px;
`

export const SignUpPictureDiv = styled.div`
  color: #ffffff;
  object-fit: cover;
  text-transform: none;
  font-weight: normal;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 950px;
  width: 950px;
  flex-direction: row;
`
export const SignUpBody = styled.section`
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
export const SignUpDiv = styled.div`
  position: absolute;
  width: 475px;
  height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const CreateAccount = styled.div`
  display: flex;
  position: absolute;
  width: 475px;
  height: 950px;
  flex-direction: column-reverse;
  align-items: flex-end;
  text-align: right;
  margin-bottom: 20px;
`
