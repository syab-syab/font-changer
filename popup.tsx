import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"

export const localKey = {
  weight: "local-font-weight"
}

function IndexPopup() {
  const [weight, setWeight] = useState("normal")
  const [color, setColor] = useState("#000000")
  const [family, setFamily] = useState("serif")

  const setResetState = () => {
    setWeight("normal")
    setColor("#000000")
    setFamily("serif")
  }

  // https://developer.mozilla.org/ja/docs/Web/CSS/font
  // font: XX;で一括指定できるっぽい


  return (
    <div
      style={{
        width: "200px"
      }}>

        <div>
          {/* <label>
            文字の大きさ
          </label> */}
          {/* pxより%で指定した方が良い？ */}
          {/* XX倍とかで指定したい */}
          {/* font-size */}
        </div>

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
          {/* <label>
            文字の傾き
          </label> */}
          {/* font-style */}       
        </div>

        <div>
          {/* <label>
            行間
          </label> */}
          {/* line-heightで設定できる */}          
        </div>

        <div>
          <label>
            フォントの種類
          </label>
          <select value={family} onChange={(e) => setFamily(e.target.value)}>
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
          <button onClick={() => setResetState() }>
            適用
          </button>
        </div>
    </div>
  )
}

export default IndexPopup
