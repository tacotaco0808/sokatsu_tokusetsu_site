import sokatsuPoster from "../assets/sokatsu_poster.png";
import previousButton from "../assets/button/previous.png";
import nextButton from "../assets/button/next.png";
import stopButton from "../assets/button/stop.png";
import shuffleButton from "../assets/button/shuffle.png";
import repeatButton from "../assets/button/repeat.png";
import styles from "./Home.module.scss";
export const Home = () => {
  const prevButton = () => {
    console.log("prev button clicked");
  };
  return (
    <div className={styles.image_container}>
      <img className={styles.poster_main} src={sokatsuPoster} alt="" />
      <img className={styles.prev_button} src={previousButton} alt="" />
      <img
        className={styles.next_button}
        src={nextButton}
        onClick={prevButton}
        alt=""
      />
      <img className={styles.stop_button} src={stopButton} alt="" />
      <img className={styles.shuffle} src={shuffleButton} alt="" />
      <img className={styles.repeat} src={repeatButton} alt="" />
    </div>
  );
};
