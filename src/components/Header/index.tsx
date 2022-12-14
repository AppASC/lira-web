import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export function Header() {
  return (
    <div className={styles.container}>
      <Link href="#" className={styles.title}>
        Família Lira
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
