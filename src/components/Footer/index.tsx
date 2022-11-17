import styles from "./styles.module.css";
import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  WhatsappLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Queremos nos conectar a você</h1>
      <div className={styles.networkContainer}>
        <Link href="#">
          <InstagramLogo className={styles.svg} />
        </Link>
        <Link href="#">
          <FacebookLogo className={styles.svg} />
        </Link>
        <Link href="#">
          <YoutubeLogo className={styles.svg} />
        </Link>
        <Link href="#">
          <WhatsappLogo className={styles.svg} />
        </Link>
      </div>
      <h4 className={styles.description}>
        © Copyright 2022 Lira - Todos os direitos reservados.
      </h4>
    </div>
  );
}
