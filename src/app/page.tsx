import styles from "./page.module.css";
import { CountyService } from "@/api/county/county.service";
import { Suspense } from "react";
import { PageContent } from "./page-content";

const Home = async () => {
    const counties = await CountyService.getCounties();

    return (
        <main className={styles.Main}>
            <Suspense fallback={<div>Loading...</div>}>
                <PageContent counties={counties} />
            </Suspense>
        </main>
    );
}

export default Home;