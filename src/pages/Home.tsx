import sokatsuPoster from "../assets/sokatsu_poster.png";
import prevButton from "../assets/button/previous.png";
import nextButton from "../assets/button/next.png";
import stopButton from "../assets/button/stop.png";
import shuffleButton from "../assets/button/shuffle.png";
import repeatButton from "../assets/button/repeat.png";
import styles from "./Home.module.scss";

import { useState } from "react";
import { Gallery } from "../components/Gallery/Gallery";
export const Home = () => {
  const [clickCnt, setClickCnt] = useState<number>(0);
  const prevButtonHandle = (): void => {
    if (clickCnt <= 0) return;
    setClickCnt(clickCnt - 1);
  };
  const nextButtonHandle = (): void => {
    setClickCnt(clickCnt + 1);
  };
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
