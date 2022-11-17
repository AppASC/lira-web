import Image from "next/image";
import styles from "./styles.module.css";

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
      <h2 className={styles.subtitle}>Restaurante do Lira Eco Parque </h2>
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
