import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import styles from "./styles.module.css";

import Logo from "../../assets/eco.png";

export function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.borderText} href="#">
        <h1 className={styles.title}>Família Lira</h1>
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.navItem} href="#park" scroll={false}>
          Parque
        </Link>
        <Link className={styles.navItem} href="#">
          Cachaça
        </Link>
        <Link className={styles.navItem} href="#">
          Pousada
        </Link>
        <Link className={styles.navItem} href="#restaurant" scroll={false}>
          Gastronomia
        </Link>
        <Link className={styles.navItem} href="#">
          Contato
        </Link>
      </nav>
    </div>
  );
}
