import styles from "./page.module.css";
import { InteractiveMap } from "@/components/interactive-map/interactive-map";
import { CountyService } from "@/api/county/county.service";
import { Suspense } from "react";
import { Menu } from "./menu/menu";

const Home = async () => {
    const counties = await CountyService.getCounties();

    return (
        <main className={styles.Main}>
            <Suspense fallback={<div>Loading...</div>}>
                <Menu counties={counties} />
                <InteractiveMap counties={counties} />
            </Suspense>
        </main>
    );
}

export default Home;