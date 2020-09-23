import styled from "styled-components"

export const MushroomDiv = styled.div`
  color: #ffffff;
  align-self: center;
  object-fit: cover;
  text-transform: none;
  font-weight: normal;
  font-size: 14px;
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align: items;
`

export const MushroomTopFont = styled.h2`
  position: absolute;
  top: 30px;
  left: 60px;
  letter-spacing: 0.02em;
  font-weight: 500;
`
export const MushroomMiddleFont = styled.h2`
  position: absolute;
  top: 140px;
  left: 200px;
  letter-spacing: 0.02em;
  font-weight: 500;
  width: 700px;
`
export const MushroomBottomFont = styled.h2`
  position: absolute;
  right: 65px;
  bottom: 30px;
  letter-spacing: 0.02em;
  font-weight: 500;
`

export const MushroomPicture = styled.div`
  background-image: url("/small-mushroom.jpg");
  width: 1100px;
  height: 600px;
  background-size: cover;
  opacity: 0.4;
`
export const MushroomOverlay = styled.div`
  border-radius: 25px;
  width: 1100px;
  height: 600px;
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
