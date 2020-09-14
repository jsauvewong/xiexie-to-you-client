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
  width: 100%;
  border: 2px solid green;
  font-family: rubik;
  letter-spacing: 0.02em;
`

export const Button = styled.button`
  color: #ffffff;
  text-align: center;
  background-color: #01bc7d;
  border-radius: 50px;
  font-size: 18px;
  margin: 20px;
  font-family: rubik;
  border: none;
  width: 150px;
  height: 50px;
  text-transform: uppercase;
  font-weight: 450;
`
export const Body = styled.section`
  display: flex;
  flex-shrink: 1;
  text-transform: uppercase;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid pink;
`

export const TopThirdBody = styled.div`
  margin: 50px;
  font-size: 48px;
  text-align: left;
  color: #224437;
  align-self: center;
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid pink;
`
