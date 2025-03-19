import HeroFindJob from "@/views/find-a-job/sections/HeroFindJob";
import ApplicationProcess from "@/views/find-a-job/sections/ApplicationProcess";
import OurServicesJob from "@/views/shared/OurServices";
import JobAlert from "@/views/shared/JobAlert";
import BenefitsJob from "@/views/find-a-job/sections/BenefitsJob";
import WeeklyJobs from "@/views/find-a-job/sections/WeeklyJobs";
import Testimonials from "@/views/shared/Testimonials";
import FAQ from "@/views/shared/FAQ";
import FindJobSeparator from "@/views/find-a-job/sections/FindJobSeparator";

export default function FindJobPage() {
  return (
    <main>
      <HeroFindJob />

      <ApplicationProcess />

      <OurServicesJob
        title="Whatʼs your professional focus?"
        description="Your skills. The right job. Letʼs construct your success together!"
        subCaption="Professional services"
        backgroundColor="white"
      />

      <JobAlert roundedTopCorner="true" />

      <BenefitsJob />

      <WeeklyJobs />

      <Testimonials title="Voices from our team" />

      <FAQ />

      <FindJobSeparator />
    </main>
  );
}
