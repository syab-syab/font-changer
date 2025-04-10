// 出来ればバックグラウンドとかを使いたい
// コンテンツスクリプトは何となく使いたくない

// 読みづらいサイト
// https://fromkato.com/webdev/css/properties/font-family
// https://creative.eccom.jp/2020/

// フォントファミリー
// https://developer.mozilla.org/ja/docs/Web/CSS/font-family
// https://fromkato.com/webdev/css/properties/font-family
import { useStorage } from "@plasmohq/storage/hook"
import { localKey } from "popup"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect } from "react";

 
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
}



const fontChange = () => {

  const [changeToggle] = useStorage(localKey.changeToggle)
  const [relaodToggle, setReloadToggle] = useStorage(localKey.reloadToggle)
  const [weight] = useStorage(localKey.weight)
  const [color] = useStorage(localKey.color)
  const [style] = useStorage(localKey.style)
  const [lineHeight] = useStorage(localKey.lineHeight)
  const [family] = useStorage(localKey.family)

  const css = `
    * {
      font-weight: ${weight} !important;
      color: ${color} !important;
      font-style: ${style} !important;
      line-height: ${lineHeight} !important;
      font-family: ${family} !important;
    }
  `

  function injectStyle(changeToggle: boolean,css: string) {
    const styleElement = document.createElement("style");
    styleElement.id = "font-changer-syab-syab"
    if (changeToggle) {
      styleElement.textContent = css;
      document.head.appendChild(styleElement);
    } else {
      // 力業だから後で直せそうなら直す
      if (relaodToggle) {
        window.location.reload()
        setReloadToggle(false)
      }
    }
  }

  useEffect(() => {
    injectStyle(changeToggle, css)
    // if (!changeToggle) {
    //   window.location.reload()
    // }
  }, [changeToggle])



  return (
    // <></>
    <div>
    </div>
  )
}

export default fontChange