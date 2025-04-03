import ServiceGeneric from "@/views/shared/services/Service";
import { notFound } from "next/navigation";

import services from "@/data/services";

export async function generateMetadata({ params }) {
  const { service } = await params;

  const serviceTitle = service.charAt(0).toUpperCase() + service.slice(1);
  const title = `${serviceTitle} job - Cresta Staffing`;

  return {
    title,
  };
}

export default async function Service({ params }) {
  const { service } = await params;
  const serviceData = services[service];

  if (!serviceData) return notFound(); // Handles unknown services gracefully

  const {
    title,
    description,
    heroImage,
    overviewItems,
    overviewImage,
    overviewDescription,
    extraTest,
    servicesImages,
  } = serviceData;

  return (
    <ServiceGeneric
      title={title}
      description={description}
      heroImage={heroImage}
      overviewItems={overviewItems}
      overviewImage={overviewImage}
      overviewDescription={overviewDescription}
      servicesImages={servicesImages}
      extraTest={extraTest}
    />
  );
}
