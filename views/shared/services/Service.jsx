import HeroService from "@/views/service/sections/Hero";
import OverviewService from "@/views/service/sections/Overview";
import SoftwareUsedService from "../SoftwareUsed";
import SeparatorChallengeService from "@/views/service/sections/SeparatorChallenge";
import OurServicesIndividual from "../OurServices";
import FAQ from "../FAQ";
import JobAlert from "../JobAlert";

export default function ServiceGeneric({
  title,
  description,
  heroImage,
  overviewItems,
  overviewImage,
  overviewDescription,
  extraTest,
}) {
  return (
    <main>
      <HeroService
        title={title}
        description={description}
        heroImage={heroImage}
        extraTest={extraTest}
      />

      <OverviewService
        overviewItems={overviewItems}
        overviewImage={overviewImage}
        overviewDescription={overviewDescription}
      />

      <SoftwareUsedService />

      <SeparatorChallengeService />

      <OurServicesIndividual backgroundColor="white" />

      <FAQ rounded="true" />

      <JobAlert />
    </main>
  );
}
