import Image from "next/image";
import styles from "./styles.module.css";

import ImageWelcome from "../../assets/joseLira.jpg";

export function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        <h1 className={styles.title}>Bem vindo</h1>
        <p className={styles.description}>
          A Lira representa mais de 100 anos de historia, não apenas para a
          família, mas também para o estado do Piauí. Francisco José Lira nasceu
          em 1864 e desde 1889 dedicou-se a produção de cachaça e demais
          derivados da cana-de-açúcar.
        </p>
        <p className={styles.description}>
          Com a grande seca de 1915, que devastou o sertão nordestino, ele
          conseguiu transformar a adversidade em oportunidade, momento em que
          abandonou a antiga propriedade e fundou, em Amarante–PI, o Sítio
          Floresta, onde criou meios de sustentabilidade, de preservação
          ambiental e uso racional de recursos naturais. Preocupações que
          somente hoje estão sendo disseminadas globalmente.
        </p>
        <p className={styles.description}>
          A postura ética do Coronel Chico Lira e seu rígido caráter, pautados
          na fé e no respeito aos valores, marcaram profundamente a família.
          José Lira, seu filho, preservou seu empreendimento e, sobretudo, suas
          lições, como um valioso patrimônio para posteridade.
        </p>
        <p className={styles.description}>
          A Cachaça Lira é resultado desse processo que associa a tradição dos
          antigos engenhos com a evolução das novas tecnologias, a paciência do
          tempo secular com o prazer de fazer bem feito, o apuro artesanal
          brasileiro com os mais rigorosos padrões internacionais de qualidade.
          Uma história que a família Lira tem orgulho de demonstrar ao batizar
          com seu próprio nome essa extraordinária bebida.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={ImageWelcome} alt="Imagem" className={styles.image} />
        <p className={styles.legend}>José Lira nas dependências da fábrica</p>
      </div>
    </div>
  );
}
