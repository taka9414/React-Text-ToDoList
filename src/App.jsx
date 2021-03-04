import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColofulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color="blue">文字が青くなりました。</ColorfulMessage>
      <ColorfulMessage color="red">文字が赤くなりました。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>さぁぁぁん↑↑↑</p>}
    </>
  );
};
