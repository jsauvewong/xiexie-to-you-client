import styled from "styled-components"

export const MushroomDiv = styled.div`
  color: #ffffff;
  align-self: center;
  object-fit: cover;
  text-transform: none;
  font-weight: normal;
  font-size: 15px;
  position: relative;
`
export const MushroomTopFont = styled.h2`
  position: absolute;
  top: 30px;
  left: 50px;
  letter-spacing: 0.02em;
`
export const MushroomMiddleFont = styled.h2`
  position: absolute;
  top: 80px;
  left: 80px;
  letter-spacing: 0.02em;
`
export const MushroomBottomFont = styled.h2`
  position: absolute;
  right: 65px;
  bottom: 30px;
  letter-spacing: 0.02em;
`

export const MushroomPicture = styled.div`
  background-image: url("/small-mushroom.jpg");
  width: 800px;
  height: 500px;
  background-size: cover;
  opacity: 0.4;
`
export const MushroomOverlay = styled.div`
  border-radius: 25px;
  width: 800px;
  height: 500px;
  background: black;
  background-size: cover;
  align-self: center;
  overflow: hidden;
  background: #90de8b;
  background: -webkit-linear-gradient(
    rgba(144, 222, 139, 1),
    rgba(1, 188, 125, 1)
  );
  background: linear-gradient(rgba(144, 222, 139, 1), rgba(1, 188, 125, 1));
`
