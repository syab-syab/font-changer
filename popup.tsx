// import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import Header from "~components/header"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 20px;
  background: rgb(217, 217, 217);
`

const FormWrapper = styled.div`
  margin-bottom: 10px;
`

const Label = styled.label`
  font-size: 20px;
`

const Select = styled.select`
  font-size: 20px;
  width: 100%;
`

const Input = styled.input`
  font-size: 20px;
  width: 100%;
`

const ApplicableBtn = styled.button`
  width: 50%;
  font-size: 20px;
`

const ResetBtn = styled.button`
  width: 50%;
  font-size: 20px;
`

const Warning = styled.span`
  color: red;
  font-weight: bold;
`

export const localKey = {
  changeToggle: "local-font-change-toggle",
  reloadToggle: "local-reload-toggle",
  weight: "local-font-weight",
  color: "local-font-color",
  spacing: "local-font-spacing",
  inclination: "local-font-inclination",
  lineHeight: "local-line-height",
  family: "local-font-family",
}


// [ToDo]
// 開いてるタブすべてにスタイル変更が適用されるので
// 一つのタブだけに適用させたい

function IndexPopup() {
  // 選択はオプションページでやらせた方が良いかも
  const [changeToggle, setChangeToggle] = useStorage(localKey.changeToggle, false)
  const [reloadToggle, setReloadToggle] = useStorage(localKey.reloadToggle, false)
  const [weight, setWeight] = useStorage(localKey.weight, "normal")
  const [color, setColor] = useStorage(localKey.color, "")
  const [spacing, setSpacing] = useStorage(localKey.spacing, 0)
  const [inclination, setInclination] = useStorage(localKey.inclination, "normal")
  const [lineHeight, setLineHeight] = useStorage(localKey.lineHeight, "normal")
  const [family, setFamily] = useStorage(localKey.family, "")

  const setResetState = () => {
    // setWeight("normal")
    // setColor("#000000")
    // setinclination("normal")
    // setFamily("")
    setChangeToggle(true)
  }

  const setReload = () => {
    setChangeToggle(false)
    setReloadToggle(true)
  }

  // https://developer.mozilla.org/ja/docs/Web/CSS/font
  // font: XX;で一括指定できるっぽい

  // font-sizeは20px
  // 背景色は
  // #fffe71
  // #bc1823
  // を使う

  return (
    <div
      style={{
        width: "340px",
    }}>
      <Header />
        <Wrapper>
          <FormWrapper>
            <Label htmlFor="weight">
              文字の太さ
            </Label>
            <br />
            {/* font-weight */}
            <Select name="" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}>
              <option value="normal">普通</option>
              <option value="bold">濃く</option>
              <option value="lighter">薄く</option>
            </Select>
          </FormWrapper>

          <FormWrapper>
            <Label htmlFor="color">
              文字の色
            </Label>
            <br />
            {/* <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} /> */}
            {/* 色の種類をもっと増やす */}
            <Select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="">変更なし</option>
              <option value="black">黒</option>
              <option value="white">白</option>
              <option value="red">赤</option>
              <option value="blue">青</option>
              <option value="green">緑</option>
              <option value="yellow">黄色</option>
              <option value="pink">ピンク</option>
              <option value="gray">灰色</option>
              <option value="purple">紫</option>
            </Select>
          </FormWrapper>

          <FormWrapper>
            <Label htmlFor="spacing">
              文字の間隔
            </Label>
            <br />
            <Input type="number" id="spacing" value={spacing} onChange={(e) => setSpacing(Number(e.target.value))} />
            {/* letter-spacing */}
          </FormWrapper>

          <FormWrapper>
            <Label htmlFor="inclination">
              文字の傾き
            </Label>
            <br />
            <Select value={inclination} id="inclination" onChange={(e) => setInclination(e.target.value)}>
              <option value="normal">変更なし</option>
              <option value="italic">傾ける</option>
            </Select>
            {/* font-style */}
          </FormWrapper>

          <FormWrapper>
            <Label htmlFor="lineHeight">
              行間
            </Label>
            <br />
            <Select value={lineHeight} id="lineHeight" onChange={(e) => setLineHeight(e.target.value)}>
              <option value="normal">変更なし</option>
              <option value="100%">100%</option>
              <option value="200%">200%</option>
              <option value="300%">300%</option>
              <option value="400%">400%</option>
              <option value="500%">500%</option>
            </Select>
            {/* line-heightで設定できる */}
          </FormWrapper>

          <FormWrapper>
            <Label htmlFor="family">
              フォントの種類
            </Label>
            <br />
            <Select value={family} id="family" onChange={(e) => setFamily(e.target.value)}>
              <option value="">変更なし</option>
              <option value="serif">serif</option>
              <option value="sans-serif">sans-serif</option>
              <option value="cursive">cursive</option>
              <option value="fantasy">fantasy</option>
              <option value="monospace">monospace</option>
            </Select>
          </FormWrapper>

          <div>
            <ApplicableBtn
              onClick={() => setResetState()}
              disabled={changeToggle ? true : false}
            >
              適用
            </ApplicableBtn>
            <ResetBtn
              // onClick={() => setChangeToggle(false)}
              onClick={() => setReload()}
              disabled={changeToggle ? false: true}
            >
              リセット
            </ResetBtn>
          </div>
          <Warning>
          現在の仕様では、<br />リセットボタンを押すと開いているタブやウィンドウをまとめてリロードしてしまうので<br />ご注意ください。
          </Warning>
        </Wrapper>
    </div>
  )
}

export default IndexPopup
