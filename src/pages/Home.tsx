import sokatsuPoster from "../assets/sokatsu_poster.png";
import styles from "./Home.module.scss";
export const Home = () => {
  return (
    <div className={styles.container}>
      <img src={sokatsuPoster} alt="" />
    </div>
  );
};
