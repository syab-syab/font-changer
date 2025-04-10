// 出来ればバックグラウンドとかを使いたい
// コンテンツスクリプトは何となく使いたくない

// 読みづらいサイト
// https://fromkato.com/webdev/css/properties/font-family
// https://creative.eccom.jp/2020/

// フォントファミリー
// https://developer.mozilla.org/ja/docs/Web/CSS/font-family
// https://fromkato.com/webdev/css/properties/font-family
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import { localKey } from "popup"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
}

type Props = {
  changeVal: boolean,
  weight: string,
  color: string,
  family: string
}

const fontChange = () => {





  return (
    // <></>
    <div>
      {localKey.weight}
    </div>
  )
}

export default fontChange