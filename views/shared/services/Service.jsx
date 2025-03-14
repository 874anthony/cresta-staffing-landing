import HeroService from "@/views/service/sections/Hero";
import OverviewService from "@/views/service/sections/Overview";

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
    </main>
  );
}
