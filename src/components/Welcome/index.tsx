import Image from "next/image";
import styles from "./styles.module.css";

import ImageWelcome from "../../assets/welcome.png";

export function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        <h1 className={styles.title}>Bem vindo</h1>
        <p className={styles.description}>
          Lira Eco Parque, um lugar ecológico para quem deseja fugir da cidade e
          descansar no conforto da natureza.
        </p>
      </div>
      <Image src={ImageWelcome} alt="Imagem" className={styles.image} />
    </div>
  );
}
