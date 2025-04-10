import sokatsuPoster from "../assets/sokatsu_poster.png";
import prevButton from "../assets/button/previous.png";
import nextButton from "../assets/button/next.png";
import stopButton from "../assets/button/stop.png";
import shuffleButton from "../assets/button/shuffle.png";
import repeatButton from "../assets/button/repeat.png";
import styles from "./Home.module.scss";
import design_category from "../assets/poster_design/category.png";
import design_code from "../assets/poster_design/design_code.png";
import design_number from "../assets/poster_design/number.png";
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
  const logosRef = useRef<HTMLDivElement>(null); // コンテナの参照
  useEffect(
    contextSafe(() => {
      const tmpAnim = gsap.to(nextButtonAnimation.current, {
        opacity: 0,
        duration: 0.5,
        scale: 1.6,
        repeat: -1,
      });
      animationRef.current = tmpAnim;
      gsap.from(logosRef.current, {
        opacity: 0, // 初期状態で透明
        duration: 5, // アニメーションの時間
        ease: "power3.in",
      });
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
          <div ref={logosRef}>
            <img className={styles.design_code} src={design_code} alt="" />
            <img className={styles.design_number} src={design_number} alt="" />
            <img
              className={styles.design_category}
              src={design_category}
              alt=""
            />
          </div>

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
      <section className={styles.sokatsu_overview}>
        <hr />
        <h1>Overview</h1>
        <div>
          <h3>Activities</h3>
          <p>
            イラスト、写真、CG、模型、 <br />
            ゲーム、アニメ、写真、音楽、デザイン
          </p>
        </div>
        <div>
          <h3>Schedule</h3>
          <p>水曜日 18:00~20:00</p>
          <p>金曜日 18:00~20:00</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>70号館 7074号室</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Gmail: nu.sousaku.e@gmail.com</p>
          <a href="https://x.com/nu_sousaku_e">
            <p>Twitter: @nu_sousaku_e</p>
          </a>
        </div>
        <div>
          <h3>Comment</h3>
          <p>みんなでものづくりをしています！</p>
          <p>
            書いてあるもの以外の創作も大歓迎です。学年問わず気軽に見学しにきてね。
          </p>
          <p>イラストを描く人が多いです。</p>
        </div>
        <div className={styles.designed_by}>
          <p>Designed by taco</p>
        </div>
      </section>
    </>
  );
};
