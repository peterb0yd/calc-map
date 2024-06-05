import styles from "./page.module.css";
import { InteractiveMap } from "@/components/interactive-map/interactive-map";
import { SideMenu } from "@/components/side-menu/side-menu";
import { CountyService } from "@/api/county/county.service";

const Home = async () => {
    const counties = await CountyService.getCounties();

    return (
        <main className={styles.Main}>
            <SideMenu />
            <InteractiveMap counties={counties} />
        </main>
    );
}

export default Home;