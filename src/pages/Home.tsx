import sokatsuPoster from "../assets/sokatsu_poster.png";
import prevButton from "../assets/button/previous.png";
import nextButton from "../assets/button/next.png";
import stopButton from "../assets/button/stop.png";
import shuffleButton from "../assets/button/shuffle.png";
import repeatButton from "../assets/button/repeat.png";
import styles from "./Home.module.scss";

import { useEffect, useRef, useState } from "react";
import { Gallery } from "../components/Gallery/Gallery";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export const Home = () => {
  const [clickCnt, setClickCnt] = useState<number>(0);
  const [isLocked, setIsLocked] = useState(false);
  const lockButton = (): void => {
    setIsLocked(true);
    setTimeout(() => {
      setIsLocked(false);
    }, 2000);
  };
  const prevButtonHandle = (): void => {
    if (clickCnt <= 0 || isLocked) return;
    setClickCnt(clickCnt - 1);
    lockButton();
  };
  const nextButtonHandle = (): void => {
    if (isLocked) return;
    setClickCnt(clickCnt + 1);
    lockButton();
    pauseNextAnimation();
  };
  /*アニメーション */
  const nextButtonAnimation = useRef<HTMLImageElement>(null);
  const { contextSafe } = useGSAP({ scope: nextButtonAnimation }); // GSAPのコンテキストを取得
  const animationRef = useRef<gsap.core.Tween | null>(null);
  useEffect(
    contextSafe(() => {
      const tmpAnim = gsap.to(nextButtonAnimation.current, {
        opacity: 0,
        duration: 0.5,
        scale: 1.6,
        repeat: -1,
      });
      animationRef.current = tmpAnim;
    }),
    []
  );
  const pauseNextAnimation = contextSafe(() => {
    if (animationRef.current) {
      animationRef.current.restart();
      animationRef.current.pause();
    }
  });
  return (
    <>
      <div className={styles.image_container}>
        <div className={styles.poster_wrapper}>
          <img className={styles.poster_main} src={sokatsuPoster} alt="" />

          <img
            className={styles.prev_button}
            src={prevButton}
            onClick={prevButtonHandle}
            alt=""
          />
          <img
            ref={nextButtonAnimation}
            className={styles.next_button_animation}
            src={nextButton}
            alt=""
          />
          <img
            className={styles.next_button}
            src={nextButton}
            onClick={nextButtonHandle}
            alt=""
          />
          <img className={styles.stop_button} src={stopButton} alt="" />
          <img className={styles.shuffle} src={shuffleButton} alt="" />
          <img className={styles.repeat} src={repeatButton} alt="" />
        </div>
        <div className={styles.back_gallery}>
          <Gallery x={clickCnt} imgs={["yokogao.png", "kokuban_poster.png"]} />
        </div>
        <div className={styles.poster_bg}></div>
      </div>
    </>
  );
};
