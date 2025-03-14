import ServiceGeneric from "@/views/shared/services/Service";
import { notFound } from "next/navigation";

const services = {
  estimator: {
    title: "Estimator",
    description:
      "Our expert estimators deliver precise, reliable cost estimates by interpreting complex blueprints and staying updated on market costs.",
    heroImage: "/assets/service/estimator/hero.png",
    overviewItems: [
      "Precision you can rely on",
      "Stay ahead with market insights",
      "Maximize profitability",
      "Expert with bid preparation",
      "Material and labor expert analyst",
    ],
    overviewImage: "/assets/service/estimator/overview.png",
    overviewDescription:
      "A carefully chosen Estimator who is highly detail-oriented, analytical, and knowledgeable about construction processes and materials.",
  },
  "bim-modelling": {
    title: "BIM Modelling",
    description:
      "Our BIM experts use Revit and top software to create precise, coordinated digital models of buildings and infrastructure. With deep expertise in architectural, structural, and MEP systems, they ensure accuracy in every project detail.",
    heroImage: "/assets/service/bim/hero.png",
    overviewItems: [
      "Precision-driven BIM modeling",
      "Comprehensive coordination",
      "Enhanced visualization",
      "Efficiency & cost savings",
      "Future-ready construction",
    ],
    overviewImage: "/assets/service/estimator/overview.png",
    overviewDescription:
      "A competent BIM Modeler who was hand-selected from hundreds of qualified applicants through a rigorous selection process that meets our exclusive requirements.",
  },
};

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
  } = serviceData;

  return (
    <ServiceGeneric
      title={title}
      description={description}
      heroImage={heroImage}
      overviewItems={overviewItems}
      overviewImage={overviewImage}
      overviewDescription={overviewDescription}
    />
  );
}
