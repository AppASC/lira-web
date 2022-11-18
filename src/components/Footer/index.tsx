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
        <Link href="https://www.instagram.com/liraecoparque/" target="_blank">
          <InstagramLogo className={styles.svg} />
        </Link>
        <Link href="https://pt-br.facebook.com/liraecoparque/" target="_blank">
          <FacebookLogo className={styles.svg} />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5586998273731&text=Ol%C3%A1%2C%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es."
          target="_blank"
        >
          <WhatsappLogo className={styles.svg} />
        </Link>
      </div>
      <h4 className={styles.description}>
        © Copyright 2022 Lira - Todos os direitos reservados.
      </h4>
    </div>
  );
}
