import styles from "./page.module.css";
import { InteractiveMap } from "@/components/interactive-map/interactive-map";
import { SideMenu } from "@/components/side-menu/side-menu";
import { CountyService } from "@/api/county/county.service";
import { PageProps } from "../../.next/types/app/page";

const Home = async ({ searchParams }: PageProps) => {
    const counties = await CountyService.getCounties();
    const mapOption = searchParams.map as string;

    return (
        <main className={styles.Main}>
            <SideMenu mapOption={mapOption} />
            <InteractiveMap counties={counties} />
        </main>
    );
}

export default Home;