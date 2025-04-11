import styled from "styled-components"
import pwsImage from "data-base64:~assets/icon.png"

// 背景色は
// #fffe71
// #bc1823

export const Wrapper = styled.div`
  background: #bc1823;
  color: black;
`

export const TitleWrapper = styled.div`
  & {
    padding: 20px 0 20px;
    width: 50%;
    padding: 5px;
    background-color: #fffe71;
    margin: 0 auto;
    position: relative;
    text-align: center;
  }
  &:after {
    position: absolute;
    content: '';
    border-top: 20px solid #fffe71;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`

// floatはやめた方がいいかも
export const Image = styled.img`
  width: 30px;
  height: 30px;
  float: left;
`

export const Title = styled.h1`
  margin: 0px 0 0;
  font-size: 20px;
  letter-spacing: 0px;
  font-weight: 500;
`



const Header = () => {
  return (
    <Wrapper>
      <TitleWrapper>
          <Image src={pwsImage} alt="" />
        <Title>
          Font-Changer
        </Title>
      </TitleWrapper>
    </Wrapper>
  )
}

export default Header