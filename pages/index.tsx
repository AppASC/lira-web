import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Header } from "../src/components/Header";
import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Park from "../src/assets/Carousel/park.png";
import Lira from "../src/assets/Carousel/lira.png";
import Hotel from "../src/assets/Carousel/hotel.png";

import { Welcome } from "../src/components/Welcome";
import { Park as ParkPage } from "../src/components/Park";
import { Footer } from "../src/components/Footer";
import { Restaurant } from "../src/components/Restaurant";
import { RestaurantHotel } from "../src/components/RestaurantHotel";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Carousel
          autoPlay
          showArrows={true}
          emulateTouch={false}
          swipeable={false}
          infiniteLoop
          showThumbs={false}
        >
          <Image src={Park} alt="Image do Parque" className={styles.picture} />
          <Image src={Lira} alt="Image do Lira" className={styles.picture} />
          <Image src={Hotel} alt="Image do Hotel" className={styles.picture} />
        </Carousel>
        <Welcome />
        <div id="park">
          <ParkPage />
        </div>
        <div id="restaurant">
          <Restaurant />
          <RestaurantHotel />
        </div>
      </div>

      <Footer />
    </div>
  );
}
