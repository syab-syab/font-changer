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

type Props = {
  changeToggle: boolean,
  reloadToggle: boolean,
  weight: string,
  color: string,

  spacing: number,

  inclination: string,
  lineHeight: string,
  family: string
}

const fontChange = () => {

  const [changeToggle, setChangeToggle] = useStorage(localKey.changeToggle)
  const [reloadToggle, setReloadToggle] = useStorage(localKey.reloadToggle)
  const [weight, setWeight] = useStorage(localKey.weight)
  const [color, setColor] = useStorage(localKey.color)

  const [spacing, setSpacing] = useStorage(localKey.spacing)

  const [inclination, setInclination] = useStorage(localKey.inclination)
  const [lineHeight, setLineHeight] = useStorage(localKey.lineHeight)
  const [family, setFamily] = useStorage(localKey.family)

  const resetStyleState = () => {
    setWeight("normal")
    setColor("")

    setSpacing(0)

    setInclination("normal")
    setLineHeight("normal")
    setFamily("")
    setReloadToggle(false)
  }

  function injectStyle(changeToggle: boolean, style: Props) {
    const styleElement = document.createElement("style");
    styleElement.id = "font-changer-syab-syab"
    if (changeToggle) {
      const css = `
      * {
        font-weight: ${style.weight} !important;
        color: ${style.color} !important;
        letter-spacing: ${style.spacing}px !important;
        font-style: ${style.inclination} !important;
        line-height: ${style.lineHeight} !important;
        font-family: ${style.family} !important;
      }
    `
      styleElement.textContent = css;
      document.head.appendChild(styleElement);
    } else {
      // 力業だから後で直せそうなら直す
      if (reloadToggle) {
        window.location.reload()
        resetStyleState()
      }
    }
  }

  useEffect(() => {
    injectStyle(changeToggle, {
      changeToggle,
      reloadToggle,
      weight,
      color,
      spacing,
      inclination,
      lineHeight,
      family
    })
    // if (!changeToggle) {
    //   window.location.reload()
    // }
  }, [
    changeToggle,
    changeToggle,
    reloadToggle,
    weight,
    color,
    spacing,
    inclination,
    lineHeight,
    family
  ])



  return (
    // <></>
    <div>
    </div>
  )
}

export default fontChange