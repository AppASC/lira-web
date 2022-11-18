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
    path: require("../../assets/foodHotel/1.png"),
    alt: "Imagem",
    legend: "Prato X ",
  },
  {
    id: 2,
    path: require("../../assets/foodHotel/2.png"),
    alt: "Imagem",
    legend: "Prato X ",
  },
  {
    id: 3,
    path: require("../../assets/foodHotel/3.png"),
    alt: "Imagem",
    legend: "Prato X ",
  },
  {
    id: 4,
    path: require("../../assets/foodHotel/4.png"),
    alt: "Imagem",
    legend: "Prato X ",
  },
  {
    id: 5,
    path: require("../../assets/foodHotel/5.png"),
    alt: "Imagem",
    legend: "Prato X ",
  },
  {
    id: 6,
    path: require("../../assets/foodHotel/6.png"),
    alt: "Imagem",
    legend: "Prato X ",
  },
];

export function RestaurantHotel() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Restaurante da Pousada de Charme </h2>
      <p className={styles.description}>
        Para uma maior comodidade, nossos hospedes possuem à disposição um
        requintado restaurante nas dependências da pousada.
      </p>
      <h1 className={styles.title}>Requinte e Sofisticação</h1>
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
