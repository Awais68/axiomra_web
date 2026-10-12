import PaHero from "../components/process-automation/PaHero";
import PaStats from "../components/process-automation/PaStats";
import PaIntro from "../components/process-automation/PaIntro";
import PaServices from "../components/process-automation/PaServices";
import PaCtaBand from "../components/process-automation/PaCtaBand";
import PaIndustries from "../components/process-automation/PaIndustries";
import PaProcess from "../components/process-automation/PaProcess";
import PaImpact from "../components/process-automation/PaImpact";
import PaStages from "../components/process-automation/PaStages";
import PaWhyUs from "../components/process-automation/PaWhyUs";
import IndustriesTestimonials from "../components/industries/IndustriesTestimonials";

import Portfolio from "../sections/Portfolio";
import FAQ from "../sections/FAQ";

import Seo from "../seo/Seo";
import { faqPageSchema, serviceSchema } from "../seo/schema";
import { SERVICES_BASE_PATH } from "../routes.constants";
import {
  PROCESS_AUTOMATION_PATH,
  faqs,
  finalCta,
  fitCta,
  testimonialsHeading,
} from "../data/processAutomationData";
import { testimonials } from "../data/industriesData";

const META_DESCRIPTION =
  "Business process automation from Axiomra: consulting, RPA, intelligent document " +
  "processing and workflow automation built around the systems you already run.";

// Same approved client quotes as the industries pages; `flat` swaps the
// shared sections' gradients for solid fills.
const paTestimonials = { ...testimonials, ...testimonialsHeading };

export default function ProcessAutomationPage() {
  return (
    <div>
      <Seo
        title="Business Process Automation Services | Axiomra"
        description={META_DESCRIPTION}
        path={PROCESS_AUTOMATION_PATH}
        image="/og/process-automation.jpg"
        breadcrumbs={[
          { name: "Services", path: SERVICES_BASE_PATH },
          { name: "Process Automation" },
        ]}
        jsonLd={[
          serviceSchema({
            name: "Business Process Automation Services",
            description: META_DESCRIPTION,
            path: PROCESS_AUTOMATION_PATH,
          }),
          faqPageSchema(faqs),
        ]}
      />
      <PaHero />
      <PaStats />
      <PaIntro />
      <PaServices />
      <PaCtaBand tone="light" {...fitCta} />
      <PaIndustries />
      <PaProcess />
      <Portfolio flat />
      <IndustriesTestimonials data={paTestimonials} flat />
      <PaImpact />
      <PaStages />
      <PaWhyUs />
      <FAQ id="pa-faq" eyebrow="Process automation, answered" items={faqs} />
      <PaCtaBand {...finalCta} />
    </div>
  );
}
