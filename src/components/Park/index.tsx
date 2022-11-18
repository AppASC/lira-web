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
    path: require("../../assets/activities/arco.jpeg"),
    alt: "Imagem",
    legend: "Arco e Flecha",
  },
  {
    id: 2,
    path: require("../../assets/activities/arvorismo.jpeg"),
    alt: "Imagem",
    legend: "Arvorismo",
  },
  {
    id: 3,
    path: require("../../assets/activities/bike.jpeg"),
    alt: "Imagem",
    legend: "Bike",
  },
  {
    id: 4,
    path: require("../../assets/activities/caiaque.jpeg"),
    alt: "Imagem",
    legend: "Caiaque",
  },
  {
    id: 5,
    path: require("../../assets/activities/escalada.jpeg"),
    alt: "Imagem",
    legend: "Escalada",
  },
  {
    id: 6,
    path: require("../../assets/activities/standup.jpeg"),
    alt: "Imagem",
    legend: "Stand Up",
  },
  {
    id: 7,
    path: require("../../assets/activities/tirolesa.jpeg"),
    alt: "Imagem",
    legend: "Tirolesa",
  },
  {
    id: 8,
    path: require("../../assets/activities/trilha.jpeg"),
    alt: "Imagem",
    legend: "Trilha",
  },
];

export function Park() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Lira Eco Parque</h2>
      <p className={styles.description}>
        Um lugar ecológico para quem deseja fugir da cidade e descansar no
        conforto da natureza.
      </p>
      <h1 className={styles.title}>Conheça nossas atrações!</h1>
      <div className={styles.activitiesContainer}>
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
