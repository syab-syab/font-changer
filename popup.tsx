import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")


  // https://developer.mozilla.org/ja/docs/Web/CSS/font
  // font: XX;で一括指定できるっぽい

  return (
    <div
      style={{
        width: "200px"
      }}>
        <h2>
          文字の大きさ
        </h2>
        {/* pxで指定 */}
        {/* font-size */}
        <h2>
          文字の太さ
        </h2>
        {/* boldとかnormalで指定 */}
        {/* font-weight */}
        <h2>
          文字の色
        </h2>
        <input type="color" name="" id="" />
        {/* inputで指定 */}
        {/* color */}
        <h2>
          文字の間隔
        </h2>
        {/* letter-spacingを使う */}
        {/* pxで指定 */}
        <h2>
          文字の横幅
        </h2>
        {/* font-stretchで指定できるっぽいけど */}
        {/* 必要無いかも */}
        <h2>
          文字の傾き
        </h2>
        {/* font-styleで斜体とかしいて言できるっぽい */}
        {/* 必要無いかも */}
        <h2>
          下線
        </h2>
        {/* 有りか無しかだけ聞く */}
        {/* border */}
        <h2>
          フォントの種類
        </h2>
        {/* セレクトボックスで聞く */}
        <h2>
          背景色
        </h2>
        {/* 必要無いかも */}
    </div>
  )
}

export default IndexPopup
