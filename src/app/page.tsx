import Image from "next/image";
import styles from "./page.module.css";
import InteractiveMap from "@/components/interactive-map/interactive-map";
import { SideMenu } from "@/components/side-menu/side-menu";

export default function Home() {
  return (
    <main className={styles.Main}>
        <SideMenu />
        <InteractiveMap />
    </main>
  );
}
