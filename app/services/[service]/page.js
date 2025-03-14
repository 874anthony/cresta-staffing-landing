import ServiceGeneric from "@/views/shared/services/Service";
import { notFound } from "next/navigation";

import services from "@/data/services";

export default function Service({ params }) {
  const { service } = params;
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
  } = serviceData;

  return (
    <ServiceGeneric
      title={title}
      description={description}
      heroImage={heroImage}
      overviewItems={overviewItems}
      overviewImage={overviewImage}
      overviewDescription={overviewDescription}
      extraTest={extraTest}
    />
  );
}
