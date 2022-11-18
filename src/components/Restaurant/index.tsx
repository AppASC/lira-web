import Image from "next/image";
import styles from "./styles.module.css";
import RestauranteImage from "../../assets/restPark.png";
type ActivitiesProps = {
  id: number;
  path: string;
  alt: string;
  legend: string;
};

const activities: ActivitiesProps[] = [
  {
    id: 1,
    path: require("../../assets/foodPark/1.png"),
    alt: "Imagem",
    legend: "Arroz com toucinho",
  },
  {
    id: 2,
    path: require("../../assets/foodPark/2.png"),
    alt: "Imagem",
    legend: "Velho Monge",
  },
  {
    id: 3,
    path: require("../../assets/foodPark/3.png"),
    alt: "Imagem",
    legend: "Carne de sol sertaneja",
  },
  {
    id: 4,
    path: require("../../assets/foodPark/4.png"),
    alt: "Imagem",
    legend: "Pastel",
  },
  {
    id: 5,
    path: require("../../assets/foodPark/5.png"),
    alt: "Imagem",
    legend: "Panceta Suína",
  },
  {
    id: 6,
    path: require("../../assets/foodPark/6.png"),
    alt: "Imagem",
    legend: "Filé a Parmegiana",
  },
];

export function Restaurant() {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Image
          src={RestauranteImage}
          alt="Imagem"
          className={styles.mainImage}
        />

        <div className={styles.infoContainer}>
          <h2 className={styles.subtitle}>Restaurante do Lira Eco Parque </h2>
          <p className={styles.description}>
            Inspirado pelo potencial cultural de Amarante, o restaurante do Lira
            Eco Parque não poderia ser diferente. Mais que um restaurante, é por
            si só uma obra de arte.
          </p>
          <p className={styles.description}>
            Desenhado pelo artista plástico Hostyano Machado, foi construído com
            materiais que valorizassem nossa terra. Desde os pilares, até os
            lustres (feitos de cerâmica e bambu), tudo foi feito para dar maior
            conforto aos apreciadores de uma boa gastronomia. Afinal, dizem que
            a culinária é a arte mais antiga e mais consumida no mundo.
          </p>
        </div>
      </div>
      <h1 className={styles.title}>A melhor comida do Piauí</h1>
      <div className={styles.foodContainer}>
        {activities.map((activity) => (
          <div key={activity.id}>
            <Image
              src={activity.path}
              alt={activity.alt}
              className={styles.image}
            />
            <p className={styles.legend}>{activity.legend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
