// import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"

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


  return (
    <div
      style={{
        width: "200px"
      }}>

        <div>
          <label>
            文字の太さ
          </label>
          {/* font-weight */}
          <select name="" id="" value={weight} onChange={(e) => setWeight(e.target.value)}>
            <option value="normal">普通</option>
            <option value="bold">濃く</option>
            <option value="lighter">薄く</option>
          </select>
        </div>

        <div>
          <label htmlFor="color">
            文字の色
          </label>
          {/* <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} /> */}
          {/* 色の種類をもっと増やす */}
          <select value={color} onChange={(e) => setColor(e.target.value)}>
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
          </select>
        </div>

        <div>
          <label>
            文字の間隔
          </label>
          <input type="number" value={spacing} onChange={(e) => setSpacing(Number(e.target.value))} />
          {/* letter-spacing */}
        </div>

        <div>
          <label>
            文字の傾き
          </label>
          <select value={inclination} onChange={(e) => setInclination(e.target.value)}>
            <option value="normal">変更なし</option>
            <option value="italic">傾ける</option>
          </select>
          {/* font-style */}
        </div>

        <div>
          <label>
            行間
          </label>
          <select value={lineHeight} onChange={(e) => setLineHeight(e.target.value)}>
            <option value="normal">変更なし</option>
            <option value="100%">100%</option>
            <option value="200%">200%</option>
            <option value="300%">300%</option>
            <option value="400%">400%</option>
            <option value="500%">500%</option>
          </select>
          {/* line-heightで設定できる */}
        </div>

        <div>
          <label>
            フォントの種類
          </label>
          <select value={family} onChange={(e) => setFamily(e.target.value)}>
            <option value="">変更なし</option>
            <option value="serif">serif</option>
            <option value="sans-serif">sans-serif</option>
            <option value="cursive">cursive</option>
            <option value="fantasy">fantasy</option>
            <option value="monospace">monospace</option>
          </select>
        </div>

        <div>
          <button
            onClick={() => setResetState()}
            disabled={changeToggle ? true : false}
          >
            適用
          </button>
          <button
            // onClick={() => setChangeToggle(false)}
            onClick={() => setReload()}
            disabled={changeToggle ? false: true}
          >
            リセット
          </button>
        </div>
    </div>
  )
}

export default IndexPopup
