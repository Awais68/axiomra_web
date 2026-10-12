import LlmHero from "../components/llm-infra/LlmHero";
import LlmOutgrown from "../components/llm-infra/LlmOutgrown";
import LlmServices from "../components/llm-infra/LlmServices";
import LlmCtaBand from "../components/llm-infra/LlmCtaBand";
import LlmIndustries from "../components/llm-infra/LlmIndustries";
import LlmProcess from "../components/llm-infra/LlmProcess";
import LlmTechStack from "../components/llm-infra/LlmTechStack";
import LlmWhyUs from "../components/llm-infra/LlmWhyUs";
import LlmClosing from "../components/llm-infra/LlmClosing";
import IndustriesTestimonials from "../components/industries/IndustriesTestimonials";

import Awards from "../sections/Awards";
import FAQ from "../sections/FAQ";

import Seo from "../seo/Seo";
import { faqPageSchema, serviceSchema } from "../seo/schema";
import { SERVICES_BASE_PATH } from "../routes.constants";
import {
  LLM_INFRA_PATH,
  faqs,
  midCta,
  testimonialsHeading,
  toolsCta,
} from "../data/llmInfrastructureData";
import { testimonials } from "../data/industriesData";

const META_DESCRIPTION =
  "Enterprise LLM infrastructure from Axiomra: private, on-premise and VPC LLM deployment, " +
  "open-source model hosting, RAG and LLMOps, built so your data never leaves your network.";

// Same approved client quotes as the industries pages, under this page's heading.
const llmTestimonials = { ...testimonials, ...testimonialsHeading };

export default function LlmInfrastructurePage() {
  return (
    <div>
      <Seo
        title="Enterprise LLM Infrastructure Services | Axiomra"
        description={META_DESCRIPTION}
        path={LLM_INFRA_PATH}
        image="/og/llm-infrastructure.jpg"
        breadcrumbs={[
          { name: "Services", path: SERVICES_BASE_PATH },
          { name: "Enterprise LLM Infrastructure" },
        ]}
        jsonLd={[
          serviceSchema({
            name: "Enterprise LLM Infrastructure Services",
            description: META_DESCRIPTION,
            path: LLM_INFRA_PATH,
          }),
          faqPageSchema(faqs),
        ]}
      />
      <LlmHero />
      <LlmOutgrown />
      <LlmServices />
      <LlmCtaBand {...midCta} />
      <Awards />
      <LlmIndustries />
      <LlmProcess />
      <LlmTechStack />
      <LlmCtaBand {...toolsCta} />
      <LlmWhyUs />
      <IndustriesTestimonials data={llmTestimonials} />
      <LlmClosing />
      <FAQ id="llm-faq" eyebrow="Private LLMs, answered" items={faqs} />
    </div>
  );
}
