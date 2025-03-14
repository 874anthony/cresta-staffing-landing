import HeroService from "@/views/service/sections/Hero";
import OverviewService from "@/views/service/sections/Overview";
import SoftwareUsedService from "@/views/service/sections/SoftwareUsed";
import SeparatorChallengeService from "@/views/service/sections/SeparatorChallenge";
import FAQ from "../FAQ";
import JobAlert from "../JobAlert";

import styles from "./Service.module.scss";

export default function ServiceGeneric({
  title,
  description,
  heroImage,
  overviewItems,
  overviewImage,
  overviewDescription,
}) {
  return (
    <main>
      <HeroService
        title={title}
        description={description}
        heroImage={heroImage}
      />

      <OverviewService
        overviewItems={overviewItems}
        overviewImage={overviewImage}
        overviewDescription={overviewDescription}
      />

      <SoftwareUsedService />

      <SeparatorChallengeService />

      <section className={styles.professionalServices}>
        <p>To be done later.</p>
      </section>

      <FAQ rounded="true" />

      <JobAlert />
    </main>
  );
}
