import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"

export const localKey = {
  changeToggle: "local-font-change-toggle",
  reloadToggle: "local-reload-toggle",
  weight: "local-font-weight",
  color: "local-font-color",
  style: "local-font-style",
  lineHeight: "local-line-height",
  family: "local-font-family",
}

// [ToDo]
// 適用がtrue(押された状態)になっているなら
// オプションを変更するとリアルタイムに反映させる感じにする

function IndexPopup() {
  // 選択はオプションページでやらせた方が良いかも
  const [changeToggle, setChangeToggle] = useStorage(localKey.changeToggle, false)
  const [relaodToggle, setReloadToggle] = useStorage(localKey.reloadToggle, false)
  const [weight, setWeight] = useStorage(localKey.weight, "normal")
  const [color, setColor] = useStorage(localKey.color, "#000000")
  const [style, setStyle] = useStorage(localKey.style, "normal")
  const [lineHeight, setLineHeight] = useStorage(localKey.lineHeight, "normal")
  const [family, setFamily] = useStorage(localKey.family, "")


  const setResetState = () => {
    // setWeight("normal")
    // setColor("#000000")
    // setStyle()
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
          <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />     
        </div>

        <div>
          {/* <label>
            文字の間隔
          </label> */}
          {/* letter-spacing */}
        </div>

        <div>
          <label>
            文字の傾き
          </label>
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
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
          {/* <label>
            背景色
          </label> */}
          {/* 必要無いかも */}          
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
