// import styles from "./Button.module.css"

import styled from "styled-components"

// import img from "./public/small-mushroom.jpg"
//const lightgreen = #01BC7D;
//const darkgreen = #224437;
//const middlegreen = #3F7863;
//const white = #ffffff;
//const grey = #eeeeee;

//Button
//font-size: 18px;
//font-weight: 450;

export const EntirePage = styled.div`
  margin: 0;
  font-family: rubik;
  letter-spacing: 0.02em;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
//To center items
export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid pink;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Button = styled.button`
  color: #ffffff;
  text-align: center;
  background-color: #01bc7d;
  border-radius: 50px;
  font-size: 18px;
  font-family: rubik;
  border: none;
  width: 150px;
  height: 50px;
  text-transform: uppercase;
  font-weight: 450;
`
export const Body = styled.body`
  margin: 0px;
`

export const BodyDiv = styled.div`
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 450px;
  text-align: center;
  align-items: center;
  flex: 1;
  border: 2px solid pink;
  margin: 0px;
`

export const TopThirdBody = styled.div`
  font-size: 48px;
  text-align: left;
  color: #224437;
  align-self: center;
  display: flex;
  flex-wrap: nowrap;
`
//Sign Up Form

export const CenterBody = styled.section`
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid pink;
`
export const Form = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`
export const FormBody = styled.section`
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
`
export const InputDiv = styled.div`
  width: 175px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
`
export const Input = styled.input`
  background: #eeeeee;
  width: 175px;
  height: 25px;
  border: none;
  font-size: 15px;
  font-family: rubik;
`

